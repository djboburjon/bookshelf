import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthForm from "./components/AuthForm";
import Home from "./pages/Home";

function App() {
  const [user, setUser] = useState()
  return (
    <>
      <BrowserRouter>
        <div className="App m-auto">
          <Routes>
            <Route path="/login" element={<AuthForm user={user} setUser={setUser}/>} />
            <Route path="/" element={<Home />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
