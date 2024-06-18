import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import './FruitAutocomplete.css';
import DropDown from './DropDown/DropDown'
import { FRUITS } from '../../constants';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function FruitAutocomplete() {
  const [fruits, setFruits] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [inputText, setInputText] = useState<string>('')
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)

  const filteredFruits = useMemo(() => {
    return inputText ? fruits.filter(fruit => fruit.toLowerCase().startsWith(inputText.toLowerCase())) : fruits
  }, [inputText, fruits])

  const inputRef = useRef(null)
  const autocompleteRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    //Simulate an API request to fetch the array of fruits
    setTimeout(() => {
      setFruits(FRUITS);
      setIsLoading(false);
    }, 3000)
  }, [])

  const handleChangeInputText = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = ev.target;
    setInputText(value)
    setIsDropdownVisible(!!value)
  }

  const handleItemSelect = useCallback((value: string) => {
    setInputText(value);
    setIsDropdownVisible(false);
  }, [])

  useEffect(() => {
    const clickCallback = (ev: MouseEvent) => {
      if(autocompleteRef.current && !autocompleteRef.current.contains(ev.target as Node)) {
        setIsDropdownVisible(false)
      }

      if(inputRef.current === ev.target && inputText && !isDropdownVisible) {
        setIsDropdownVisible(true)
      }
    }
    document.body.addEventListener('mousedown', clickCallback)
    return () => {
      document.body.removeEventListener('mousedown', clickCallback)
    }
  }, [inputText, isDropdownVisible])

console.log('inputText', inputText)
console.log('isDropdownVisible', isDropdownVisible)
  return (
    <div className="FruitAutocomplete" ref={autocompleteRef}>
      {isLoading && <span className='FruitAutocomplete_loadingText'>Loading...</span>}
      {!isLoading && 
        <>
          <input value={inputText} onChange={handleChangeInputText} className='FruitAutocomplete_input' ref={inputRef}/>
          <KeyboardArrowDownIcon className={isDropdownVisible ? 'FruitAutocomplete_arrowUp' : 'FruitAutocomplete_arrowDown'}/>
          {isDropdownVisible && <DropDown itemNames={filteredFruits} onItemSelected={handleItemSelect} />}
        </>
      }
    </div>
  );
}

export default FruitAutocomplete;
