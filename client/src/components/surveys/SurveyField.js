// SurveyField contains logic to render a singke
// label and text input
import React from "react";

export default ({ input, label, meta: { error, touched } }) => {
  // console.log(meta); // to show the logs for errors
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: "5px" }} />
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {touched && error} {/*will show the meta.error when touched is true */}
      </div>
    </div>
  );
};
