import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DropDown from './DropDown';

const items = ['Banana', 'Apple']

test('renders all items', () => {
  render(<DropDown  itemNames={items} onItemSelected={() => {}}/>);
  items.forEach(item => {
    const element = screen.getByText(item);
    expect(element).toBeInTheDocument();
  })
});

test('calls "onItemSelected" when item is clicked', () => {
  const callBack = jest.fn();

  render(<DropDown  itemNames={items} onItemSelected={callBack}/>);
  items.forEach(item => {
    const element = screen.getByText(item);
    fireEvent.click(element)
    expect(callBack).toHaveBeenCalledWith(item);
  })
  expect(callBack).toHaveBeenCalledTimes(items.length);
});
