import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const PaymentSuccess = () => {
  const location = useLocation();
  const [txnid, setTxnid] = useState(null);
  const [amount, setAmount] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const txnIdFromUrl = params.get("txnid");
    const amountFromUrl = params.get("amount");
    const statusFromUrl = params.get("status");

    if (txnIdFromUrl && amountFromUrl && statusFromUrl) {
      setAmount(amountFromUrl);
      setTxnid(txnIdFromUrl);
      setStatus(statusFromUrl);
      // Optionally fetch transaction details from backend
    }
  }, [location.search]);

  return (
    <div className="min-h-screen bg-[#F2F6FB] flex items-center justify-center px-4">
      <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg text-center max-w-xl w-full">
        <div className="text-red-600 text-5xl mb-4">Done</div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Payment {status}</h1>
        <p className="text-gray-600 mb-6">🕒 Our support team will connect with you and onboard you within the next 24 business hours. Thank you for choosing QuitLine.</p>

        <div className="text-left bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
          <p><span className="font-medium">Transaction ID:</span> {txnid}</p>
          <p><span className="font-medium">Amount:</span> ₹{amount}</p>
          <p><span className="font-medium">Status:</span> {status || "Failed"}</p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-[#2A8CE0] text-white rounded-lg hover:bg-[#2477c0] transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
