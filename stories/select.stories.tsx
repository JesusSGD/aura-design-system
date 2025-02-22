import React from "react";
import Select from "../atoms/select";

export const Naked = () => (
  <Select>
    <option value="Option 1">Option 1</option>
    <option value="Option 2">Option 2</option>
    <option value="Option 3">Option 3</option>
  </Select>
);

export const WithPlaceholder = () => (
  <Select placeholder="Placeholder">
    <option value="Option 1">Option 1</option>
    <option value="Option 2">Option 2</option>
    <option value="Option 3">Option 3</option>
  </Select>
);

export const WithDialog = () => (
  <Select
    placeholder="Placeholder"
    isHelping
    helpText="⚠️ Oooops, something happened text"
  >
    <option value="Option 1">Option 1</option>
    <option value="Option 2">Option 2</option>
    <option value="Option 3">Option 3</option>
  </Select>
);
