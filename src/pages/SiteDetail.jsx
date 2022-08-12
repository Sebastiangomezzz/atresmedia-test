import React from 'react'
import { useParams } from 'react-router-dom';
import { useFetchOneSite } from '../hooks/useFetchOneSite';
import { useDeleteSite } from '../hooks/useDeleteSite';
import {Navigate} from 'react-router-dom';
export const SiteDetail = () => {
    const { siteId } = useParams();
    const { data, loading, error } = useFetchOneSite(siteId);
    console.log(siteId, data, loading, error);
    const { loading: loadingDelete, error: errorDelete, success: successDelete, handleDelete } = useDeleteSite(siteId);
    console.log(loadingDelete, errorDelete, successDelete);
  return (
      <div>SiteDetail
          <button onClick={() => {
              handleDelete(siteId);
          }}>Click</button>
          {successDelete && <Navigate to="/" />}
      </div>
  )
}
