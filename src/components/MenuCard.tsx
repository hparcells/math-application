import React from 'react';
import { Card, Col, Button } from 'antd';
import { useHistory } from 'react-router-dom';

function MenuCard(
  {
    title,
    to,
    desc
  }:
  {
    title: string,
    to: string,
    desc: string
  }
) {
  const history = useHistory();

  function handleButtonClick() {
    history.push(`/${to}`);
  }
  return (
    <Col>
      <Card
        title={title}
        extra={<Button onClick={handleButtonClick} size='small' type='primary'>Go</Button>}
        style={{ width: 300 }}
        size='small'
        hoverable
      >
        <p>{desc}</p>
      </Card>
    </Col>
  );
}

export default MenuCard;
