import app from '../'
import { JSONParse } from '../window'

jest.mock('../window')

beforeEach(() => {
  JSONParse.mockImplementation(data => data)
})

describe('Convering JS to Sass', () => {
  it('parses a js object and builds a sass string', () => {
    const data = {
      colorAlpha: '#000'
    }

    expect(app(data)).toBe('$colorAlpha: #000;')
  })

  it('parses a deep js object and builds a flat sass string', () => {
    const data = {
      colours: {
        main: {
          alpha: '#004400',
          beta: '#777777'
        },
        secondary: {
          test: '#eeeeee'
        }
      }
    }

    expect(app(data)).toBe('$alpha: #004400;\n$beta: #777777;\n$test: #eeeeee;')
  })
})
