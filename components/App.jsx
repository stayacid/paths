
import React from 'react'
import pathast from 'path-ast'
import { Grid, Cell } from 'rgx'
import Canvas from './Canvas.jsx'
import Commands from './Commands.jsx'

class App extends React.Component {

  constructor () {
    super ()
    this.state = {
      ast: pathast.parse('M8 48 H56 L32 12 z'),
      current: 1,
      width: 64,
      height: 64,
      aspectRatio: [1, 1],
      zoom: 6,
      grid: true,
      resolution: [16, 2],
      snap: true,
      preview: false,
      mode: 'select'
    }
    this.updateAst = this.updateAst.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.selectCommand = this.selectCommand.bind(this)
    this.toggle = this.toggle.bind(this)
  }

  updateAst (ast) {
    this.setState({ ast: ast })
  }

  handleChange (e) {
    let key = e.target.name
    this.setState({ key: e.target.value })
  }

  selectCommand (i) {
    this.setState({ current: i })
  }

  toggle (key) {
    let val = !this.state[key]
    this.setState({ key: val })
  }

  render () {
    let state = this.state
    let props = this.props
    let style = {
      fontFamily: 'sans-serif',
      color: 'white',
      backgroundColor: props.colors.dark
    }

    return (
      <div style={style}>
        <Grid>
          <Cell min={320}>
            <Canvas {...props} {...state} />
          </Cell>
          <Cell min={256} max={320}>
            <Commands
              {...props}
              {...state}
              updateAst={this.updateAst} />
          </Cell>
        </Grid>
      </div>
    )
  }

}

export default App
