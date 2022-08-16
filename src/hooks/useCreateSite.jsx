import { useState } from "react";

export const useCreateSite = (data) => {
  const [submitLoading, setSubmitLoading] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const hookHandleSubmit = async (data) => {
    setSubmitLoading(true);
    setSubmitError(null);
    setSubmitSuccess(false);
    const _data = { ...data };
    const stringData = JSON.stringify(_data);
    try {
      const res = await fetch(
        "https://interview.staging.atresplayer.com/site",
        {
          method: "POST",
          headers: {
            accept: "application.json",
            "Content-Type": "application/json",
          },
          body: stringData,
        }
      );
      const data = await res.json();
      if (data) {
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
  return { hookHandleSubmit, submitLoading, submitError, submitSuccess, setSubmitSuccess };
};
