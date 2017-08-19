import app from '../'

describe('Convering JS to Sass', () => {
  it('parses a js object and builds a sass string', () => {
    const data = JSON.stringify({
      colorAlpha: '#000'
    })

    expect(app(data)).toBe('$colorAlpha: #000;')
  })

  it('parses maps', () => {
    const data = JSON.stringify({
      'nb-breakpoints': {
        xs: '480px',
        sm: '720px'
      }
    })

    expect(app(data)).toBe('\n$nb-breakpoints: (\nxs: 480px,\nsm: 720px\n);\n')
  })
})
