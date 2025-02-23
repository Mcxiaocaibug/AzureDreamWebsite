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

    void main() {
        vec2 position = vUv * 2.0 - 1.0;
        position.x *= resolution.x / resolution.y;
        
        float color = 0.0;
        float t = time * 0.5;
        
        for(float i = 0.0; i < 3.0; i++) {
            position = abs(position) / dot(position, position) - 0.9;
            color += length(position) * 0.1;
            color += sin(position.x * 2.0 + t) * 0.1;
            color += cos(position.y * 2.0 + t) * 0.1;
        }
        
        vec3 finalColor = vec3(
            color * 0.5 + 0.2,  // Blue
            color * 0.3 + 0.1,  // Slightly less green
            color + 0.3         // Most blue
        );
        
        gl_FragColor = vec4(finalColor, 1.0);
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
            preserveDrawingBuffer: true
        });
        this.material = null;
        this.init();
    }

    init() {
        try {
            if (!this.renderer.capabilities.isWebGL2) {
                console.warn('WebGL 2 不可用，尝试使用 WebGL 1');
            }

            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.renderer.setPixelRatio(window.devicePixelRatio);
            this.container.appendChild(this.renderer.domElement);

            const geometry = new THREE.PlaneGeometry(2, 2);
            this.material = new THREE.ShaderMaterial({
                vertexShader: `
                    varying vec2 vUv;
                    void main() {
                        vUv = uv;
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    }
                `,
                fragmentShader: `
                    uniform float time;
                    uniform vec2 resolution;
                    varying vec2 vUv;

                    #define PI 3.14159265359
                    #define TWO_PI 6.28318530718

                    vec2 rotate2D(vec2 _st, float _angle) {
                        _st -= 0.5;
                        _st =  mat2(cos(_angle),-sin(_angle),
                                sin(_angle),cos(_angle)) * _st;
                        _st += 0.5;
                        return _st;
                    }

                    vec2 tile(vec2 _st, float _zoom) {
                        _st *= _zoom;
                        return fract(_st);
                    }

                    float random (vec2 st) {
                        return fract(sin(dot(st.xy,
                                         vec2(12.9898,78.233)))*
                            43758.5453123);
                    }

                    vec2 truchetPattern(in vec2 _st, in float _index) {
                        _index = fract(((_index-0.5)*2.0));
                        if (_index > 0.75) {
                            _st = vec2(1.0) - _st;
                        } else if (_index > 0.5) {
                            _st = vec2(1.0-_st.x,_st.y);
                        } else if (_index > 0.25) {
                            _st = 1.0-vec2(1.0-_st.x,_st.y);
                        }
                        return _st;
                    }

                    void main() {
                        vec2 st = vUv;
                        st *= 2.0;

                        // Rotate the space
                        st = rotate2D(st, time * 0.2);

                        // Make the space tile
                        vec2 ipos = floor(st);
                        vec2 fpos = fract(st);
                        
                        vec2 tile = truchetPattern(fpos, random(ipos));
                        float pattern = 0.0;

                        // Animate the pattern
                        float t = time * 1.0;
                        
                        // Add some waves
                        pattern = smoothstep(tile.x - 0.3 + sin(t + tile.y * PI) * 0.1,
                                          tile.x,
                                          tile.y);
                        
                        // Create rainbow colors
                        vec3 color1 = vec3(0.0, 0.5, 1.0); // Azure blue
                        vec3 color2 = vec3(0.4, 0.7, 1.0); // Light blue
                        vec3 color3 = vec3(0.0, 0.8, 0.8); // Cyan

                        // Mix colors based on pattern and time
                        vec3 finalColor = mix(
                            mix(color1, color2, pattern),
                            color3,
                            sin(time * 0.5) * 0.5 + 0.5
                        );

                        // Add some glow
                        finalColor += vec3(0.1) * (1.0 - pattern);
                        
                        // Output final color with alpha
                        gl_FragColor = vec4(finalColor, 0.9);
                    }
                `,
                uniforms: {
                    time: { value: 0 },
                    resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
                },
                transparent: true
            });

            const mesh = new THREE.Mesh(geometry, this.material);
            this.scene.add(mesh);

            window.addEventListener('resize', this.onResize.bind(this));
            this.animate();
        } catch (error) {
            console.error('Shader 初始化失败:', error);
        }
    }

    onResize() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        this.renderer.setSize(width, height);
        if (this.material) {
            this.material.uniforms.resolution.value.set(width, height);
        }
        
        this.camera.updateProjectionMatrix();
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));
        if (this.material) {
            this.material.uniforms.time.value += 0.01;
        }
        this.renderer.render(this.scene, this.camera);
    }
}

window.addEventListener('load', () => {
    if (typeof THREE === 'undefined') {
        console.error('Three.js 未加载');
        return;
    }
    
    try {
        new ShaderBackground();
    } catch (error) {
        console.error('Shader 背景初始化失败:', error);
    }
}); 