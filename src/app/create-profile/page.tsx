"use client";

import { useState } from "react";

export default function Page() {
  const [profile, setProfile] = useState({
    name: "",
    jobTitle: "",
    aboutMe: "",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile saved:", profile);
  };

  return (
    <div className="flex-1 bg-base-200 flex items-center justify-center p-6">
      <div className="card w-full max-w-lg bg-base-100 shadow-lg p-6">
        <h2 className="text-3xl font-bold text-primary text-center mb-4">
          Profile
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div>
            <label className="label" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="input input-bordered w-full"
              placeholder="Enter your name"
              value={profile.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Desired Job Title Input */}
          <div>
            <label className="label" htmlFor="jobTitle">
              Desired Job Title
            </label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              className="input input-bordered w-full"
              placeholder="Enter your desired job title"
              value={profile.jobTitle}
              onChange={handleChange}
              required
            />
          </div>

          {/* About Me Textarea */}
          <div>
            <label className="label" htmlFor="aboutMe">
              About Me
            </label>
            <textarea
              id="aboutMe"
              name="aboutMe"
              className="textarea textarea-bordered w-full"
              placeholder="Tell something about yourself..."
              value={profile.aboutMe}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Save Button */}
          <button type="submit" className="btn btn-primary w-full">
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
}
