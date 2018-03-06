import React from 'react'
import { Renderer, Scene, Camera, Client, Squad, SquadPlayer } from './'

class Game extends React.Component {
  update = snapshot => {
    this._squad.update(snapshot.squad)
  }

  componentDidMount = () => {
    const width = this._mount?.clientWidth
    const height = this._mount?.clientHeight

    this._renderer = new Renderer(width, height)
    this._camera = new Camera(width / height)
    this._renderer.setCamera(this._camera)
    this._scene = new Scene()
    this._renderer.setScene(this._scene)
    this._mount?.appendChild(this._renderer.getDOMElement())

    this._client = new Client(this)

    this._squad = new Squad()
    this._scene.addEntity(this._squad)

    this._renderer.start()
  }

  componentWillUnmount = () => {
    this._renderer.stop()
    this._mount?.removeChild(this._renderer.getDOMElement())
  }

  render = () => {
    return (
      <div style={{...Game.styles}}>
        <div
          style={{ width: '720px', height: '1280px' }}
          ref={mount => this._mount = mount}
        />
      </div>
    )
  }
}

Game.styles = ({
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

export default Game
