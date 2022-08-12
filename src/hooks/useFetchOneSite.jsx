import React, { useState, useEffect } from "react";

export const useFetchOneSite = (id) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSite = async () => {
            setLoading(true);
            setError(null);
            try {
                const result = await fetch(`https://interview.staging.atresplayer.com/site/${id}`);
                const data = await result.json();
                setData(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        }
        fetchSite();
    }, [id]);
  return { data, loading, error };
};
