import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { HEADER_ROUTES, LOGIN_ROUTES } from "routes/HeaderRoutes";
import { CustomLink } from "ui/CustomLink";

export const NavPanel = () => {
  return (
    <Box sx={{ marginBottom: 10 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {HEADER_ROUTES.map((route) => (
              <Button key={route.path} variant="outlined" color="inherit">
                <CustomLink name={route.name} to={route.path} />
              </Button>
            ))}
          </Typography>
          <Box>
            {LOGIN_ROUTES.map((route) => (
              <Button key={route.path}>
                <CustomLink name={route.name} to={route.path} />
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
