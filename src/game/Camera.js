import * as THREE from 'three'

export default class Camera {
  constructor(aspectRatio) {
    this._camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000)
    this._camera.position.z = 4
  }

  get = () => this._camera
}
