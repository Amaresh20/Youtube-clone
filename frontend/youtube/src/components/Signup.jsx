import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Signup() {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [error, setError] = useState("");

  // onchange for name
  function handleNameChange(e) {
    setUserDetails({ ...userDetails, name: e.target.value });
    setError(""); // Clear error on input
  }

  // onchange for email
  function handleEmailChange(e) {
    setUserDetails({ ...userDetails, email: e.target.value });
    setError(""); // Clear error on input
  }

  // onchange for password
  function handlePasswordChange(e) {
    setUserDetails({ ...userDetails, password: e.target.value });
    setError(""); // Clear error on input
  }

  async function handleSubmit(e) {
    e.preventDefault(); // Prevent default form submission

    const { name, email, password } = userDetails;

    // Validate inputs
    if (!name || !email || !password) {
      setError("All fields are required!");
      return;
    }

    try {
      const response = await fetch(
        "https://youtube-clone-1-nt3e.onrender.com/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: userDetails.name,
            email: userDetails.email,
            password: userDetails.password,
          }),
        }
      );
      console.log("response", response);
      if (!response.ok) {
        let errorText = await response.json(); // Get error message from response (if any)

        throw new Error(
          errorText.message || "Signup failed. Please try again."
        );
      }

      const data = await response.json();
      console.log("Signup successful", data);
      alert("Signup successful!"); // Display success message or useNavigate
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gray-400 w-full m-auto mt-[10px]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md ">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Sign Up to YouTube
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter full name"
            value={userDetails.name}
            onChange={handleNameChange}
          />
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter email"
            value={userDetails.email}
            onChange={handleEmailChange}
          />
          <input
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter password"
            value={userDetails.password}
            onChange={handlePasswordChange}
          />
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-red-500 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
