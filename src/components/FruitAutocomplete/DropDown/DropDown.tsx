import React, { memo } from 'react'
import './DropDown.css'

interface DropDownProps {
  itemNames: string[]
  onItemSelected: (value: string) => void
}

/**
 * Renders the list of items for autocompletion of input.
 * @param {Object} params - The params object.
 * @param {string[]} params.itemNames - The array of item names which will be rendered.
 * @param {function} params.onItemSelected - Callback which will be called when item of the list clicked.
 * @return {React.ReactElement} The dropdown component.
 */
function DropDown({ itemNames, onItemSelected }: DropDownProps ) {
  const handleClick = (ev: React.MouseEvent) => {
    const target = ev.target as HTMLDivElement
    const value = target?.dataset?.name

    if (value) onItemSelected(value)
  }

  return (
    <div className="DropDown">
      {!!itemNames.length && itemNames.map(itemName => (
        <div key={itemName} className='DropDown_item' data-name={itemName} onClick={handleClick}>
          {itemName}
        </div>
      ))}
      {!itemNames.length && <div className='DropDown_disabledItem'>
          No matches found.
      </div>
      }
    </div>
  )
}

export default memo(DropDown)
