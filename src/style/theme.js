/* 
  Write specific Design System components that 
  you want to use multiple times on a pages 
*/

// Example
export const ButtonType = {
  Submit: "bg-blue-500 hover:bg-blue-700 text-white font-bold rounded",
  Delete: "bg-red-500 hover:bg-red-700 text-white font-bold rounded",
};

export const ButtonSize = {
  sm: "py-2 px-4 text-xs",
  lg: "py-3 px-6 text-lg",
};

// Usage
/*
import {ButtonType, ButtonSize} from './theme';

function Button({size, type, children}) {
  const buttonTheme = ButtonType[type] + " " + ButtonSize[size];

  return <button className={theme}>{children}</button>
}

export default Button;
*/
