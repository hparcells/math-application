import React from 'react';
import { Input, Button } from 'antd';
import { DeleteFilled } from '@ant-design/icons';

function InputSolveFor({
  value,
  index,
  deletable,
  onChange,
  onDelete
}: {
  value: string;
  index: number;
  deletable: boolean;
  onChange: (value: string, index: number) => void;
  onDelete: (index: number) => void;
}) {
  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    onChange(event.target.value, index);
  }
  function handleDelete() {
    onDelete(index);
  }

  return (
    <div style={{ margin: '1em 0px' }}>
      <Input
        value={value}
        onChange={handleOnChange}
        style={{
          width: 100,
          textAlign: 'center'
        }}
      />
      <Button type='link' onClick={handleDelete} disabled={!deletable} icon={<DeleteFilled />} />
    </div>
  );
}

export default InputSolveFor;
