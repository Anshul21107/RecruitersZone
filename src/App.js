import React from "react";
import { Header, HomePage, Login,SignUp ,Employe,CreateJob,Company,Footer} from "./components";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <HomePage />
              <Employe/>
              <CreateJob/>
              <Company/>
              <Footer/>
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Header />
              <Login />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <Header />
              <SignUp />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
