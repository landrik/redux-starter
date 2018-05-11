import React, { PropTypes } from 'react';

const SelectInput = ({ name, label, onChange, defaultOption, option, value, error }) => {
  let wrapperClass= 'form-group';
  if (error && error.length > 0){
    wrapperClass += " " + 'has-error';
  }
  return (
    <div className={wrapperClass}>
      <label htmlFor={name}> {label} </label>
      <div className="field">
        <select
          type="text"
          name={name}
          className="form-control">
          <option value="">{defaultOption}</option>
          {option.map((option) => {
            return <option key={option.value} value={option.value}>{option.text}</option>;
          })}
        </select>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

SelectInput.propTypes ={
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string,
  option: PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.string,
  error: PropTypes.string
};

export default SelectInput;
