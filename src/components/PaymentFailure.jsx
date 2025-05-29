import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentFailure = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [txnid, setTxnid] = useState(null);
  const [amount, setAmount] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const txnIdFromUrl = params.get("txnid");
    const amountFromUrl = params.get("amount");
    const statusFromUrl = params.get("status");

    if (txnIdFromUrl && amountFromUrl && statusFromUrl) {
      setTxnid(txnIdFromUrl);
      setAmount(amountFromUrl);
      setStatus(statusFromUrl);
    }
  }, [location.search]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 font-[poppins]">
      <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg text-center max-w-xl w-full">
        
        <h1 className="text-3xl font-bold text-red-800 mb-2">Payment Failed</h1>
        <p className="text-gray-600 mb-6">❗ Something went wrong with your payment. If any amount was deducted, it will be refunded by your bank within 5–7 business days.</p>

        <div className="text-left bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
          <p><span className="font-medium">Transaction ID:</span> {txnid || "Not Available"}</p>
          <p><span className="font-medium">Amount:</span> ₹{amount || "0.00"}</p>
          <p><span className="font-medium">Status:</span> {status || "Failed"}</p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-[#e02a2a] text-white rounded-lg hover:bg-[#c02020] transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailure;
