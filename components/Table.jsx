
import React from 'react'

class Table extends React.Component {

  render () {
    let props = this.props
    let s = {
      outer: {
        marginLeft: props.pad ? -8 : 0,
        marginRight: props.pad ? -8 : 0,
        marginBottom: props.mb ? 8 : null
      },
      inner: {
        display: 'table',
        width: '100%',
      }
    }

    let children = React.Children.map(props.children, function(child, i) {
      let pad = props.pad || false
      return React.cloneElement(child, { pad: pad })
    })
    return (
      <div style={s.outer}>
        <div style={s.inner}>
          {children}
        </div>
      </div>
    )
  }

}

class Cell extends React.Component {

  render () {
    let props = this.props
    let s = {
      display: 'table-cell',
      verticalAlign: 'middle',
      whiteSpace: 'nowrap',
      width: props.fill ? '100%' : null,
      paddingLeft: props.pad ? 8 : 0,
      paddingRight: props.pad ? 8 : 0,
    }
    return (
      <div style={s}>
        {props.children}
      </div>
    )
  }

}

Table.Cell = Cell

export default Table

