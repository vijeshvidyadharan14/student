import { useState } from "react";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);

  const { label, errorMessage, onChange, id, options, ...inputProps } = props;

  const handleFocus = () => setFocused(true);

  return (
    <div className="formInput">
      <label>{label}</label>

      {inputProps.type === "select" ? (
        <select
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          focused={focused.toString()}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          onFocus={() => inputProps.type === "date" && setFocused(true)}
          focused={focused.toString()}
        />
      )}

      <span className="error-message">{errorMessage}</span>
    </div>
  );
};

export default FormInput;



  

