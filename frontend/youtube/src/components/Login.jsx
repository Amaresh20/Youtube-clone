import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Login() {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  function handleEmailChange(e) {
    setUserDetails({ ...userDetails, email: e.target.value });
  }
  function handlePasswordChange(e) {
    setUserDetails({ ...userDetails, password: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault(); // Prevent default form submission

    const { email, password } = userDetails;

    // Validate inputs
    if (!email || !password) {
      setError("All fields are required!");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userDetails.email,
          password: userDetails.password,
        }),
      });
      console.log("response", response);
      if (!response.ok) {
        let errorText = await response.json(); // Get error message from response (if any)

        throw new Error(errorText.message || "login failed. Please try again.");
      }

      const data = await response.json();
      console.log("Signup successful", data);
      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("fullName", data.user.fullName);
      localStorage.setItem("email", data.user.email);
      alert("user logged in successfully");
      setTimeout(() => {
        navigate("/"); // Use navigate to redirect to the homepage
      }, 900);
    } catch (err) {
      setError(err.message);
    }
  }
  return (
    <div className="h-screen flex items-center justify-center bg-gray-400 w-full m-auto mt-[10px]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md ">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Log In to YouTube
        </h1>
        <form className="space-y-4" action="">
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter email"
            onChange={(e) => handleEmailChange(e)}
          />
          <input
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter password"
            onChange={(e) => handlePasswordChange(e)}
          />
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
            onClick={handleSubmit}
          >
            Log In
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-red-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
