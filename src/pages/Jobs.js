import React, { useEffect, useState } from "react";
import JobCard from "../components/JobCart";
import { getJobs } from "../services/JobService";

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const data = await getJobs();
        setJobs(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchJobs();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Available Jobs</h2>
      {jobs.map((job, idx) => (
        <JobCard key={idx} job={job} />
      ))}
    </div>
  );
}

export default Jobs;
