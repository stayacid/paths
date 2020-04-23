
import React from 'react'
import { assign } from 'lodash'
import { colors } from '../data'

class Button extends React.Component {

  render () {
    let props = this.props
    let text = props.text || props.children
    let s = assign({
      fontSize: 14,
      fontWeight: 'bold',
      fontFamily: 'inherit',
      lineHeight: (32 - 2 * 9) + 'px',
      height: 32,
      margin: 0,
      padding: 9,
      boxSizing: 'border-box',
      border: 0,
      color: props.active ? colors.blue : 'inherit',
      backgroundColor: props.active ? colors.darken : 'transparent',
      borderColor: props.active ? 'transparent' : colors.darken,
      cursor: 'pointer'
    }, props.style)

    return (
      <button
        {...props}
        style={s}>
        {text}
      </button>
    )
  }

}

export default Button
