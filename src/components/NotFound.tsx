import React from 'react';
import { Result, Button } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

function NotFound() {
  const history = useHistory();

  function handleBackClick() {
    history.push('/');
  }

  return (
    <Result
      icon={<h1 style={{ fontSize: '54px' }}>:(</h1>}
      title='404'
      subTitle='The page you are looking for does not exist.'
      extra={
        <Button type='primary' onClick={handleBackClick} icon={<HomeOutlined />}>
          Back to Safety
        </Button>
      }
    />
  );
}

export default NotFound;
