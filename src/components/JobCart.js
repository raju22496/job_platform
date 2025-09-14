import React from "react";

function JobCard({ job }) {
  return (
    <div className="border p-4 rounded shadow mb-4">
      <h3 className="font-bold text-lg">{job.title}</h3>
      <p>{job.company}</p>
      <p className="text-sm text-gray-600">{job.location}</p>
    </div>
  );
}

export default JobCard;
