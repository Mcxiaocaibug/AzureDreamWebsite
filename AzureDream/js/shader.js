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
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        
        this.init();
    }

    init() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.container.appendChild(this.renderer.domElement);

        const geometry = new THREE.PlaneGeometry(2, 2);
        const material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: {
                time: { value: 0 },
                resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
            }
        });

        const mesh = new THREE.Mesh(geometry, material);
        this.scene.add(mesh);

        window.addEventListener('resize', this.onResize.bind(this));
        this.animate();
    }

    onResize() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.material.uniforms.resolution.value.set(window.innerWidth, window.innerHeight);
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.material.uniforms.time.value += 0.01;
        this.renderer.render(this.scene, this.camera);
    }
}

// Initialize shader when the page loads
window.addEventListener('load', () => {
    new ShaderBackground();
}); 