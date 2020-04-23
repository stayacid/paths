
import React from 'react'
import { scale } from '../data'

class CompactInput extends React.Component {

  render () {
    let props = this.props
    let { name, label } = props
    let s = {
      div: {
        display: 'table',
        width: '100%',
        marginBottom: props.mb ? 4 : null,
        backgroundColor: 'transparent',
        border: 'none',
        borderRadius: 2,
      },
      label: {
        fontSize: 14,
        fontWeight: 'bold',
        display: 'table-cell',
        paddingLeft: 8,
        paddingRight: 4,
        whiteSpace: 'nowrap',
        verticalAlign: 'baseline',
        opacity: .5,
      },
      input: {
        fontSize: 16,
        fontFamily: 'inherit',
        display: 'table-cell',
        verticalAlign: 'baseline',
        width: '100%',
        height: scale[6],
        paddingLeft: 0,
        paddingRight: 8,
        boxSizing: 'border-box',
        color: 'inherit',
        boxShadow: 'none',
        border: 'none',
        backgroundColor: 'transparent',
        borderRadius: 2,
        WebkitAppearance: 'none',
      }
    }
    let type = props.type || 'text'

    return (
      <div
        style={s.div}>
        <label
          htmlFor={name}
          style={s.label}>
          {label}
        </label>
        <input
          {...props}
          type={type}
          style={s.input} />
      </div>
    )
  }

}

CompactInput.propTypes = {
  label: React.PropTypes.string,
  name: React.PropTypes.string,
  type: React.PropTypes.string,
  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  mb: React.PropTypes.bool,
}

export default CompactInput

