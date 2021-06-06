import React from 'react';
import {useState} from 'preact/hooks';
import Input from '../form/Input';

const initialState = {
  size: 5,
  start: '05:00',
  end: '23:00',
};
export default function SettingContent({storedValue, persist}) {
  const [formData, setFormData] = useState(
    Object.keys(storedValue).length === 0 ? initialState : storedValue,
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    persist(formData);

    location.reload();
  };

  const handleChangeFormData = (inputName, inputValue) => {
    setFormData({
      ...formData,
      [inputName]: inputValue,
    });
  };

  return (
    <div className="setting-content">
      <h1>
        <span className="elon">Elon</span> Max Timer
      </h1>
      <div className="description">
        Elon Musk does it by dividing the day into many <code>time slots</code>,
        and the <code>size of time slot</code> is exact <code>5 minutes</code>.
        Then he thinks about how much time he needs to carry out each task. Once
        he figured this out, he then assigns tasks to <code>time slots</code> in
        his calendar. It is merging his <code>Todo list</code> for the day with
        his calendar.
      </div>
      <form className="setting-form" onSubmit={handleSubmit}>
        <div className="start-end-time">
          <Input
            type="number"
            name="size"
            value={formData.size}
            label="Slot (minutes)"
            placeholder="Enter the number of size"
            onChangeCallback={(inputName, inputValue) =>
              handleChangeFormData(inputName, inputValue)
            }
          />
          <Input
            type="time"
            name="start"
            value={formData.start}
            label="Start time of the day"
            placeholder="Enter the start time of a day"
            onChangeCallback={(inputName, inputValue) =>
              handleChangeFormData(inputName, inputValue)
            }
          />
          <Input
            type="time"
            name="end"
            value={formData.end}
            label="End time of the day"
            placeholder="Enter the start time of a day"
            onChangeCallback={(inputName, inputValue) =>
              handleChangeFormData(inputName, inputValue)
            }
          />
        </div>
        <input type="submit" value="save" />
      </form>
    </div>
  );
}
