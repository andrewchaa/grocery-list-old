/**
 * @jest-environment jsdom
 */

import React from 'react'
import {screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import { renderApollo } from '../../test-utils'

import Add from '../Add'

describe('Add component', () => {
  it('should render without crashing', () => {
    renderApollo(<Add />)

    console.log(screen.getByPlaceholderText('Grocery'))
  })

})
