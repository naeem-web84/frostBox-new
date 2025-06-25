 import React, { useContext, useEffect } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const { signIn, signInWithGoogle } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(() => {
        toast.success("Login successful!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Google login successful!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  useEffect(() => {
    document.title = "Login - FrostBox";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-teal-100 flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-xl p-10 max-w-md w-full">
        <h2 className="text-3xl font-semibold text-center mb-6 text-teal-600">
          Login to Your Account
        </h2>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              name="email"
              type="email"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              name="password"
              type="password"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
            <p className="text-right text-sm mt-1">
              <Link
                to="/forgot-password"
                className="text-teal-600 hover:underline"
              >
                Forgot Password?
              </Link>
            </p>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-md bg-teal-500 text-white text-lg font-medium hover:bg-teal-600 transition duration-300 hover:cursor-pointer"
          >
            Login
          </button>
        </form>

        <div className="flex items-center justify-center my-6">
          <span className="text-gray-400">or</span>
        </div>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 bg-red-500 text-white py-3 rounded-md font-medium hover:bg-red-600 transition duration-300 hover:cursor-pointer"
        >
          <FaGoogle size={18} />
          Continue with Google
        </button>

        <p className="text-center text-sm mt-6">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-teal-600 hover:underline font-medium hover:cursor-pointer"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
