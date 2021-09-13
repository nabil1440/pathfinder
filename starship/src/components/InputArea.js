import React from 'react';

import Box from '@material-ui/core/Box';

import AddNew from './AddNew';
import UpdateDay from './UpdateDay';

const InputArea = () => {
  return (
    <Box padding={2}>
      <AddNew />
      <UpdateDay />
    </Box>
  );
};

export default InputArea;
