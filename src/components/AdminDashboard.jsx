import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Trash2, AlertCircle, ExternalLink } from "lucide-react";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("contacts");
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [quizTakers, setQuizTakers] = useState([]);
  const [feedback, setFeedback] = useState([]);
  const [transactions, setTransactions] = useState([]);

  const [loading, setLoading] = useState(true);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication
    if (!localStorage.getItem("adminAuthenticated")) {
      navigate("/admin");
      return;
    }

    // Fetch data based on active tab
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      let response;
      switch (activeTab) {
        case "transactions":
          response = await axios.get(`${API_BASE_URL}/payment/transactions`);
          setTransactions(response.data);
          break;

        case "contacts":
          response = await axios.get(`${API_BASE_URL}/api/contact`);
          setContacts(response.data);
          break;
        case "appointments":
          response = await axios.get(`${API_BASE_URL}/api/appointment`);
          setAppointments(response.data);
          break;
        case "quizTakers":
          response = await axios.get(`${API_BASE_URL}/api/quizTakers`);
          setQuizTakers(response.data);
          break;
        case "feedback":
          response = await axios.get(`${API_BASE_URL}/api/feedback`);
          setFeedback(response.data);
          break;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to load data. Please try again.");
    }
    setLoading(false);
  };

  const handleDelete = async () => {
    if (!itemToDelete) return;

    try {
      const { type, id } = itemToDelete;
      let endpoint;

      // Map the type to the correct API endpoint
      switch (type) {
        case "contact":
          endpoint = "contact";
          break;
        case "appointment":
          endpoint = "appointment";
          break;
        case "quizTakers":
          endpoint = "quizTakers";
          break;
        case "feedback":
          endpoint = "feedback";
          break;
        default:
          throw new Error("Invalid type");
      }

      const response = await axios.delete(
        `${API_BASE_URL}/api/${endpoint}/${id}`
      );

      if (response.status === 200) {
        // Update local state to remove the deleted item
        switch (type) {
          case "contact":
            setContacts(contacts.filter((item) => item.id !== id));
            break;
          case "appointment":
            setAppointments(appointments.filter((item) => item.id !== id));
            break;
          case "quizTakers":
            setQuizTakers(quizTakers.filter((item) => item.id !== id));
            break;
          case "feedback":
            setFeedback(feedback.filter((item) => item.id !== id));
            break;
        }

        setShowDeleteConfirm(false);
        setItemToDelete(null);
      }
    } catch (error) {
      console.error("Error deleting item:", error);
      setError("Failed to delete item. Please try again.");
      setShowDeleteConfirm(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminAuthenticated");
    navigate("/admin");
  };

  const DeleteConfirmationModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
        <div className="flex items-center gap-3 mb-4">
          <AlertCircle className="text-red-500" size={24} />
          <h3 className="text-xl font-semibold">Confirm Deletion</h3>
        </div>
        <p className="text-gray-600 mb-6">
          Are you sure you want to delete this item? This action cannot be
          undone.
        </p>
        <div className="flex justify-end gap-4">
          <button
            onClick={() => {
              setShowDeleteConfirm(false);
              setItemToDelete(null);
            }}
            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );

  const renderContacts = () => (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Contact Info
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Subject
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Message
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {contacts.map((contact, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                #{contact.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-[#2A8CE0]">
                  {contact.name}
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-900">
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-blue-600 hover:underline flex items-center gap-1"
                  >
                    {contact.email} <ExternalLink size={14} />
                  </a>
                </div>
                <div className="text-sm text-gray-900">
                  <a
                    href={`tel:${contact.contact_no}`}
                    className="text-blue-600 hover:underline flex items-center gap-1"
                  >
                    {contact.contact_no} <ExternalLink size={14} />
                  </a>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-900">{contact.subject}</div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-900 max-w-xs overflow-hidden text-ellipsis">
                  {contact.message}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {new Date(contact.submitted_at).toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button
                  onClick={() => {
                    setItemToDelete({ type: "contact", id: contact.id });
                    setShowDeleteConfirm(true);
                  }}
                  className="text-red-600 hover:text-red-900"
                >
                  <Trash2 size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {contacts.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No contact messages found
        </div>
      )}
    </div>
  );

  const renderAppointments = () => (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Contact Info
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Appointment Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Reason
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {appointments.map((appointment, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                #{appointment.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                  {appointment.name}
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-900">
                  <a
                    href={`mailto:${appointment.email}`}
                    className="text-blue-600 hover:underline flex items-center gap-1"
                  >
                    {appointment.email} <ExternalLink size={14} />
                  </a>
                </div>
                <div className="text-sm text-gray-900">
                  <a
                    href={`tel:${appointment.contact_no}`}
                    className="text-blue-600 hover:underline flex items-center gap-1"
                  >
                    {appointment.contact_no} <ExternalLink size={14} />
                  </a>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {new Date(appointment.appointment_date).toLocaleDateString()}
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-900">
                  {appointment.appointment_type}
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-900">
                  {appointment.reason}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button
                  onClick={() => {
                    setItemToDelete({
                      type: "appointment",
                      id: appointment.id,
                    });
                    setShowDeleteConfirm(true);
                  }}
                  className="text-red-600 hover:text-red-900"
                >
                  <Trash2 size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {appointments.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No appointments found
        </div>
      )}
    </div>
  );

  const renderQuizTakers = () => (
    <div className="space-y-4">
      {quizTakers.map((quiz, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow relative group"
        >
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-4">
                    <h3 className="font-semibold text-xl text-[#2A8CE0]">
                      Quiz Result
                    </h3>
                    <span className="bg-blue-50 px-3 py-1 rounded-full text-[#2A8CE0] text-sm">
                      #{quiz.id}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mt-1">
                    Taken: {new Date(quiz.time_at).toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 mb-4">
                <div className="flex items-center space-x-4">
                  <p className="text-gray-600">
                    <span className="font-semibold">Score:</span>{" "}
                    <span className="bg-blue-50 px-3 py-1 rounded-full text-[#2A8CE0]">
                      {quiz.score}
                    </span>
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Result:</span>{" "}
                    <span
                      className={`px-3 py-1 rounded-full ${
                        quiz.result === "Pass"
                          ? "bg-green-50 text-green-600"
                          : "bg-red-50 text-red-600"
                      }`}
                    >
                      {quiz.result}
                    </span>
                  </p>
                </div>
                <p className="text-gray-600">
                  <span className="font-semibold">IP Address:</span>{" "}
                  {quiz.ip_address}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Quiz ID:</span> {quiz.quiz_id}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Email Status:</span>{" "}
                  {quiz.email ? (
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full">
                      {quiz.email}
                    </span>
                  ) : (
                    <span className="bg-yellow-50 text-yellow-600 px-3 py-1 rounded-full">
                      User has not provided email
                    </span>
                  )}
                </p>
              </div>

              {Array.isArray(quiz.answers) && quiz.answers.length > 0 && (
                <div className="mt-4">
                  <p className="font-semibold text-gray-700 mb-2">Answers:</p>
                  <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                    {quiz.answers.map((answer, idx) => (
                      <div
                        key={idx}
                        className="border-b border-gray-200 last:border-0 pb-2 last:pb-0"
                      >
                        <p className="font-medium text-gray-700">
                          {answer.question}
                        </p>
                        <p className="text-gray-600 mt-1">→ {answer.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => {
                setItemToDelete({ type: "quizTakers", id: quiz.id });
                setShowDeleteConfirm(true);
              }}
              className="p-2 text-gray-400 hover:text-red-500 transition-colors rounded-full hover:bg-red-50"
              title="Delete quiz result"
            >
              <Trash2 size={20} />
            </button>
          </div>
        </div>
      ))}
      {quizTakers.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No quiz results found
        </div>
      )}
    </div>
  );

  const renderFeedback = () => (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              IP Address
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Feedback
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date & Time
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {feedback.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                #{item.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {item.ip_address}
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-900 whitespace-pre-wrap">
                  {item.feedback}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {new Date(item.time_at).toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button
                  onClick={() => {
                    setItemToDelete({ type: "feedback", id: item.id });
                    setShowDeleteConfirm(true);
                  }}
                  className="text-red-600 hover:text-red-900"
                >
                  <Trash2 size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {feedback.length === 0 && (
        <div className="text-center py-8 text-gray-500">No feedback found</div>
      )}
    </div>
  );
  const renderTransactions = () => (
  <div className="overflow-x-auto bg-white rounded-lg shadow">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Txn ID</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email / Phone</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {transactions.map((txn, index) => (
          <tr key={index} className="hover:bg-gray-50">
            <td className="px-6 py-4 text-sm text-gray-500">{txn.txnid}</td>
            <td className="px-6 py-4 text-sm font-medium text-[#2A8CE0]">{txn.firstname} {txn.lastname}</td>
            <td className="px-6 py-4 text-sm">
              <div>{txn.email}</div>
              <div>{txn.phone}</div>
            </td>
            <td className="px-6 py-4 text-sm font-semibold">₹{txn.amount}</td>
            <td className="px-6 py-4 text-sm">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                txn.status === 'success' ? 'bg-green-50 text-green-600' :
                txn.status === 'failure' ? 'bg-red-50 text-red-600' :
                'bg-yellow-50 text-yellow-600'
              }`}>
                {txn.status}
              </span>
            </td>
            <td className="px-6 py-4 text-sm text-gray-500">
              {new Date(txn.created_at).toLocaleString()}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    {transactions.length === 0 && (
      <div className="text-center py-8 text-gray-500">No transactions found</div>
    )}
  </div>
);


  return (
    <div className="min-h-screen bg-[#F2F6FB] px-4 py-8 font-[Poppins]">
      {showDeleteConfirm && <DeleteConfirmationModal />}
      {error && (
        <div className="max-w-6xl mx-auto mb-4">
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <span className="block sm:inline">{error}</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
              <button onClick={() => setError(null)}>
                <AlertCircle className="h-6 w-6" />
              </button>
            </span>
          </div>
        </div>
      )}
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#2A8CE0]">
            QuitLine Admin Dashboard
          </h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            Logout
          </button>
        </div>

        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab("contacts")}
            className={`px-4 py-2 rounded-lg ${
              activeTab === "contacts"
                ? "bg-[#2A8CE0] text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Contacts
          </button>
          <button
            onClick={() => setActiveTab("transactions")}
            className={`px-4 py-2 rounded-lg ${
              activeTab === "transactions"
                ? "bg-[#2A8CE0] text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Transactions
          </button>

          <button
            onClick={() => setActiveTab("appointments")}
            className={`px-4 py-2 rounded-lg ${
              activeTab === "appointments"
                ? "bg-[#2A8CE0] text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Appointments
          </button>
          <button
            onClick={() => setActiveTab("quizTakers")}
            className={`px-4 py-2 rounded-lg ${
              activeTab === "quizTakers"
                ? "bg-[#2A8CE0] text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Quiz Takers
          </button>
          <button
            onClick={() => setActiveTab("feedback")}
            className={`px-4 py-2 rounded-lg ${
              activeTab === "feedback"
                ? "bg-[#2A8CE0] text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Feedback
          </button>
        </div>

        {loading ? (
          <div className="text-center py-8">Loading...</div>
        ) : (
          <div>
            {activeTab === "contacts" && renderContacts()}
            {activeTab === "appointments" && renderAppointments()}
            {activeTab === "quizTakers" && renderQuizTakers()}
            {activeTab === "transactions" && renderTransactions()}
            {activeTab === "feedback" && renderFeedback()}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
