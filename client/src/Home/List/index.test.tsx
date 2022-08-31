/**
 * @jest-environment jsdom
 */
 import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

import List from './index'
import { GET_GROCERIES } from '../../gqls'
import { MockedProvider } from '@apollo/client/testing'

describe('List component', () => {
  it('should render list of groceries', async () => {
    const product = 'milk'
    const quantity = 1
    const getGroceriesMock = {
      request: {
        query: GET_GROCERIES,
      },
      result: {
        data: { items: [{ name: product, quantity: quantity, pickedUp: false }] },
      }
    }

    render(
      <MockedProvider mocks={[getGroceriesMock]} addTypename={false}>
        <List />
      </MockedProvider>
    )

    expect(await screen.findByText('Loading...')).toBeInTheDocument()
    expect(await screen.findByText(product)).toBeInTheDocument()
    expect(await screen.findByText(quantity)).toBeInTheDocument()
    expect(screen.getByRole('checkbox')).not.toBeChecked()
  })

  it('should show a message when there are no groceries', async () => {
    const getGroceriesMock = {
      request: {
        query: GET_GROCERIES,
      },
      result: {
        data: { items: [] },
      }
    }

    render(
      <MockedProvider mocks={[getGroceriesMock]} addTypename={false}>
        <List />
      </MockedProvider>
    )

    expect(await screen.findByText('Loading...')).toBeInTheDocument()
    expect(await screen.findByText('No groceries added yet')).toBeInTheDocument()
  })

  it('should show an error message when there is an error', async () => {
    const errorMessage = 'Something went wrong'
    const getGroceriesMock = {
      request: {
        query: GET_GROCERIES,
      },
      error: new Error(errorMessage)
    }

    render(
      <MockedProvider mocks={[getGroceriesMock]} addTypename={false}>
        <List />
      </MockedProvider>
    )

    expect(await screen.findByText('Loading...')).toBeInTheDocument()
    expect(await screen.findByText(errorMessage)).toBeInTheDocument()
  })
})
