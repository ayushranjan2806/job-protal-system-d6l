
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostJob from './PostJob';


function Routing() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            {/* <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} /> */}
            <Route path="/post-job" element={<PostJob />} />
            {/* {/* <Route path="/apply-jobs" element={<ApplyJobs />} />
            <Route path="/saved-job" element={<SaveJobs />} />
            {/* <Route path="/discussion" element={<Discussion />} /> */}
          
          </Route> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routing;
