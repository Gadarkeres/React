import React, { useRef } from 'react'
import SomeComponent from './SomeComponent';

const HookUseImperativehandle = () => {

    const inputRef = useRef();
  return (
    <div>
      <h2>HookUseImperativehandle</h2>
      <SomeComponent ref={inputRef}/>
      <button onClick={() => inputRef.current.validade()}>validade</button>
      <hr />
    </div>
  );
}

export default HookUseImperativehandle