import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { selectDropdown } from './dropdownModal';

const animatedComponents = makeAnimated();

const AnimatedMulti: React.FC<selectDropdown> = ({
  id,
  labelText,
  onBlur,
  defaultValue,
  placeholder,
  options,
  error,
  disabled,
  onChange,
  name,
  isMulti,
  closeMenuOnSelect,
  isRequired,
  inputRef,
  value,
  hideSelectedOptions,
}) => {
  return (
    <div className='form-group'>
      <label className='form-label'>
        {labelText}
        {isRequired && <span className='required'>*</span>}
      </label>
      <div className='input-group'>
        <Select
          ref={inputRef}
          name={name}
          defaultValue={defaultValue}
          isDisabled={disabled}
          closeMenuOnSelect={closeMenuOnSelect || false}
          components={animatedComponents}
          isMulti={isMulti}
          options={options}
          onChange={onChange}
          className='react-select-dropdown'
          classNamePrefix='options'
          onBlur={onBlur}
          id={id}
          isSearchable
          isClearable
          placeholder={placeholder}
          value={value}
          hideSelectedOptions={hideSelectedOptions}
        />
      </div>
      {error && <div className='error-text'>{error}</div>}
    </div>
  );
};

export default AnimatedMulti;
