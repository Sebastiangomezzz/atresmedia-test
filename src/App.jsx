import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SiteDetail } from "./pages/SiteDetail/SiteDetail";
import { SitesList } from "./pages/SitesList/SitesList";
import { SiteCreate } from "./pages/SiteCreate/SiteCreate";
import { SiteEdit } from "./pages/SiteEdit/SiteEdit";
import styles from "./App.module.css";
import { DefaultLayout } from "./components/layouts/DefaultLayout";
import { SiteContextProvider } from "./contexts/site/siteContext";

export const App = () => {
  return (
    <SiteContextProvider>
    <div style={styles}>
      <Router>
        <DefaultLayout>
          <Routes>
            <Route path="/" element={<SitesList />} />
            <Route path="detail/:siteId" element={<SiteDetail />} />
            <Route path="edit/:siteId" element={<SiteEdit />} />                                  
            <Route path="create" element={<SiteCreate />} />
          </Routes>
        </DefaultLayout>
      </Router>
      </div>
    </SiteContextProvider>
  );
};

export default App;
