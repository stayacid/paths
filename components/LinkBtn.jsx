
import React from 'react'
import { colors } from '../data'

class LinkBtn extends React.Component {

  render () {
    let props = this.props
    let text = props.text || props.children
    let s = {
      fontSize: 14,
      fontWeight: 'bold',
      fontFamily: 'inherit',
      textDecoration: 'none',
      lineHeight: (32 - 2 * 9) + 'px',
      height: 32,
      margin: 0,
      padding: 9,
      boxSizing: 'border-box',
      border: '1px solid',
      borderRadius: 2,
      color: props.active ? colors.blue : 'inherit',
      backgroundColor: props.active ? colors.darken : 'transparent',
      borderColor: props.active ? 'transparent' : colors.darken,
      cursor: 'pointer'
    }

    return (
      <a
        {...props}
        style={s}>
        {text}
      </a>
    )
  }

}

export default LinkBtn

