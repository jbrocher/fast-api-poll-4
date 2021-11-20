import React from "react";

import AppBar from "@mui/material/AppBar";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import PollIcon from "@mui/icons-material/Poll";

interface PageProps {
  title: string;
}

const Page: React.FunctionComponent<PageProps> = ({ title, children }) => {
  return (
    <Box paddingX={3} paddingTop={12}>
      <AppBar>
        <Toolbar>
          <Link to="/">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <PollIcon />
            </IconButton>
          </Link>
          <Typography variant="h6" component="div">
            Polls: {title}
          </Typography>
        </Toolbar>
      </AppBar>
      {children}
    </Box>
  );
};
export default Page;
