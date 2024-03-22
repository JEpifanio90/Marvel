import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import HomeLayout from "./components/layouts/HomeLayout";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={ <HomeLayout/> }>
        <Route
          path="/"
          element={
            <Suspense fallback={ <h2>hola</h2> }>
              hi
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
