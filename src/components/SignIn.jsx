import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn({ onSwitch }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const getUserData = () => {};

  const handleSignIn = (e) => {
    e.preventDefault();
    const body = JSON.stringify(e.body);
    const myHeaders = new Headers();
    myHeaders.append("Key", "Mason");
    myHeaders.append("Sign", `b3ba64687888c6de41a7091d5e9e4254`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://no23.lavina.tech/myself", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.data.name == username && result.data.secret == password) {
          navigate('/')
        } else {
          alert("Incorrect information or sign up");
        }
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="w-[400px] mx-auto bg-white py-9 px-7 rounded-xl shadow-md">
      <h2 className="text-4xl font-bold mb-6 text-center">Sign In</h2>
      <form onSubmit={handleSignIn} className="space-y-4">
        <div>
          <label className="block mb-1 text-sm font-medium">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Username"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-6 p-3 border border-gray-300 rounded-md"
            placeholder="Repeat the password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full p-3 bg-[#6200EE] text-white rounded hover:bg-[#700ff8]"
        >
          Button
        </button>
      </form>
      <p className="mt-4 text-sm text-center">
        Already signed up?{" "}
        <span onClick={onSwitch} className="text-[#6200EE] cursor-pointer">
          Go to sign up.
        </span>
      </p>
    </div>
  );
}

export default SignIn;
