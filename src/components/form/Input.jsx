import React from 'react';
import {useState} from 'preact/hooks';

export default function Input({
  name,
  value,
  label = 'Input Label Text',
  type = 'text',
  placeholder = 'enter your value',
  onChangeCallback,
}) {
  const [input, setInput] = useState(value);

  const handleOnChange = (event) => {
    const userInput = event.target.value;
    setInput(userInput);
    onChangeCallback(name, userInput);
  };

  return (
    <>
      <fieldset>
        <label for={name}>{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          value={input}
          onChange={handleOnChange}
        />
      </fieldset>
    </>
  );
}
