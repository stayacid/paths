
import commands from 'path-ast/lib/keys';

export default {
  title: 'Paths',
  commands: Object.keys(commands)
    .filter(function (key) {
      return key.match(/[A-Z]/)
    }),
  padding: 8,
  colors: {
    cyan: 'cyan',
    blue: '#0cf',
    dark: '#222',
    darken: 'rgba(0, 0, 0, 0.25)', 
    lighten: 'rgba(255, 255, 255, 0.25)',
  }
}
