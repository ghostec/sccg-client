// @flow
import * as React from 'react'
import * as THREE from 'three'

export default class Scene extends React.Component<{}> {
  mount: ?HTMLDivElement
  frameId: number
  scene: THREE.Scene
  camera: THREE.Camera
  renderer: THREE.Renderer
  material: THREE.Material
  cube: THREE.Mesh

  componentDidMount = () => {
    const width = (this.mount && this.mount.clientWidth) || 800
    const height = (this.mount && this.mount.clientHeight) || 600

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0xff00ff })
    const cube = new THREE.Mesh(geometry, material)

    camera.position.z = 4
    scene.add(cube)
    renderer.setClearColor('#000000')
    renderer.setSize(width, height)

    this.scene = scene
    this.camera = camera
    this.renderer = renderer
    this.material = material
    this.cube = cube

    this.mount && this.mount.appendChild(this.renderer.domElement)
    this.start()
  }

  componentWillUnmount () {
    this.stop()
    this.mount && this.mount.removeChild(this.renderer.domElement)
  }

  start = () => {
    if (!this.frameId) {
      this.frameId = window.requestAnimationFrame(this.animate)
    }
  }

  stop = () => {
    window.cancelAnimationFrame(this.frameId)
  }

  animate () {
    this.cube.rotation.x += 0.01
    this.cube.rotation.y += 0.01

    this.renderScene()
    this.frameId = window.requestAnimationFrame(this.animate)
  }

  renderScene = () => {
    this.renderer.render(this.scene, this.camera)
  }

  render = () => {
    return (
      <div
        style={{ width: '400px', height: '400px' }}
        ref={(mount: ?HTMLDivElement) => {
          this.mount = mount
        }}
      />
    )
  }
}
