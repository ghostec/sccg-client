import * as THREE from 'three'
import Scene from './Scene'

export default class Renderer {
  constructor(width, height) {
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setClearColor('#000000')
    renderer.setSize(width, height)

    this._frameID = null
    this._scene = null
    this._camera = null
    this._renderer = renderer
  }

  getDOMElement = () => this._renderer.domElement
  setCamera = c => this._camera = c.get()
  setScene = s => this._scene = s.get()

  start = () => {
    if (!this._frameID) {
      this._frameID = window.requestAnimationFrame(this.update)
    }
  }

  stop = () => {
    window.cancelAnimationFrame(this.frameID)
  }

  update = () => {
    this.render()
    this.frameID = window.requestAnimationFrame(this.update)
  }

  render = () => {
    this._renderer.render(this._scene, this._camera)
  }
}
