
import React from 'react'
import pathast from 'path-ast'
import commands from 'path-ast/lib/keys'
import roundAst from '../util/round-ast'
import findCenter from '../util/find-center'
import Command from './Command.jsx'
import Button from './Button.jsx'

// Commands Palette
//  - Stepper

class Commands extends React.Component {

  constructor () {
    super ()
    this.addPoint = this.addPoint.bind(this)
  }

  addPoint () {
    let { ast, width, height } = this.props
    let a = ast.commands[ast.commands.length - 2].params || { x: width / 2, y: height / 2 }
    let b = ast.commands[0].params || { x: width / 2, y: height / 2 }
    let newPoint = {
      type: 'L',
      params: findCenter(a, b)
    }
    ast.commands.splice(ast.commands.length - 1, 0, newPoint)
    this.props.selectPoint(ast.commands.length - 2)
    this.props.updateAst(ast)
  }

  render () {
    let props = this.props
    let { ast } = props
    let code = pathast.stringify(roundAst(props.ast, 2))

    let coms = ast.commands.map(function(com) {
      let params = commands[com.type].map(function (key, i) {
        return {
          name: key,
          value: com.params[key]
        }
      })
      return {
        type: com.type,
        params: params
      }
    })

    let s = {
      container: {
        position: 'relative',
        boxSizing: 'border-box',
        paddingTop: 16,
        paddingBottom: 128,
        flex: '0 0 40%'
      },
      inner: {
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        height: '100%',
      },
      ad: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        padding: 16,
      }
    }

    return (
      <div style={s.container}>
        <div style={s.inner}>
          <div>
            {coms.map(function (com, i) {
              if (!com.params.length) {
                return false
              }
              return (
                <Command
                  {...props}
                  key={i}
                  index={i}
                  command={com} />
              )
            })}
          </div>
          <div style={{
              padding: 16
            }}>
            <Button onClick={this.addPoint}
              style={{
                display: 'block',
                textAlign: 'center',
                width: '100%',
              }}>
              + Add Point
            </Button>
          </div>
        </div>
      </div>
    )
  }

}

export default Commands

