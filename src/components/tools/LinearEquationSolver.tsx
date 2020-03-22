import React, { useState, useEffect } from 'react';
import { Equation, Fraction, parse } from 'algebra.js';
import { Input, Statistic, Divider, Alert, Button } from 'antd';
import { removeAt } from '@reverse/array';
import { PlusOutlined } from '@ant-design/icons';

import InputSolveFor from '../InputSolveFor';

function EquationSolver() {
  const [leftSide, setLeftSide] = useState<string>('x');
  const [rightSide, setRightSide] = useState<string>('2 * 2');
  const [solveFor, setSolveFor] = useState<string[]>(['x']);
  const [results, setResults] = useState<(Fraction | Fraction[] | number[])[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    setError('');
    try {
      const equation = new Equation(parse(leftSide) as any, parse(rightSide) as any);

      const newResults: (Fraction | Fraction[] | number[])[] = [];
      solveFor.forEach((toSolve) => {
        newResults.push(equation.solveFor(toSolve));
      });
      setResults(newResults);
    }catch(error) {
      setError(error.message);
    }
  }, [leftSide, rightSide, solveFor]);

  function handleLeftSideChange(event: React.ChangeEvent<HTMLInputElement>) {
    setLeftSide(event.target.value);
  }
  function handleRightSideChange(event: React.ChangeEvent<HTMLInputElement>) {
    setRightSide(event.target.value);
  }
  function handleSolveForChange(value: string, index: number) {
    const newArray = solveFor.concat();

    if(/^[a-zA-Z]+$/m.test(value)) {
      newArray[newArray.map((x: any, i: any) => {
        return [i, x];
      }).filter((x: any) => {
        return x[1] === newArray[index];
      })[0][0]] = value.substr(value.length - 1);

      setSolveFor(newArray);
    }
  }
  function handleSolveForDelete(index: number) {
    if(solveFor.length > 1) {
      setSolveFor(removeAt(solveFor, index));
    }
  }
  function handleAddNewToSolve() {
    setSolveFor(solveFor.concat(''));
  }

  return (
    <div>
      <Input style={{ width: 100, textAlign: 'center' }} value={leftSide} onChange={handleLeftSideChange} />
      <span style={{ margin: '0em 1em' }}>=</span>
      <Input style={{ width: 100, textAlign: 'center' }} value={rightSide} onChange={handleRightSideChange} />

      <Divider />

      <h3>Solve For</h3>
      {
        solveFor.map((toSolve, index) => {
          return <InputSolveFor
            value={toSolve}
            index={index}
            deletable={solveFor.length > 1}
            onChange={handleSolveForChange}
            onDelete={handleSolveForDelete}
            key={index}
          />;
        })
      }
      <Button type='primary' onClick={handleAddNewToSolve} icon={<PlusOutlined />}>Add New</Button>

      <Divider />

      {
        error
          ? <Alert
            message='Error'
            description={error}
            type='error'
            showIcon
          />
          : null
      }

      {
        results.map((result, index) => {
          return (
            <Statistic
              title={solveFor[index]}
              value={
                error
                  ? 'Error'
                  : result ? result.toString() : 'Invalid State'
              }
              style={{ margin: '1em' }}
              key={index}
            />
          );
        })
      }
    </div>
  );
}

export default EquationSolver;
