# useEventListener
## useful hook for custom event listener

## Features
- Creating custom event listener when the component mounts
- Removes the listener when the component unmounts
- Accepts generic type

## Installation

include the useEventListener.ts file to your project


## Usage example
```sh
import { useEventListener } from 'Hooks';
import { useState } from 'react';

export const ListenerComponent = () => {
  const [alert, setAlert] = useState(false);
  useEventListener<boolean>('fire', (val) => {
    if (val.detail) setAlert(val.detail);
  });
  return (
    <div>
      <h1>Im listening</h1>
      {alert && <h2>alert!!!</h2>}
    </div>
  );
};

export const SomeOtherComponent = () => {
  const fireAlert = () => {
    window.dispatchEvent(new CustomEvent('fire', { detail: true }));
  };
  return (
    <div>
      <h1>hello world</h1>
      <button onClick={fireAlert}>click me</button>
    </div>
  );
};
```
