import { Drawer, Toolbar, Typography } from "@mui/material";
import { DRAWER_WIDTH } from "/src/utils/constants";

export function SideNav() {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: DRAWER_WIDTH,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar>
        <Typography variant="h4">Funds</Typography>
      </Toolbar>
    </Drawer>
  );
}
