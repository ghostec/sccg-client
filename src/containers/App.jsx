import * as React from 'react'
import * as THREE from 'three'
import * as game from 'game'

class Scene extends React.Component {
  componentDidMount = () => {
    const client = new game.Client()

    const width = this.mount?.clientWidth
    const height = this.mount?.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true })

    camera.position.z = 4
    const squadPlayer = new game.SquadPlayer()
    this.squadPlayer = squadPlayer
    scene.add(squadPlayer.getMesh())
    renderer.setClearColor('#000000')
    renderer.setSize(width, height)

    this.scene = scene
    this.camera = camera
    this.renderer = renderer

    this.mount?.appendChild(this.renderer.domElement)
    this.start()
  }

  componentWillUnmount () {
    this.stop()
    this.mount?.removeChild(this.renderer.domElement)
  }

  start = () => {
    if (!this.frameId) {
      this.frameId = window.requestAnimationFrame(this.update)
    }
  }

  stop = () => {
    window.cancelAnimationFrame(this.frameId)
  }

  update = () => {
    this.squadPlayer.update()
    this.renderScene()
    this.frameId = window.requestAnimationFrame(this.update)
  }

  renderScene = () => {
    this.renderer.render(this.scene, this.camera)
  }

  render = () => {
    return (
      <div style={{...Scene.styles}}>
        <div
          style={{ width: '720px', height: '1280px' }}
          ref={mount => this.mount = mount}
        />
      </div>
    )
  }
}

Scene.styles = ({
  flex: '0 1 100vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'red',
  height: '100vh',
  width: '100vw',
  overflow: 'hidden'
})

export default Scene
