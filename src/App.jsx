import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SiteDetail } from "./pages/SiteDetail";
import { SitesList } from "./pages/SitesList";
import { SiteCreate } from "./pages/SiteCreate";
import { SiteEdit } from "./pages/SiteEdit";

export const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SitesList />} />
          <Route path="detail/:siteId" element={<SiteDetail />} />
          <Route path="edit/:siteId" element={<SiteEdit />} />
          <Route path="create" element={<SiteCreate />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
