import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { CustomRouter, NavBar } from "./components";
import { history } from "./utils";
const Main = lazy(() =>
  import("./pages/Main").then((page) => ({ default: page.Main }))
);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CustomRouter history={history}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </CustomRouter>
    </Suspense>
  );
}
export default App;
