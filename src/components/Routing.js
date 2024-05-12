
import Home from './Home';
import Jobs from './Jobs';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostJob from './PostJob';
import SaveJobs from './SaveJobs';
// import Discussion from './Discussion';
import ErrorPage from './ErrorPage';
import ApplyJobs from './ApplyJobs';

function Routing() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/post-job" element={<PostJob />} />
            <Route path="/apply-jobs" element={<ApplyJobs />} />
            <Route path="/saved-job" element={<SaveJobs />} />
            {/* <Route path="/discussion" element={<Discussion />} /> */}
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routing;
