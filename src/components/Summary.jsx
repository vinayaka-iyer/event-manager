import React from "react";
import { useSelector } from "react-redux";

const Summary = () => {
  const formData = useSelector((state) => state.form.formData);

  return (
    <div>
      <h2>Summary</h2>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
};

export default Summary;
