import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SiteDetail } from "./pages/SiteDetail";
import { SitesList } from "./pages/SitesList";
import { SiteCreate } from "./pages/SiteCreate";
import { SiteEdit } from "./pages/SiteEdit";
import styles from "./App.module.css";
import { DefaultLayout } from "./components/layouts/DefaultLayout";

export const App = () => {
  return (
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
  );
};

export default App;
