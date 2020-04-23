
import commands from 'path-ast/lib/keys'
import modular from 'simple-modular-scale'

let scale = modular({
  base: 8,
  ratios: [9/8, 4/3, 4/3]
})

export default {
  title: 'Paths',
  commands: Object.keys(commands)
    .filter(function (key) {
      return key.match(/[A-Z]/)
    }),
  padding: 8,
  scale: scale,
  styles: {
    pad: scale
  },
  colors: {
    cyan: 'cyan',
    blue: '#0cf',
    dark: '#222',
    darken: 'rgba(0, 0, 0, 0.25)', 
    lighten: 'rgba(255, 255, 255, 0.25)',
  }
}
