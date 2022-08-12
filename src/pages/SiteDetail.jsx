import React from 'react'
import { useParams } from 'react-router-dom';
export const SiteDetail = () => {
    const { siteId } = useParams();
    console.log(siteId);
  return (
    <div>SiteDetail</div>
  )
}
