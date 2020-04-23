
import React from 'react'

class Select extends React.Component {

  render () {
    let props = this.props
    let { scale } = props
    let s = {
      div: {
        marginBottom: props.mb ? 12 : null
      },
      label: {
        fontSize: 14,
        fontWeight: 'bold',
        display: 'block',
        marginBottom: 4,
      },
      select: {
        fontSize: 14,
        fontFamily: 'inherit',
        width: '100%',
        height: scale[6],
        paddingLeft: scale[1],
        paddingRight: scale[1],
        boxSizing: 'border-box',
        border: 0,
        boxShadow: 'none',
        borderRadius: 0,
        color: 'inherit',
        backgroundColor: 'transparent',
      }
    }

    if (props.hideLabel) {
      s.label.position = 'absolute'
      s.label.height = 1
      s.label.width = 1
      s.label.overflow = 'hidden'
      s.label.clip = 'rect(1px, 1px, 1px, 1px)'
    }

    return (
      <div style={s.div}>
        <label htmlFor={props.name}
          style={s.label}>
          {props.label}
        </label>
        <select
          {...props}
          style={s.select}>
          {props.options.map(function(option, i) {
            return (
              <option
                key={i}
                {...option} />
              )
          })}
        </select>
      </div>
    )
  }

}

Select.propTypes = {
  name: React.PropTypes.string,
}

export default Select

