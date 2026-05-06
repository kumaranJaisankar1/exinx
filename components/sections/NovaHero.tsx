"use client";

import React, { useRef, useEffect } from 'react';

// Types for component props
interface NovaHeroProps {
  trustBadge?: {
    text: string;
    icons?: string[];
  };
  headline: {
    line1: string;
    line2: string;
  };
  subtitle: string;
  buttons?: {
    primary?: {
      text: string;
      onClick?: () => void;
    };
    secondary?: {
      text: string;
      onClick?: () => void;
    };
  };
  className?: string;
}

const defaultShaderSource = `#version 300 es
precision highp float;
out vec4 O;
uniform vec2 resolution;
uniform float time;
uniform vec2 move;
uniform vec2 touch;
uniform int pointerCount;
uniform vec2 pointers[10];

#define FC gl_FragCoord.xy
#define T time
#define R resolution
#define MN min(R.x,R.y)

float rnd(vec2 p) {
  p=fract(p*vec2(12.9898,78.233));
  p+=dot(p,p+34.56);
  return fract(p.x*p.y);
}

float noise(in vec2 p) {
  vec2 i=floor(p), f=fract(p), u=f*f*(3.-2.*f);
  float
  a=rnd(i),
  b=rnd(i+vec2(1,0)),
  c=rnd(i+vec2(0,1)),
  d=rnd(i+1.);
  return mix(mix(a,b,u.x),mix(c,d,u.x),u.y);
}

float fbm(vec2 p) {
  float t=.0, a=1.; mat2 m=mat2(1.,-.5,.2,1.2);
  for (int i=0; i<5; i++) {
    t+=a*noise(p);
    p*=2.*m;
    a*=.5;
  }
  return t;
}

float clouds(vec2 p) {
	float d=1., t=.0;
	for (float i=.0; i<3.; i++) {
		float a=d*fbm(i*10.+p.x*.2+.2*(1.+i)*p.y+d+i*i+p);
		t=mix(t,d,a);
		d=a;
		p*=2./(i+1.);
	}
	return t;
}

void main(void) {
	vec2 uv=(FC-.5*R)/MN,st=uv*vec2(2,1);
	vec3 col=vec3(0);
	float bg=clouds(vec2(st.x+T*.5,-st.y));
	uv*=1.-.3*(sin(T*.2)*.5+.5);
	for (float i=1.; i<12.; i++) {
		uv+=.1*cos(i*vec2(.1+.01*i, .8)+i*i+T*.5+.1*uv.x);
		vec2 p=uv;
		float d=length(p);
		col+=.00125/d*(cos(sin(i)*vec3(1,2,3))+1.);
		float b=noise(i+p+bg*1.731);
		col+=.002*b/length(max(p,vec2(b*p.x*.02,p.y)));
		col=mix(col,vec3(bg*.25,bg*.137,bg*.05),d);
	}
	O=vec4(col,1);
}`;

const useShaderBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  
  // Define classes outside the hook for clarity if possible, but keeping logic consistent
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const gl = canvas.getContext('webgl2')!;
    const dpr = Math.max(1, 0.5 * window.devicePixelRatio);

    class WebGLRenderer {
      private gl: WebGL2RenderingContext;
      private program: WebGLProgram | null = null;
      private vs: WebGLShader | null = null;
      private fs: WebGLShader | null = null;
      private buffer: WebGLBuffer | null = null;
      private scale: number;
      private shaderSource: string;
      private mouseMove = [0, 0];
      private mouseCoords = [0, 0];
      private pointerCoords = [0, 0];
      private nbrOfPointers = 0;

      private vertexSrc = `#version 300 es
precision highp float;
in vec4 position;
void main(){gl_Position=position;}`;

      private vertices = [-1, 1, -1, -1, 1, 1, 1, -1];

      constructor(gl: WebGL2RenderingContext, scale: number) {
        this.gl = gl;
        this.scale = scale;
        this.shaderSource = defaultShaderSource;
      }

      updateShader(source: string) {
        this.reset();
        this.shaderSource = source;
        this.setup();
        this.init();
      }

      updateMove(deltas: number[]) {
        this.mouseMove = deltas;
      }

      updateMouse(coords: number[]) {
        this.mouseCoords = coords;
      }

      updatePointerCoords(coords: number[]) {
        this.pointerCoords = coords;
      }

      updatePointerCount(nbr: number) {
        this.nbrOfPointers = nbr;
      }

      updateScale(scale: number) {
        this.scale = scale;
        this.gl.viewport(0, 0, canvas.width, canvas.height);
      }

      compile(shader: WebGLShader, source: string) {
        const gl = this.gl;
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
          console.error('Shader compilation error:', gl.getShaderInfoLog(shader));
        }
      }

      reset() {
        const gl = this.gl;
        if (this.program) {
          gl.deleteProgram(this.program);
        }
      }

      setup() {
        const gl = this.gl;
        this.vs = gl.createShader(gl.VERTEX_SHADER)!;
        this.fs = gl.createShader(gl.FRAGMENT_SHADER)!;
        this.compile(this.vs, this.vertexSrc);
        this.compile(this.fs, this.shaderSource);
        this.program = gl.createProgram()!;
        gl.attachShader(this.program, this.vs);
        gl.attachShader(this.program, this.fs);
        gl.linkProgram(this.program);
      }

      init() {
        const gl = this.gl;
        const program = this.program!;
        this.buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
        const position = gl.getAttribLocation(program, 'position');
        gl.enableVertexAttribArray(position);
        gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
        
        // Cache uniform locations
        (program as any).resolution = gl.getUniformLocation(program, 'resolution');
        (program as any).time = gl.getUniformLocation(program, 'time');
        (program as any).move = gl.getUniformLocation(program, 'move');
        (program as any).touch = gl.getUniformLocation(program, 'touch');
        (program as any).pointerCount = gl.getUniformLocation(program, 'pointerCount');
        (program as any).pointers = gl.getUniformLocation(program, 'pointers');
      }

      render(now = 0) {
        const gl = this.gl;
        const program = this.program;
        if (!program) return;
        gl.useProgram(program);
        gl.uniform2f((program as any).resolution, canvas.width, canvas.height);
        gl.uniform1f((program as any).time, now * 1e-3);
        gl.uniform2f((program as any).move, ...this.mouseMove);
        gl.uniform2f((program as any).touch, ...this.mouseCoords);
        gl.uniform1i((program as any).pointerCount, this.nbrOfPointers);
        // Correctly handle float array for pointers
        const ptrs = new Float32Array(this.pointerCoords.length);
        ptrs.set(this.pointerCoords);
        gl.uniform2fv((program as any).pointers, ptrs);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      }
    }

    class PointerHandler {
      private active = false;
      private pointers = new Map<number, number[]>();
      private moves = [0, 0];

      constructor(element: HTMLCanvasElement) {
        const map = (x: number, y: number) => [x * dpr, canvas.height - y * dpr];
        element.addEventListener('pointerdown', (e) => {
          this.active = true;
          this.pointers.set(e.pointerId, map(e.clientX, e.clientY));
        });
        element.addEventListener('pointerup', (e) => {
          this.pointers.delete(e.pointerId);
          this.active = this.pointers.size > 0;
        });
        element.addEventListener('pointerleave', (e) => {
          this.pointers.delete(e.pointerId);
          this.active = this.pointers.size > 0;
        });
        element.addEventListener('pointermove', (e) => {
          if (!this.active) return;
          this.pointers.set(e.pointerId, map(e.clientX, e.clientY));
          this.moves = [this.moves[0] + e.movementX, this.moves[1] + e.movementY];
        });
      }
      get count() { return this.pointers.size; }
      get move() { return this.moves; }
      get coords() { 
        return this.pointers.size > 0 ? Array.from(this.pointers.values()).flat() : [0, 0]; 
      }
      get first() { 
        return this.pointers.size > 0 ? this.pointers.values().next().value : [0, 0]; 
      }
    }

    const renderer = new WebGLRenderer(gl, dpr);
    const pointers = new PointerHandler(canvas);
    renderer.setup();
    renderer.init();

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      renderer.updateScale(dpr);
    };
    resize();

    const loop = (now: number) => {
      renderer.updateMouse(pointers.first);
      renderer.updatePointerCount(pointers.count);
      renderer.updatePointerCoords(pointers.coords);
      renderer.updateMove(pointers.move);
      renderer.render(now);
      animationFrameRef.current = requestAnimationFrame(loop);
    };
    animationFrameRef.current = requestAnimationFrame(loop);

    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      renderer.reset();
    };
  }, []);

  return canvasRef;
};

const NovaHero: React.FC<NovaHeroProps> = ({
  trustBadge,
  headline,
  subtitle,
  buttons,
  className = ""
}) => {
  const canvasRef = useShaderBackground();

  return (
    <div className={`relative w-full h-screen overflow-hidden ${className}`}>
      
      <style jsx>{`
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; opacity: 0; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-800 { animation-delay: 0.8s; }
        
        .neon-text {
          text-shadow: 
            0 0 7px rgba(255, 165, 0, 0.3),
            0 0 10px rgba(255, 165, 0, 0.2),
            0 0 21px rgba(255, 165, 0, 0.1),
            0 0 42px rgba(255, 165, 0, 0.1);
          filter: drop-shadow(0 0 15px rgba(255, 165, 0, 0.2));
        }
      `}</style>
      
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover touch-none"
        style={{ background: 'transparent' }}
      />
      
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white px-4">
        {trustBadge && (
          <div className="mb-8 animate-fade-in-down">
            <div className="flex items-center gap-2 px-6 py-3 bg-orange-500/10 backdrop-blur-md border border-orange-300/30 rounded-full text-sm">
              {trustBadge.icons && (
                <div className="flex gap-1">
                  {trustBadge.icons.map((icon, index) => (
                    <span key={index} className="text-orange-300">{icon}</span>
                  ))}
                </div>
              )}
              <span className="text-orange-100">{trustBadge.text}</span>
            </div>
          </div>
        )}

        <div className="text-center space-y-6 max-w-5xl">
          <div className="space-y-0">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-syne bg-gradient-to-b from-white via-orange-100 to-orange-400 bg-clip-text text-transparent animate-fade-in-up animation-delay-200 neon-text leading-[0.95]">
              {headline.line1}
            </h1>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-syne bg-gradient-to-t from-orange-500 via-orange-300 to-white bg-clip-text text-transparent animate-fade-in-up animation-delay-400 neon-text leading-[0.95]">
              {headline.line2}
            </h1>
          </div>
          
          <div className="max-w-3xl mx-auto animate-fade-in-up animation-delay-600">
            <p className="text-lg md:text-xl lg:text-2xl text-orange-100/90 font-light leading-relaxed">
              {subtitle}
            </p>
          </div>
          
          {buttons && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 animate-fade-in-up animation-delay-800">
              {buttons.primary && (
                <button 
                  onClick={buttons.primary.onClick}
                  className="px-10 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]"
                >
                  {buttons.primary.text}
                </button>
              )}
              {buttons.secondary && (
                <button 
                  onClick={buttons.secondary.onClick}
                  className="px-10 py-4 bg-orange-500/10 hover:bg-orange-500/20 border border-orange-300/30 hover:border-orange-300/50 text-orange-100 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                >
                  {buttons.secondary.text}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NovaHero;
