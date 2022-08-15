import React from "react";
import { Link } from "react-router-dom";
import { useFetchAllSites } from "../hooks/useFetchAllSites";

export const SitesList = () => {
  const { data, loading, error } = useFetchAllSites();
  return (
    <div>
      <h1>

      SitesList
      </h1>
      <Link to="/create">Create</Link>
      {loading ? (
        <div>Loading...</div>
      ) : (
          <ul>
            {data.map(site => (
              <li key={site._id}>
                <Link to={`/detail/${site._id}`}>{site.name}</Link>  
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};
