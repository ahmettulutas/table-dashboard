import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { LoadingSpinner } from "~/components/UIComponents";
import { useAppDispatch } from "~/utils/hooks";
import NotFound from "./views/404";

const HomePage = React.lazy(() => import("./views/home-page"));

const App = () => {
  const dispatch = useAppDispatch();

  /*  useEffect(() => {

  }, []); */

  return (
    <Routes>
      <Route path="/" element={<React.Suspense fallback={<LoadingSpinner />}><HomePage /></React.Suspense>}></Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default App;
