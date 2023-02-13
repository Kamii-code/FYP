import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Tooltip from "@mui/material/Tooltip";
import Avatar from '@mui/material/Avatar';
const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      p={2}
      sx={{
        borderBottom: 2,
        borderColor: "#bdbdbd",
      }}
    >
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        sx={{ border: 2, borderRadius: "16px", borderColor: "#e0e0e0" }}
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <Tooltip title="Light Mode">
              <DarkModeOutlinedIcon />
            </Tooltip>
          ) : (
            <Tooltip title="Dark Mode">
              <LightModeOutlinedIcon />
            </Tooltip>
          )}
        </IconButton>
        <Tooltip title="Settings">
          <IconButton>
            <SettingsOutlinedIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Account Settings">
        <IconButton
            size="small"
            sx={{ ml: 2 }}
            aria-haspopup="true"
          >
            <Avatar sx={{ width: 30, height: 30 }}>J</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default Topbar;
