import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const VerifyEmail = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleResendEmail = async () => {
    try {
      const response = await axios.post("/api/resend-verification-email", {
        email,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Error resending verification email.");
    }
  };

  const handleSignOut = () => {
    window.location.href =
      "https://securzy.us.auth0.com/v2/logout?returnTo=https://securzy.io";
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    setEmail(searchParams.get("email") || "");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Verify Your Email
        </h2>
        <p className="text-center">
          An Email has been sent to you. Please verify your email before
          continuing.
        </p>
        <div className="flex flex-col items-center py-4">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-red-600"
            onClick={handleSignOut}
          >
            Continue
          </button>
        </div>
        <p className="mb-4 text-center">
          Haven't received an email?{" "}
          <Link to={"#"} onClick={handleResendEmail} className="text-slate-500">
            Resend
          </Link>
          {message && (
            <p className="mt-4 text-center text-green-500">{message}</p>
          )}
        </p>
      </div>
    </div>
  );
};

export default VerifyEmail;
