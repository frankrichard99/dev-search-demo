import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import GoBack from "../components/GoBack";
import FullJob from "../components/FullJob";

const JobPage = () => {
  const [loading, setLoading] = useState(true);

  const [job, setJob] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchJob = async () => {
      const url = `/api/jobs/${id}`;

      try {
        const res = await fetch(url);
        const data = await res.json();

       
       

        setJob(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  });

  return (
    <>
      <GoBack />

      {loading ? <Spinner loading={loading} /> : <FullJob job={job} />}
    </>
  );
};

export default JobPage;
