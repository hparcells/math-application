import React, { useState, useEffect } from 'react';
import { Input, Statistic, Alert } from 'antd';
import { simplify } from 'mathjs';

function EquationSimplifier() {
  const [expression, setExpression] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    setError('');

    try {
      setResult(simplify(expression).toString());
    }catch(error) {
      setError(error.message);
    }
  }, [expression]);

  function handleEquationChange(event: React.ChangeEvent<HTMLInputElement>) {
    setExpression(event.target.value);
  }

  return (
    <div>
      <Alert
        message='Note'
        description='This tool currently does not support substituting numbers for variables, although it should very soon.'
        type='info'
        showIcon
        style={{ marginBottom: '1em' }}
      />

      <Input placeholder='Equation' value={expression} onChange={handleEquationChange} />

      <Statistic
        title='Result'
        value={
          error
            ? 'Error'
            : result !== 'undefined' ? result : 'Invalid State'
        }
        style={{ margin: '1em' }}
      />

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
    </div>
  );
}

export default EquationSimplifier;
