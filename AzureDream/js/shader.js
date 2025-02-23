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

    vec3 spectral_colour(float l) {
        float r=0.0,g=0.0,b=0.0;
        if ((l>=400.0)&&(l<410.0)) { float t=(l-400.0)/(410.0-400.0); r=    +(0.33*t)-(0.20*t*t); }
        else if ((l>=410.0)&&(l<475.0)) { float t=(l-410.0)/(475.0-410.0); r=0.14         -(0.13*t*t); }
        else if ((l>=545.0)&&(l<595.0)) { float t=(l-545.0)/(595.0-545.0); r=    +(1.98*t)-(     t*t); }
        else if ((l>=595.0)&&(l<650.0)) { float t=(l-595.0)/(650.0-595.0); r=0.98+(0.06*t)-(0.40*t*t); }
        else if ((l>=650.0)&&(l<700.0)) { float t=(l-650.0)/(700.0-650.0); r=0.65-(0.84*t)+(0.20*t*t); }
        if ((l>=415.0)&&(l<475.0)) { float t=(l-415.0)/(475.0-415.0); g=             +(0.80*t*t); }
        else if ((l>=475.0)&&(l<590.0)) { float t=(l-475.0)/(590.0-475.0); g=0.8 +(0.76*t)-(0.80*t*t); }
        else if ((l>=585.0)&&(l<639.0)) { float t=(l-585.0)/(639.0-585.0); g=0.82-(0.80*t)           ; }
        if ((l>=400.0)&&(l<475.0)) { float t=(l-400.0)/(475.0-400.0); b=    +(2.20*t)-(1.50*t*t); }
        else if ((l>=475.0)&&(l<560.0)) { float t=(l-475.0)/(560.0-475.0); b=0.7 -(     t)+(0.30*t*t); }
        return vec3(r,g,b);
    }

    void main() {
        vec2 p = (2.0 * vUv - 1.0) * 2.0;
        p.x *= resolution.x/resolution.y;

        for(int i=0; i<8; i++) {
            vec2 newp = vec2(
                p.y + cos(p.x + time) - sin(p.y * cos(time * 0.2)),
                p.x - sin(p.y - time) - cos(p.x * sin(time * 0.3))
            );
            p = newp;
        }

        vec3 color = spectral_colour(p.y * 50.0 + 500.0 + sin(time * 0.6));
        gl_FragColor = vec4(color, 1.0);
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