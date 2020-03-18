import React from 'react';
import { Result } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

function NoContent() {
  return (
    <Result
      icon={<SearchOutlined />}
      title={'Nothing Found'}
      subTitle='The content you are looking for does not exist or has not created yet.'
    />
  );
}

export default NoContent;
