import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const StatBox = ({ title }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px" >
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Typography
            variant="h4"
            fontWeight="bold"
            marginBottom={"70px"}
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </Box>
        <Box variant="h4"
            fontWeight="bold"
            fontSize={"20px"}
            marginTop={"70px"}
            marginRight={"40px"}
            marginBottom={"20px"}
            sx={{ color: colors.grey[100] }}>
          500
        </Box>
      </Box>
    </Box>
  );
};

export default StatBox;