import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./App.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import React from "react";
const DrawerHeader = styled("dev")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

function App() {
  const [open, setOpen] = React.useState(false);
  const drawerOpen = () => {
    setOpen(true);
  };

  const drawerClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <AppBar>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={drawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            React MUI Sidebar
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open}>
        <DrawerHeader>
          <IconButton onClick={drawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <List>
          {["Home", "About Us", "Contact Us", "Support"].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text}></ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

export default App;
