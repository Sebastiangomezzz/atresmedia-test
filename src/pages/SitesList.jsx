import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../components/NavBar/NavBar";
import { useFetchAllSites } from "../hooks/useFetchAllSites";
//import backgroundImage2 from "../assets/images/backgroundImage2.jpg";
export const SitesList = () => {
  const { data, loading, error } = useFetchAllSites();
  
  return (
    <div>
      {/* <NavBar>
        <div style={{width:'25rem'}}>
          <h1>SitesList</h1>
        </div>
        <Link to="/create">Create</Link>
      </NavBar> */}
      {/* <img style={{height:500}} src={ backgroundImage2} /> */}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {data.map((site) => (
            <li key={site._id}>
              <Link to={`/detail/${site._id}`}>{site.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
