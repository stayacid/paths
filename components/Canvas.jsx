
import React from 'react'
import Svg from './Svg.jsx'
import Toolbar from './Toolbar.jsx'

class Canvas extends React.Component {

  constructor () {
    super ()
    this.deselect = this.deselect.bind(this)
  }

  deselect (e) {
    e.stopPropagation()
    this.props.selectPoint(-1)
  }

  render () {
    let props = this.props
    let styles = {
      container: {
        position: 'relative',
        flex: '0 0 60%'
      },
      viewport: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 48,
        left: 0,
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
      },
      table: {
        display: 'table',
        width: '100%',
        height: '100%',
      },
      cell: {
        position: 'relative',
        display: 'table-cell',
        verticalAlign: 'middle'
      },
      toolbar: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 48,
        overflowX: 'auto',
        WebkitOverflowScrolling: 'touch',
      }
    }

    return (
      <div style={styles.container}
        onClick={this.deselect}>
        <div style={styles.viewport}>
          <div style={styles.table}>
            <div style={styles.cell}>
              <Svg {...props} />
            </div>
          </div>
        </div>
        <div style={styles.toolbar}>
          <Toolbar {...props} />
        </div>
      </div>
    )
  }

}

export default Canvas

