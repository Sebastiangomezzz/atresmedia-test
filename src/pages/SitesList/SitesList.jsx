import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { useSiteActions } from "../../contexts/site/siteActions";
import { useSiteState } from "../../contexts/site/siteContext";
import ClipLoader from "react-spinners/ClipLoader";
import styles from "./SitesList.module.css";

export const SitesList = () => {
  const { getSites } = useSiteActions();
  const { sites, sitesLoading } = useSiteState();
  useEffect(() => {
    getSites();
  } , []);
  return (
    <div>
      {sitesLoading ? (
        <ClipLoader size={100} color={"#123abc"} loading={sitesLoading} />
      ) : (
        <div className={styles.sitesLinkContainer}>
          <ul>
            {sites.map((site) => (
              <li key={site._id}>
                <Link to={`/detail/${site._id}`}>{site.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
