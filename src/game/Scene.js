import * as THREE from 'three'

export default class Scene {
  constructor() {
    this._scene = new THREE.Scene()
  }

  addEntity = e => e.getMeshes().map(m => this._scene.add(m))

  get = () => this._scene
}
