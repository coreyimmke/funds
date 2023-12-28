import { CssBaseline } from "@mui/material";
import { Box } from "@mui/system";
import { SideNav } from "./components/layout/navigation/SideNav/SideNav";
import { AccountPage } from "./views/Accounts/AccountPage";

function App() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <AccountPage />
        </Box>
      </Box>
    </>
  );
}

export default App;
