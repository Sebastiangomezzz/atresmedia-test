import { useState } from "react";

export const useEditSite = (data) => {
  const [submitLoading, setSubmitLoading] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const hookHandleEditSubmit = async (data, id) => {
    setSubmitLoading(true);
    setSubmitError(null);
    setSubmitSuccess(false);
    const _data = { ...data };
    const stringData = JSON.stringify(_data);
    try {
      const res = await fetch(
        `https://interview.staging.atresplayer.com/site/${id}`,
        {
          method: "PUT",
          headers: {
            accept: "application.json",
            "Content-Type": "application/json",
          },
          body: stringData,
        }
      );
      const data = await res.json();
      if (data.success) {
        setSubmitSuccess(true);
        setSubmitLoading(false);
      } else {
        setSubmitError(data.error);
        setSubmitLoading(false);
      }
    } catch (err) {
      setSubmitSuccess(false);
      setSubmitError(true);
      setSubmitLoading(false);
    }
  };
  return { hookHandleEditSubmit, submitLoading, submitError, submitSuccess };
};
