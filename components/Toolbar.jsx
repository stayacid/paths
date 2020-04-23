
import React from 'react'
import makeSvg from '../util/make-svg'
import Button from './Button.jsx'
import LinkBtn from './LinkBtn.jsx'
import Table from './Table.jsx'
import Stepper from './Stepper.jsx'
import Spacer from './Spacer.jsx'

class Toolbar extends React.Component {

  render () {
    let props = this.props

    function toggleGrid () {
      props.toggle('grid')
    }

    function toggleSnap () {
      props.toggle('snap')
    }

    function togglePreview () {
      props.toggle('preview')
    }

    function updateZoom (val) {
      props.updateState({ zoom: val })
    }

    let svg = makeSvg(props.ast)
    let blob = new Blob([svg], { type: 'text/plain' })
    let download = (window.URL || window.webkitURL).createObjectURL( blob )

    let s = {
      container: {
        padding: 9,
      },
      text: {
        fontSize: 14,
      }
    }

    return (
      <div style={s.container}>
        <Table>
          <Table.Cell>
            <Button
              active={props.grid}
              onClick={toggleGrid}>
              Grid {props.grid && '•'}
            </Button>
          </Table.Cell>
          <Table.Cell>
            <Button
              active={props.snap}
              onClick={toggleSnap}>
              Snap {props.snap && '•'}
            </Button>
          </Table.Cell>
          <Table.Cell>
            <Button
              active={props.preview}
              onClick={togglePreview}>
              Preview {props.preview && '•'}
            </Button>
          </Table.Cell>
          <Table.Cell>
            <LinkBtn
              href={download}
              download='paths.svg'>
              Download
            </LinkBtn>
          </Table.Cell>
          <Table.Cell>
            <Spacer />
          </Table.Cell>
          <Table.Cell>
            <Stepper
              value={props.zoom}
              step={1}
              min={1}
              max={64}
              onChange={updateZoom} />
          </Table.Cell>
          <Table.Cell>
            <div style={s.text}>
              Zoom {props.zoom}x
            </div>
          </Table.Cell>
          <Table.Cell fill />
        </Table>
      </div>
    )
  }

}

export default Toolbar

