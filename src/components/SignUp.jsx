import React, { useState } from "react";

function SignUp({ onSwitch, isSignIn, setIsSignIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      name: username,
      key: password,
      secret: password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    } else {
      fetch("https://no23.lavina.tech/signup", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          if (result.isOk) {
            setIsSignIn(!isSignIn);
          } else {
            alert(result.message);
          }
        })
        .catch((error) => console.error(error));
    }
  };
  return (
    <div className="w-[400px] mx-auto bg-white py-9 px-7 rounded-xl shadow-md">
      <h2 className="text-4xl font-bold mb-6 text-center">Sign Up</h2>
      <form onSubmit={handleSignUp} className="space-y-4">
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
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter your password"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">
            Confirm Password:
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full mb-6 p-3 border border-gray-300 rounded-md"
            placeholder="Enter your confirm password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full p-3 bg-[#6200EE] text-white rounded hover:bg-[#700ff8]"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-sm text-center">
        Already signed up?{" "}
        <span onClick={onSwitch} className="text-[#6200EE] cursor-pointer">
          Go to sign in.
        </span>
      </p>
    </div>
  );
}

export default SignUp;
