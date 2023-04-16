import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { LoadingSpinner } from "~/components/UIComponents";
import { getPosts } from "~/store/api/redux/posts/reducers";
import NotFound from "./views/404";

const HomePage = React.lazy(() => import("./views/home-page"));

const App = () => {

  useEffect(() => {
    getPosts({ offset: 1, limit: 110 });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<React.Suspense fallback={<LoadingSpinner />}><HomePage /></React.Suspense>}></Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default App;
