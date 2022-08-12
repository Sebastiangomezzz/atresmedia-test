import React from 'react'
import { useParams } from 'react-router-dom';
import { useFetchOneSite } from '../hooks/useFetchOneSite';
export const SiteDetail = () => {
    const { siteId } = useParams();
    const { data, loading, error } = useFetchOneSite(siteId);
    console.log(siteId, data, loading, error);
  return (
    <div>SiteDetail</div>
  )
}
