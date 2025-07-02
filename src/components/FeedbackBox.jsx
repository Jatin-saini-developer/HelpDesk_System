import React from "react";

const FeedbackBox = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6 w-[300px] text-center">
      <h3 className="text-sm font-semibold mb-2">Give Your Feedback</h3>

      <div className="bg-gray-300 h-6 mb-2 text-xs flex items-center justify-center text-white">
        [Lorem Ipsum]
      </div>

      <div className="text-yellow-400 text-xl mb-3">★★★★★</div>

      <button className="bg-teal-400 hover:bg-teal-500 text-white px-4 py-2 rounded shadow">
        Submit Feedback
      </button>
    </div>
  );
};

export default FeedbackBox;
