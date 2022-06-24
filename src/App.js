import {useMemo, useState} from 'react'
import Test from './components/Test'
import Test2 from './components/Test2'
import Test3 from './components/Test3'
import Test4 from './components/Test4'

const hardCalculate = (number) => {
  console.log('어려운 계산!!');
  for (let i = 0; i < 999999999 ; i++) {
  }

  return number + 10000;
}

const easyCalculate = (number) => {
  console.log('짱 쉬운 계산!!');
  return number + 1;
}

function App() {
  const [hardNumber, setHardNumber] = useState(1)
  const [easyNumber, setEasyNumber] = useState(1)

  // const hardSum = hardCalculate(hardNumber);
  const hardSum = useMemo(() => {
    return hardCalculate(hardNumber)
  }, [hardNumber])
  const easySum = easyCalculate(easyNumber);

  return (
    <div>
      <h3>어려운계산기</h3>
      <input type="number" value={hardNumber} onChange={(e) => setHardNumber(parseInt(e.target.value))} />
      <span> + 10000 = {hardSum}</span>
      <br />
      <h3>쉬운계산기</h3>
      <input type="number" value={easyNumber} onChange={(e) => setEasyNumber(parseInt(e.target.value))} />
      <span> + 1 = {easySum}</span>
      <br /><br /><br />
      <hr />
      <Test />
      <hr />
      <br />
      <br />
      <Test2 />
      <hr />
      <br />
      <Test3 />
      <hr />
      <br />
      <Test4 />
    </div>
  );
}

export default App;
