import * as React from 'react';
import { useDebounce } from 'use-debounce';

export const Test = ({ a }) => {
  const [text, setText] = React.useState('');
  const [dText] = useDebounce(text, 200);
  let b = 1
  for (let i= 0; i< 10000000; i++) {
    b = b * i
  }

  console.log('updated');

  return (
    <div>
      <input
        type="search"
        autoComplete="off"
        autoCapitalize="off"
        autoCorrect="off"
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <br />
      <p>{dText}</p>
      <p>{text}</p>
      <p>{a}</p>
    </div>
  );
};
