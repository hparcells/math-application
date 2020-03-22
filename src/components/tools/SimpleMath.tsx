import React, { useState, useEffect } from 'react';
import { Input, Select, Statistic } from 'antd';

function SimpleMath() {
  const [action, setAction] = useState<string>('add');
  const [numberOne, setNumberOne] = useState<number>(0);
  const [numberTwo, setNumberTwo] = useState<number>(0);
  const [result, setResult] = useState<number>(0);

  useEffect(() => {
    if(action === 'add') {
      setResult(numberOne + numberTwo);
    }
    if(action === 'subtract') {
      setResult(numberOne - numberTwo);
    }
    if(action === 'multiply') {
      setResult(numberOne * numberTwo);
    }
    if(action === 'divide') {
      setResult(numberOne / numberTwo);
    }
  }, [action, numberOne, numberTwo]);

  function handleActionChange(event: string) {
    setAction(event);
  }
  function handleNumberOneChange(event: React.ChangeEvent<HTMLInputElement>) {
    if(event.target.value === '') {
      setNumberOne(0);
    }else if(!isNaN(Number(event.target.value)) && isFinite(Number(event.target.value))) {
      setNumberOne(Number(event.target.value));
    }
  }
  function handleNumberTwoChange(event: React.ChangeEvent<HTMLInputElement>) {
    if(event.target.value === '') {
      setNumberOne(0);
    }else if(!isNaN(Number(event.target.value)) && isFinite(Number(event.target.value))) {
      setNumberTwo(Number(event.target.value));
    }
  }

  return (
    <div>
      <Input.Group compact>
        <Input style={{ width: 100, textAlign: 'center' }} value={numberOne} onChange={handleNumberOneChange} />
        <Select value={action} onChange={handleActionChange}>
          <Select.Option value='add'>+</Select.Option>
          <Select.Option value='subtract'>-</Select.Option>
          <Select.Option value='multiply'>*</Select.Option>
          <Select.Option value='divide'>/</Select.Option>
        </Select>
        <Input style={{ width: 100, textAlign: 'center' }} value={numberTwo} onChange={handleNumberTwoChange} />
      </Input.Group>

      <Statistic title='Result' value={result} style={{ margin: '1em' }} />
    </div>
  );
}

export default SimpleMath;
