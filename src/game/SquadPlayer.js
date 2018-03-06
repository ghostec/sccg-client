import * as THREE from 'three'

export default class SquadPlayer {
  constructor() {
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0xff00ff })
    const mesh = new THREE.Mesh(geometry, material)

    this._mesh = mesh
  }

  update = player => {
    const { x, y } = player.position
    this._mesh.position.x = x / 300
    this._mesh.position.y = y / 300
  }

  getMeshes = () => [this._mesh]
}
