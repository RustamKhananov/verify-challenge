import React, { memo } from 'react';
import './DropDown.css';

interface DropDownProps {
  itemNames: string[]
  onItemSelected: (value: string) => void
}

function DropDown({ itemNames, onItemSelected }: DropDownProps ) {
  const handleClick = (ev: React.MouseEvent) => {
    const target = ev.target as HTMLDivElement
    const value = target?.dataset?.name

    if (value) onItemSelected(value)
  }

  const a = 2

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
  );
}

export default memo(DropDown);
