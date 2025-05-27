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
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold text-green-600">
        Payment Successful ✅
      </h1>
       <p className="mt-4">Transaction ID: {txnid}</p>
       
        <div className="mt-6 text-left">
          <p>
            <strong>Amount:</strong> ₹{amount}
          </p>
          <p>
            <strong>Status:</strong> {status}
          </p>
         
        </div>
    
    </div>
  );
};

export default PaymentSuccess;
