import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function AuthForm({user, setUser}) {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSwitch = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent">
      {isSignIn ? (
        <SignIn onSwitch={handleSwitch} user={user} setUser={setUser} />
      ) : (
        <SignUp onSwitch={handleSwitch} isSignIn={isSignIn}  setIsSignIn={setIsSignIn} />
      )}
    </div>
  );
}

export default AuthForm;
