import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface Props {
  title: string;
  setOpenMenu: (arg0: boolean) => void;
}

export const Navbar = ({ title, setOpenMenu }: Props) => {
  return (
    <AppBar position="sticky">
      <Toolbar
        sx={{
          flex: 1,
          justifyContent: 'space-between',
          padding: 0,
        }}>
        <IconButton size="large" edge="start" onClick={() => setOpenMenu(true)}>
          <MenuIcon color="info" />
        </IconButton>
        <Typography>{title}</Typography>
        <IconButton size="large" edge="start">
          <MoreVertIcon color="info" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
