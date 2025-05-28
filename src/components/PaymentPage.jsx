"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [originalAmount, setOriginalAmount] = useState(1000);
  const [amount, setFinalAmount] = useState(location.state?.amount || 1000);
  const [discount, setDiscount] = useState(0);
  const [coupon, setCoupon] = useState("");

  const [formData, setFormData] = useState({
    key: "",
    txnid: "",
    amount: amount.toString(),
    productinfo: location.state?.planTitle || "QuitLine Consultation",
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    zipcode: "",
    address1: "",
    address2: "",
    surl: `${window.location.origin}/payment-success`,
    furl: `${window.location.origin}/payment-failure`,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (!location.state?.amount) {
      navigate("/");
      return;
    }

    const generateTxnId = () => {
      const timestamp = Date.now();
      const random = Math.floor(Math.random() * 1000000);
      return `TXN_${timestamp}_${random}`;
    };

    const actualAmount = location.state.amount;
    setOriginalAmount(actualAmount);
    setFinalAmount(actualAmount);
    setFormData((prev) => ({
      ...prev,
      txnid: generateTxnId(),
      amount: actualAmount.toString(),
    }));
  }, [location.state, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const applyCoupon = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/payment/validate-coupon`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ coupon }),
      });
      const data = await res.json();

      if (data.valid) {
        const discountValue = data.discountAmount;
        const newAmount = originalAmount - discountValue;

        setDiscount(discountValue);
        setFinalAmount(newAmount);
        setFormData((prev) => ({
          ...prev,
          amount: newAmount.toString(),
        }));
      } else {
        alert("Invalid coupon code");
        setDiscount(0);
        setFinalAmount(originalAmount);
        setFormData((prev) => ({
          ...prev,
          amount: originalAmount.toString(),
        }));
      }
    } catch (err) {
      console.error("Error applying coupon:", err);
      alert("Something went wrong while applying the coupon.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data } = await axios.post(
        `${API_BASE_URL}/payment/initiate`,
        formData
      );

      const form = document.createElement("form");
      form.method = "POST";
      form.action = data.action;

      Object.entries(data).forEach(([key, value]) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = value;
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
    } catch (err) {
      setError("Failed to initiate payment. Please try again.");
      console.error("Payment error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F2F6FB] py-12 px-4 sm:px-6 lg:px-8 font-[Poppins]">
      <div className="max-w-[1000px] mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/3 bg-[#2A8CE0] p-8 text-white">
              <div className="sticky top-8">
                <h2 className="text-3xl font-bold mb-6">Payment Summary</h2>
                <div className="space-y-4">
                  <div className="pb-4 border-b border-white/20">
                    <p className="text-sm opacity-80">Selected Plan</p>
                    <p className="text-xl font-semibold">
                      {location.state?.planTitle || "QuitLine Consultation"}
                    </p>
                    <p className="text-sm mt-1 opacity-80">
                      {location.state?.duration}
                    </p>
                  </div>
                  <div className="pb-4 border-b border-white/20">
                    <p className="text-sm opacity-80">Amount</p>
                    <p className="text-3xl font-bold">₹{amount}</p>
                    {discount > 0 && (
                      <p className="text-sm mt-1 opacity-80 line-through">
                        ₹{originalAmount}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mt-8">
                  <p className="text-sm font-semibold mb-3">Plan Includes:</p>
                  <ul className="space-y-2 text-sm opacity-80">
                    <li className="flex items-center">
                      ✔ Cessation Specialist Consultations
                    </li>
                    <li className="flex items-center">✔ Regular Follow-ups</li>
                    <li className="flex items-center">
                      ✔ Support Group Access
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3 p-8">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Complete Payment
                </h2>
                <p className="text-gray-600 mb-8">
                  Please fill in your details to proceed
                </p>

                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstname"
                        required
                        value={formData.firstname}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastname"
                        required
                        value={formData.lastname}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        pattern="[0-9]{10}"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="10-digit mobile number"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Country
                      </label>
                      <input
                        type="text"
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Zipcode
                    </label>
                    <input
                      type="text"
                      name="zipcode"
                      required
                      pattern="[0-9]{6}"
                      value={formData.zipcode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="6-digit pincode"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Address Line 1
                    </label>
                    <input
                      type="text"
                      name="address1"
                      required
                      value={formData.address1}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Street, building, etc."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Address Line 2
                    </label>
                    <input
                      type="text"
                      name="address2"
                      value={formData.address2}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Area, landmark, etc. (optional)"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Coupon Code
                    </label>
                    <div className="flex gap-4">
                      <input
                        type="text"
                        id="coupon"
                        value={coupon}
                        onChange={(e) => setCoupon(e.target.value)}
                        placeholder="Enter code"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <button
                        type="button"
                        onClick={applyCoupon}
                        className="px-4 py-2 bg-[#2A8CE0] text-white rounded-lg hover:bg-[#2477c0] transition"
                      >
                        Apply
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-3 px-4 rounded-lg font-medium text-white 
                      ${
                        loading
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-[#2A8CE0] hover:bg-[#2477c0]"
                      } 
                      transition-colors`}
                  >
                    {loading ? "Processing..." : "Pay Now"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
