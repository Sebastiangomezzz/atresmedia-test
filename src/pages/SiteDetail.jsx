import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useFetchOneSite } from "../hooks/useFetchOneSite";
import { useDeleteSite } from "../hooks/useDeleteSite";
import { Navigate } from "react-router-dom";
import { Button } from '../components/buttons/Button';
import { ButtonWithLink } from "../components/buttons/ButtonWithLink/ButtonWithLink";
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
      <ButtonWithLink
        text="Editar"
        linkTo={`/edit/${siteId}`}
        onClick={() => {}}
      />
      <Button
        text="Eliminar Site"
        onClick={() => {
          handleDelete(siteId);
        }}
      />
      {successDelete && <Navigate to="/" />}
    </div>
  );
};
