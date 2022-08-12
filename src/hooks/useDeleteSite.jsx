import { useState, useEffect } from "react";

export const useDeleteSite = (id) => {
  const [siteId, setSiteId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    setSiteId(id);
  }, [id]);
  const handleDelete = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const response = await fetch(
        `https://interview.staging.atresplayer.com/site/${siteId}`,
        {
          method: "DELETE",
        }
      );
      const json = await response.json();
      setLoading(false);
      setSuccess(true);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  return {
    loading,
    error,
    success,
    handleDelete,
  };
};
