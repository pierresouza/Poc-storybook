import React from 'react';

import { Alert, Typography } from '~/components';

export default {
  title: 'Components|Alert',
  component: Alert
};

export const AlertStory = () => (
  <>
    <Alert
      type="success"
      message="Success"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      afterClose={() => null}
    />
    <Alert
      type="warning"
      message="Warning"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      afterClose={() => null}
    />
    <Alert 
      type="error" 
      message="Error" 
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit" 
      afterClose={() => null} 
    />
    <Alert 
      type="info" 
      message="Info" 
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit" 
      afterClose={() => null} 
      />
  </>
);

AlertStory.story = {
  name: 'default alert',
  decorators: [
    (storyFn) => (
      <div>
        <Typography.Paragraph weight="regular">
          Esse alerta deve ser usado de forma unitária caso necessite apenas UM
          alerta em um determinado local da tela, como alguma informação ou
          alerta de algum requerimento.
        </Typography.Paragraph>
        <br />
        {storyFn()}
      </div>
    ),
  ],
};
