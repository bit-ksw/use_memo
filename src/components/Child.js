import React, { memo } from 'react';

const Child = ({ name, tellMe }) => {
  console.log('자녀도 랜더링이 되었네요');
  return (
    <div style={{ border: '2px solid red', padding: '10px'}}>
      <h3>자녀</h3>
      <p>name: {name.lastName}</p>
      <p>age: {name.firstName}</p>
      <button onClick={tellMe}>클릭!!</button>
    </div>
  )
}

export default memo(Child);
