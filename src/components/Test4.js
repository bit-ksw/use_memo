import { useState, useMemo, useCallback } from 'react'
import Child from './Child'

const Test4 = () => {

  const [parentAge, setParentAge] = useState(0)
  const [childAge, setChildAge] = useState(0)

  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  }

  const incrementChildAge = () => {
    setChildAge(childAge + 1)
  }

  console.log('부모 컴포넌트가 랜덩이 되었어요');

  const name = useMemo(() => {
    return {
      lastName: '홍',
      firstName: '길동'
    }
  }, [])

  const tellMe = useCallback(() => {
    console.log('길동아!!');
  }, [])

  return (
    <>
      <div style={{ border: '2px solid navy', padding: '10px'}}>
        <h1>부모</h1>
        <p>age: {parentAge}</p>
        <button onClick={incrementParentAge}>부모나이 증가</button>
        <button onClick={incrementChildAge}>자녀나이 증가</button>
        <Child name={name} age={childAge} tellMe={tellMe} />
      </div>
    </>
  )
}

export default Test4
