/**
 * @jest-environment jsdom
 */

import React from 'react'
import {screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import { renderApollo } from '../../test-utils'

import Add from '../Add'

describe('Add component', () => {
  it('should render all elements in the component', () => {
    renderApollo(<Add />)

    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByRole('spinbutton')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('should focus on name input when component mounts', () => {
    renderApollo(<Add />)

    expect(screen.getByRole('textbox')).toHaveFocus()
  })

  it('should have a default quantity of 1', () => {
    renderApollo(<Add />)

    expect(screen.getByRole('spinbutton')).toHaveValue(1)
  })
})
