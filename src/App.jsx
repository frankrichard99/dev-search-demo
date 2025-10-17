
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./screens/HomePage";
import JobsPage from "./screens/JobsPage";
import MainLayout from "./layouts/MainLayout";
import JobPage, { jobLoader } from "./screens/JobPage";
import AddJobPage from "./screens/AddJobPage";
import NotFoundPage from "./screens/NotFoundPage";

const App = () => {
  //Add New Job
  const addJob = async (newJob) => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    console.log("Job added",newJob.id)
    return
  };

  //Delete Job
  const deleteJob = async (id) =>{
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    console.log('delete', id)
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />

        <Route path="/jobs" element={<JobsPage />} />

        <Route path="/jobs/:id" element={<JobPage deleteJob = {deleteJob} />} loader={jobLoader} />

        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />

         <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
