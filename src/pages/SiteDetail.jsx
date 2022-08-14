import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useFetchOneSite } from "../hooks/useFetchOneSite";
import { useDeleteSite } from "../hooks/useDeleteSite";
import { Navigate } from "react-router-dom";
export const SiteDetail = () => {
  const { siteId } = useParams();
  const { data, loading, error } = useFetchOneSite(siteId);
  const [navigateToEdit, setNavigateToEdit] = useState(false);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
    handleDelete,
  } = useDeleteSite(siteId);
  return (
    <div>
      SiteDetail
      <button>
        <Link to={`/edit/${siteId}`}>Editar Site</Link>
      </button>
      <button
        onClick={() => {
          handleDelete(siteId);
        }}
      >
        Borrar Site
      </button>
      {navigateToEdit && <Navigate to={`/edit/${siteId}`} />}
      {successDelete && <Navigate to="/" />}
    </div>
  );
};
