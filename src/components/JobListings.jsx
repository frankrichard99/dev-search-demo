import { useState, useEffect } from "react";
import Job from "./Job";
import Spinner from "./Spinner";

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {

      const limit = isHome ? 3 : null; 
      const url = `/api/jobs?_limit=${limit}`; 
      try {
        const res = await fetch(url);
        const data = await res.json();

        setJobs(data);
      } catch (err) {
        console.log("Error fetching data", err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <>
      {/* <!-- Browse Jobs --> */}
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? "Recent Jobs" : "All Jobs"}
          </h2>
           {loading ? (
              <Spinner loading={loading} />
            ) : (
              <>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
                {jobs.map((jobList) => (
                  <Job key={jobList.id} job={jobList} />
                ))}
                </div>
              </>
            )}
          
        </div>
      </section>
    </>
  );
};
export default JobListings;
