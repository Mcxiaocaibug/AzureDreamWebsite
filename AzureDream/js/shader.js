const vertexShader = `
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

const fragmentShader = `
    uniform float time;
    uniform vec2 resolution;
    varying vec2 vUv;
    
    float opSmoothUnion(float d1, float d2, float k) {
        float h = clamp(0.5 + 0.5 * (d2 - d1) / k, 0.0, 1.0);
        return mix(d2, d1, h) - k * h * (1.0 - h);
    }
    
    float sdSphere(vec3 p, float s) {
        return length(p) - s;
    } 
    
    float map(vec3 p) {
        float d = 2.0;
        for (int i = 0; i < 16; i++) {
            float fi = float(i);
            float t = time * (fract(fi * 412.531 + 0.513) - 0.5) * 2.0;
            d = opSmoothUnion(
                sdSphere(p + sin(t + fi * vec3(52.5126, 64.62744, 632.25)) * vec3(2.0, 2.0, 0.8), 
                         mix(0.5, 1.0, fract(fi * 412.531 + 0.5124))),
                d,
                0.4
            );
        }
        return d;
    }
    
    vec3 calcNormal(in vec3 p) {
        const float h = 1e-5;
        const vec2 k = vec2(1, -1);
        return normalize(k.xyy * map(p + k.xyy * h) + 
                         k.yyx * map(p + k.yyx * h) + 
                         k.yxy * map(p + k.yxy * h) + 
                         k.xxx * map(p + k.xxx * h));
    }
    
    void main() {
        vec2 fragCoord = vUv * resolution;
        vec2 uv = fragCoord / resolution.xy;
        
        // screen size is 6m x 6m
        vec3 rayOri = vec3((uv - 0.5) * vec2(resolution.x / resolution.y, 1.0) * 6.0, 3.0);
        vec3 rayDir = vec3(0.0, 0.0, -1.0);
        
        float depth = 0.0;
        vec3 p;
        
        for(int i = 0; i < 64; i++) {
            p = rayOri + rayDir * depth;
            float dist = map(p);
            depth += dist;
            if (dist < 1e-6) {
                break;
            }
        }
        
        depth = min(6.0, depth);
        vec3 n = calcNormal(p);
        float b = max(0.0, dot(n, vec3(0.577)));
        vec3 col = (0.5 + 0.5 * cos((b + time * 3.0) + uv.xyx * 2.0 + vec3(0, 2, 4))) * (0.85 + b * 0.35);
        col *= exp(-depth * 0.15);
        
        gl_FragColor = vec4(col, 1.0);
    }
`;

class ShaderBackground {
    constructor() {
        this.container = document.getElementById('shader-container');
        this.scene = new THREE.Scene();
        this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance'
        });
        this.material = null;
        this.init();
    }

    init() {
        try {
            // Use lower pixel ratio for better performance
            const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.renderer.setPixelRatio(pixelRatio);
            this.container.appendChild(this.renderer.domElement);

            const geometry = new THREE.PlaneGeometry(2, 2);
            this.material = new THREE.ShaderMaterial({
                vertexShader,
                fragmentShader,
                uniforms: {
                    time: { value: 0 },
                    resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
                },
                transparent: true
            });

            const mesh = new THREE.Mesh(geometry, this.material);
            this.scene.add(mesh);

            window.addEventListener('resize', this.onResize.bind(this));
            document.addEventListener('visibilitychange', () => {
                if (document.hidden) {
                    this.pause();
                } else {
                    this.resume();
                }
            });
            this.animate();
        } catch (error) {
            // Silently fail - shader is decorative only
            return;
        }
    }

    onResize() {
        // Throttle resize events for better performance
        if (this._resizeTimeout) {
            clearTimeout(this._resizeTimeout);
        }
        
        this._resizeTimeout = setTimeout(() => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            
            this.renderer.setSize(width, height);
            if (this.material) {
                this.material.uniforms.resolution.value.set(width, height);
            }
            
            this.camera.updateProjectionMatrix();
        }, 150);
    }

    animate() {
        if (!this._running) this._running = true;
        const loop = () => {
            if (!this._running) return;
            requestAnimationFrame(loop);
            if (this.material) {
                // Smooth and slow animation for better aesthetics
                this.material.uniforms.time.value += 0.01;
            }
            this.renderer.render(this.scene, this.camera);
        };
        loop();
    }

    pause() {
        this._running = false;
    }

    resume() {
        if (!this._running) this.animate();
    }
}

window.addEventListener('load', () => {
    if (typeof THREE === 'undefined') {
        return; // Silently skip if THREE.js not available
    }
    
    try {
        new ShaderBackground();
    } catch (error) {
        // Silently fail - shader is decorative only
    }
});
