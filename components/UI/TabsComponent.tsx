import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Grid } from '@mui/material';

export const TabsComponent = () => {
  const [value, setValue] = React.useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Grid>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        variant="fullWidth">
        <Tab value="one" label="Videos" />
        <Tab value="two" label="Photos" />
      </Tabs>
    </Grid>
  );
};
