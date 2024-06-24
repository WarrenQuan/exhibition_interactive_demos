// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 1;

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Load the 360 image as a texture
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('images/360image.jpg');

// Create a sphere geometry and apply the texture
const geometry = new THREE.SphereGeometry(500, 60, 40);
const material = new THREE.MeshBasicMaterial({
    map: texture,
    side: THREE.DoubleSide
});
const sphere = new THREE.Mesh(geometry, material);
sphere.scale.x = -1; // Invert the sphere to view from the inside
scene.add(sphere);

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Add mouse controls
let isUserInteracting = false,
    onPointerDownMouseX = 0, onPointerDownMouseY = 0,
    lon = 0, onPointerDownLon = 0,
    lat = 0, onPointerDownLat = 0;

document.addEventListener('mousedown', event => {
    isUserInteracting = true;
    onPointerDownMouseX = event.clientX;
    onPointerDownMouseY = event.clientY;
    onPointerDownLon = lon;
    onPointerDownLat = lat;
}, false);

document.addEventListener('mousemove', event => {
    if (isUserInteracting === true) {
        lon = ( onPointerDownMouseX - event.clientX ) * 0.1 + onPointerDownLon;
        lat = ( event.clientY - onPointerDownMouseY ) * 0.1 + onPointerDownLat;
    }
}, false);

document.addEventListener('mouseup', () => {
    isUserInteracting = false;
}, false);

document.addEventListener('wheel', event => {
    camera.fov += event.deltaY * 0.05;
    camera.updateProjectionMatrix();
}, false);

function animate() {
    requestAnimationFrame(animate);
    lat = Math.max(-85, Math.min(85, lat));
    const phi = THREE.MathUtils.degToRad(90 - lat);
    const theta = THREE.MathUtils.degToRad(lon);
    camera.target = new THREE.Vector3();
    camera.target.x = 500 * Math.sin(phi) * Math.cos(theta);
    camera.target.y = 500 * Math.cos(phi);
    camera.target.z = 500 * Math.sin(phi) * Math.sin(theta);
    camera.lookAt(camera.target);
    renderer.render(scene, camera);
}

animate();
