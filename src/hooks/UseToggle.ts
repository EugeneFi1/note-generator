import { useState } from "react";

export function UseToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = () => {
    setValue(!value);
  };
  return [value, toggle];
}
