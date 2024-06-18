import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import DropDown from './DropDown'

import { FRUITS } from '../../../constants'

test('renders all items', () => {
  const callBack = jest.fn()
  render(<DropDown  itemNames={FRUITS} onItemSelected={callBack}/>)
  FRUITS.forEach(item => {
    const element = screen.getByText(item)
    expect(element).toBeInTheDocument()
  })
})

test('calls "onItemSelected" when item is clicked', () => {
  const callBack = jest.fn()

  render(<DropDown  itemNames={FRUITS} onItemSelected={callBack}/>)
  FRUITS.forEach(item => {
    const element = screen.getByText(item)
    fireEvent.click(element)
    expect(callBack).toHaveBeenCalledWith(item)
  })
  expect(callBack).toHaveBeenCalledTimes(FRUITS.length)
})
