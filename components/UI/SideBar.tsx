import {
  Drawer,
  Typography,
  Box,
  List,
  // ListItem,
  // ListItemIcon,
  // ListItemText,
  Divider,
} from '@mui/material';
import React from 'react';
// import InboxIcon from '@mui/icons-material/Inbox';
// import MailIcon from '@mui/icons-material/Mail';
import { DataResponse } from '../../interfaces';

interface Props {
  openMenu: boolean;
  setOpenMenu: (arg0: boolean) => void;
  data?: DataResponse;
}
export const SideBar = ({ openMenu, setOpenMenu }: Props) => {
  return (
    <Drawer anchor="left" open={openMenu} onClose={() => setOpenMenu(false)}>
      <Box width={250}>
        <Box
          sx={{
            padding: '5px 10px',
          }}>
          <Typography variant="h5">Menu</Typography>
        </Box>
        <Divider />

        <List>
          {/* {data.data.map((data, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                {index % 2 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={data.namePage} />
            </ListItem>
          ))} */}
        </List>
        <Divider />
      </Box>
    </Drawer>
  );
};
