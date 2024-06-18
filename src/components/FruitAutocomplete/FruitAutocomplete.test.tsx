import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import FruitAutocomplete from './FruitAutocomplete'

test('renders "Loading..." at first', () => {
  render(<FruitAutocomplete />)
  const loadingElement = screen.getByText(/Loading.../i)
  expect(loadingElement).toBeInTheDocument()
})

test('does not render "Loading..." after 3 sec', async () => {
  const { container } = render(<FruitAutocomplete />)
  await waitFor(() => {
    const loadingElement = container.querySelector('.FruitAutocomplete_loadingText')
    expect(loadingElement).toEqual(null)
  }, { timeout: 4000 })
})

test('must NOT open dropdown after click if no text inserted', async () => {
  const { container } = render(<FruitAutocomplete />)
  await waitFor(() => {
    fireEvent.click(container)
    const dropdownElement = container.querySelector('.DropDown')
    expect(dropdownElement).toEqual(null)
  }, { timeout: 4000 })
})

test('must open dropdown after click if text inserted', async () => {
  const { container } = render(<FruitAutocomplete />)
  await waitFor(() => {
    fireEvent.click(container)

    const inputElement = container.querySelector('.FruitAutocomplete_input') as Element
    fireEvent.change(inputElement, { target: { value: 'ba' } })

    const dropdownElement = container.querySelector('.DropDown')

    expect(dropdownElement).toBeInTheDocument()
  }, { timeout: 4000 })
})

test('must close dropdown after click outside', async () => {
  const { container } = render(<FruitAutocomplete />)
  await waitFor(() => {
    fireEvent.click(container)
    const inputElement = container.querySelector('.FruitAutocomplete_input') as Element
    fireEvent.change(inputElement, { target: { value: 'ba' } })
    const dropdownElement = container.querySelector('.DropDown')

    expect(dropdownElement).toBeInTheDocument()

    fireEvent.click(document.body)
    waitFor(() => {
      expect(dropdownElement).not.toBeInTheDocument()
    }, { timeout: 1000 })
  }, { timeout: 4000 })
})

test('must save value to input when item is clicked', async () => {
  const { container } = render(<FruitAutocomplete />)
  await waitFor(() => {
    fireEvent.click(container)

    const inputElement = container.querySelector('.FruitAutocomplete_input') as HTMLInputElement
    fireEvent.change(inputElement, { target: { value: 'ba' } })

    const itemElement = container.querySelector('.DropDown_item') as HTMLElement
    fireEvent.click(itemElement)

    expect(inputElement.value).toEqual(itemElement.dataset.name)

  }, { timeout: 4000 })

})

