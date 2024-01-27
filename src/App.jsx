import { useState } from "react";

import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error,setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if(username=="user" && password=="password"){
      setIsLoggedIn(true);
      setError("");
      return;
    }else{
      setError("Invalid username or password");
      return;
    }
  };
  const formStyle = {
    display: "flex",
    flexDirection: "column",
  };
  return (
    <>
      <h2>Login Page</h2>
      {error && <h3>{error}</h3>}
      {isLoggedIn ? (
        <h2>Welcome, user</h2>
      ) : (
        <form style={formStyle} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="Username">Username:</label>
            <input
              id="Username"
              value={username}
              placeholder="username"
              required
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="Password">Password:</label>
            <input
              type="password"
              id="Password"
              value={password}
              placeholder="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div>
          <button type="submit">
            Submit
          </button></div>
        </form>
      )}
    </>
  );
}

export default App;
