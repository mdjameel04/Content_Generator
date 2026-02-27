import React from "react";

const BillingPage = () => {
  return (
    <div className="p-10">

      <h2 className="text-3xl font-bold mb-6">
        Billing
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {/* Free Plan */}
        <div className="border rounded-xl p-6 bg-white shadow">

          <h3 className="text-xl font-semibold mb-2">
            Free Plan
          </h3>

          <p className="text-gray-500 mb-4">
            Basic usage for testing the platform
          </p>

          <h4 className="text-3xl font-bold mb-4">
            $0 / month
          </h4>

          <ul className="space-y-2 text-gray-600 mb-6">
            <li>✔ 10 AI generations per day</li>
            <li>✔ Basic templates</li>
            <li>✔ History access</li>
          </ul>

          <button className="w-full border py-2 rounded-lg font-medium">
            Current Plan
          </button>

        </div>


        {/* Pro Plan */}
        <div className="border rounded-xl p-6 bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg">

          <h3 className="text-xl font-semibold mb-2">
            Pro Plan
          </h3>

          <p className="opacity-90 mb-4">
            Unlock unlimited AI generation
          </p>

          <h4 className="text-3xl font-bold mb-4">
            $6.99 / month
          </h4>

          <ul className="space-y-2 mb-6">
            <li>✔ Unlimited AI generation</li>
            <li>✔ All templates</li>
            <li>✔ Priority support</li>
            <li>✔ Full history access</li>
          </ul>

          <button className="w-full bg-white text-indigo-600 py-2 rounded-lg font-semibold hover:bg-gray-100">
            Upgrade Now
          </button>

        </div>

      </div>

    </div>
  );
};

export default BillingPage;