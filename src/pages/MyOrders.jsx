import React from 'react';
import { useNavigate } from 'react-router';

const MyOrders = () => {
  const navigate = useNavigate();
  const subscriptions = JSON.parse(localStorage.getItem("subscriptions")) || [];

  const handleCancelSubscription = (boxToCancel) => {
    const updatedSubscriptions = subscriptions.filter(
      (sub) => sub.id !== boxToCancel.id
    );
    localStorage.setItem("subscriptions", JSON.stringify(updatedSubscriptions));
    navigate("/");
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-center text-gray-700 mb-6">My Orders</h1>
      <p className="text-lg text-center text-gray-500 mb-6">Here are all your previous subscription box orders.</p>
      
      <div className="space-y-4">
        {subscriptions.length === 0 ? (
          <p className="text-center text-lg text-gray-500">No subscriptions yet!</p>
        ) : (
          subscriptions.map((subscription) => (
            <div key={subscription.id} className="p-4 border rounded-md shadow-sm hover:shadow-md">
              <h3 className="font-bold text-xl text-gray-700">{subscription.title}</h3>
              <p className="text-gray-600">Status: Active</p>
              <div className="mt-4">
                <button
                  onClick={() => handleCancelSubscription(subscription)}
                  className="bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600 transition duration-300"
                >
                  Cancel Subscription
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyOrders;
