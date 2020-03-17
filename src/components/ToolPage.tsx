import React from 'react';
import { PageHeader } from 'antd';
import { useHistory } from 'react-router-dom';

function ToolPage(
  {
    title,
    description,
    component: ToolContent
  }:
  {
    title: string,
    description: string,
    component: () => JSX.Element
  }
) {
  const history = useHistory();

  function handleBack() {
    history.push('/');
  }

  return (
    <div>
      <PageHeader
        onBack={handleBack}
        title={title}
        subTitle={description}
      />
      <ToolContent />
    </div>
  );
}

export default ToolPage;
