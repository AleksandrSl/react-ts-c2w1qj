import * as React from 'react';
import { Test } from './test';

import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Test a={10} />
    </div>
  );
}
