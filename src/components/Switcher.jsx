import { useState } from 'react';
import * as React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import useDarkSide from '../hooks/useDarkSide.js';
import Switch from '@mui/material/Switch';

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    setTheme(colorTheme);
    setDarkSide(event.target.checked); // Use event.target.checked instead of 'checked'
  };

  return (
    <div>
      <div className="">
        <Switch
          checked={darkSide}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </div>
    </div>
  );
}
