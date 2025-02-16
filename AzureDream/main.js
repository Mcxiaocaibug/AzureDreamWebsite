import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('bg-canvas'), antialias: true }); // 开启抗锯齿

renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 1;

const geometry = new THREE.PlaneGeometry(2, 2);

// ShaderToy 上的 Shader 代码 (https://www.shadertoy.com/view/4c2GRm)
const shaderToyCode = `
#ifdef GL_ES
precision mediump float;
#endif

uniform float time;
uniform vec2 resolution;

//  Function from Iñigo Quiles
//  https://www.shadertoy.com/view/MsS3Wc
vec3 hsb2rgb( in vec3 c ){
    vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),
                             6.0)-3.0)-1.0,
                     0.0,
                     1.0 );
    rgb = rgb*rgb*(3.0-2.0*rgb);
    return c.z * mix(vec3(1.0), rgb, c.y);
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 p = fragCoord.xy / resolution.xy-vec2(.5,.5);
	vec2 uv;
	float a = atan(p.y,p.x);
	float r = length(p)*0.75;
	vec3 color = vec3(0.0);
	float f,s;
	float tau = 3.14159265358979323846*2.0;
	float t = time*0.2;
	for(int i=0;i<25;i++)
	{
		uv = vec2(0.7/r,6.28318530718*float(i)/25.0);
		s = 0.1;
		f = 0.0;
		for(int j=0;j<5;j++)
		{
			uv *= mat2(cos(t),sin(t),-sin(t),cos(t));
			f +=  (1.0-abs(cos(uv.x+sin(uv.y)-t)+sin(uv.x-uv.y)))*s;
			s *= .5;
		}
		color += hsb2rgb(vec3(r+float(i)/25.0,1.0-smoothstep(.1,.2,f),f))*f;
	}
	fragColor = vec4(color,1.0);
}

void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
}
`;

const material = new THREE.ShaderMaterial({
    uniforms: {
        time: { value: 0.0 },
        resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
    },
    vertexShader: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: shaderToyCode
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

function animate() {
    requestAnimationFrame(animate);
    material.uniforms.time.value = performance.now() * 0.001;
    renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    material.uniforms.resolution.value.set(window.innerWidth, window.innerHeight);
});