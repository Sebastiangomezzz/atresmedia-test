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
          Headers: {
            Accept: "application.json",
            "Content-Type": "application/json",
          },
          body: stringData,
        }
      );
      const data = await res.json();
      if (data.success) {
        console.log(data.success, "data");
        setSubmitSuccess(true);
        setSubmitLoading(false);
      } else {
        console.log(data.error, "data");
        setSubmitError(data.error);
        setSubmitLoading(false);
      }
    } catch (err) {
      setSubmitSuccess(false);
      setSubmitError(true);
      setSubmitLoading(false);
    }
  };
  return { hookHandleSubmit, submitLoading, submitError, submitSuccess };
};
