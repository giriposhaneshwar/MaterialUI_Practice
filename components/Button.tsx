import { ButtonGroup } from '@material-ui/core';

import React from 'react';
import { Button } from '@material-ui/core';

const Btn = (props: any) => {
  return (
    <Button variant="contained" color="primary" onClick={props.handleClick}>
      {props.text}
    </Button>
  );
};

export default Btn;
