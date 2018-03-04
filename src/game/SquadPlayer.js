import * as THREE from 'three'

export default class SquadPlayer {
  constructor() {
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0xff00ff })
    const mesh = new THREE.Mesh(geometry, material)

    this._mesh = mesh
  }

  update = () => {
    this._mesh.position.x += 0.01
  }

  getMesh = () => this._mesh
}
