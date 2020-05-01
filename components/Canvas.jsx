
import React from 'react'
import Svg from './Svg.jsx'
import Toolbar from './Toolbar.jsx'

class Canvas extends React.Component {

  constructor () {
    super ()
    this.deselect = this.deselect.bind(this)
  }

  // done
  deselect (e) {
    e.stopPropagation()
    this.props.selectPoint(-1)
  }

  render () {
    let props = this.props
    let styles = {
      container: {
        position: 'relative',
        flex: '0 0 60%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      },
      cell: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      toolbar: {

      }
    }

    return (
      <div style={styles.container}
        onClick={this.deselect}>
        <div style={styles.cell}>
          <Svg {...props} />
        </div>
        <div style={styles.toolbar}>
          <Toolbar {...props} />
        </div>
      </div>
    )
  }

}

export default Canvas

