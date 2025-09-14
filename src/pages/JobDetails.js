import React from "react";
import { useParams } from "react-router-dom";

function JobDetails() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Job Details (ID: {id})</h2>
      <p>This is where job details will appear.</p>
    </div>
  );
}

export default JobDetails;
