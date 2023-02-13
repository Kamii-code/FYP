import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./screens/global/Topbar";
import Sidebar from "./screens/global/Sideabr";
import Dashboard from "./screens/dashboard/";
import Rank from "./screens/rankTracking/index";
import Keyword from "./screens/keywordExplorer/index";
import Invoices from "./screens/invoices/";
import Contacts from "./screens/contacts/";
import Bar from "./screens/bar/";
import Form from "./screens/form/";
import Line from "./screens/line/";
import Pie from "./screens/pie/";
import FAQ from "./screens/faq/";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/rankTrackin" element={<Rank/>} />
              <Route path="/" element={<Keyword />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
