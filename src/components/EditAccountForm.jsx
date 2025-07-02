import React from "react";

const EditAccountForm = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">User Profile</h1>

      <div className="max-w-4xl mx-auto bg-gray-200 rounded">
        {/* Tab Heading */}
        <div className="flex">
          <button className="bg-teal-400 text-white px-4 py-2 font-medium rounded-t">
            Edit Account
          </button>
        </div>

        {/* Form */}
        <form className="grid grid-cols-2 gap-0">
          {/* Labels */}
          <div className="flex flex-col">
            {[
              "Username",
              "Current Password",
              "New Password",
              "Confirm Password",
              "Email",
              "Real Name",
              "Access Level",
              "Project Access Level",
            ].map((label) => (
              <label
                key={label}
                className="bg-gray-500 text-white px-4 py-2 border border-white text-sm"
              >
                {label}
              </label>
            ))}
          </div>

          {/* Inputs */}
          <div className="flex flex-col">
            {Array(8)
              .fill("")
              .map((_, idx) => (
                <input
                  key={idx}
                  type={idx === 1 || idx === 2 || idx === 3 ? "password" : "text"}
                  className="px-3 py-2 border border-white text-sm"
                />
              ))}
          </div>

          {/* Submit button (full row) */}
          <div className="col-span-2 px-4 py-3 bg-gray-300">
            <button
              type="submit"
              className="bg-teal-400 text-white px-4 py-2 rounded shadow"
            >
              Update User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditAccountForm;
