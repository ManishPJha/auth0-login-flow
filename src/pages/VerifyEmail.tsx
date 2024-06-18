import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const VerifyEmail = () => {
  const [message, setMessage] = useState("");

  const { loginWithRedirect } = useAuth0();

  const handleResendEmail = async () => {
    try {
      loginWithRedirect();
      setMessage(
        "Verification email has been sent! Please Verify your email address and try again later."
      );
    } catch (error) {
      setMessage("Error resending verification email. Please try again later.");
    }
  };

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
            onClick={() => loginWithRedirect()}
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
