import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import SearchIcon from "@mui/icons-material/Search";
import { Database } from "../../data/Database";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

const Keyword = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "keyword",
      headerName: "Keyword",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {/* See Trend Button */},
    {
      field: "Trend",
      renderCell: (cellValues) => {
        return (
          <Button
            variant="outlined"
            endIcon={<TrendingDownIcon />}
            sx={{
              textTransform: "capitalize",
              backgroundColor: colors.blueAccent[700],
            }}
          >
            See Trend
          </Button>
        );
      },
    },
    {
      field: "volume",
      headerName: "Volume",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "pd",
      headerName: "PD",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "sd",
      headerName: "SD",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
  ];

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Keyword Explorer" />
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Keyword List
          </Button>
        </Box>
      </Box>
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        mb={"50px"}
        height="50px"
        width="1000px"
        sx={{ border: 2, borderRadius: "16px", borderColor: "#e0e0e0" }}
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search Keyword" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* GRID & CHARTS */}
      <Box mb="30px">
        <Typography
          variant="h3"
          color={colors.grey[100]}
          fontWeight="bold"
          sx={{ mb: "-20px" }}
        >
          Keyword Overview
        </Typography>
      </Box>
      <hr></hr>
      <Box
        marginBottom="20px"
        marginTop="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          sx={{ border: 2, borderRadius: "16px", borderColor: "#e0e0e0" }}
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox title="Search Volume" />
        </Box>
        <Box
          sx={{ border: 2, borderRadius: "16px", borderColor: "#e0e0e0" }}
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox title="Keyword Diffculty" />
        </Box>
        <Box
          sx={{ border: 2, borderRadius: "16px", borderColor: "#e0e0e0" }}
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox title="Paid Diffculty" />
        </Box>
        <Box
          sx={{ border: 2, borderRadius: "16px", borderColor: "#e0e0e0" }}
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox title="Cost Per Click (CPC)" />
        </Box>
      </Box>
      <Box mb="30px">
        <Typography
          variant="h3"
          color={colors.grey[100]}
          fontWeight="bold"
          sx={{ mb: "-20px" }}
        >
          Keyword Ideas
        </Typography>
      </Box>
      <hr></hr>
      {/* ROW 2 */}
      <Box m="20px">
        <Box
          m="40px 0 0 0"
          height="75vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
              marginBottom: "20px",
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
          }}
        >
          <DataGrid
            checkboxSelection
            rows={Database}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Keyword;
