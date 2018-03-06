import SquadPlayer from './SquadPlayer'

export default class Squad {
  constructor() {
    this._players = []
    for (let i = 0; i < 1; i++) {
      this._players = [...this._players, new SquadPlayer()]
    }
  }

  update = squad => {
    squad.players.map((p, i) => this._players[i].update(p))
  }

  getMeshes = () => {
    return this._players.reduce((a, p) => [...a, ...p.getMeshes()], [])
  }
}
