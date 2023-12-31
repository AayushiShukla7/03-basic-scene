// console.log('Hello Three.js')
// console.log(THREE)

// Scene
const scene = new THREE.Scene()

// Red Cube
const geometry = new THREE.BoxGeometry( 1, 1, 1 )
const material = new THREE.MeshBasicMaterial( {color: 0xff0000} )
const mesh = new THREE.Mesh(geometry, material)

// Add mesh to scene
scene.add(mesh)

// Sizes 
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Like taking a picture of scene with a camera
renderer.render(scene, camera)