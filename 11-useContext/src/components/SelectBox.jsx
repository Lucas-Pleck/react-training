import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const SelectBox = () => {
  const { theme, updateTheme } = useContext(ThemeContext);
  return (
    <select
      className="px-3 py-2 pr-10 border border-blue-500 rounded-md"
      onChange={(e) => updateTheme(e.target.value)}
      defaultValue={theme}
    >
      <option value="light">Light mode</option>
      <option value="dark">Dark mode</option>
    </select>
  );
};

export default SelectBox;
