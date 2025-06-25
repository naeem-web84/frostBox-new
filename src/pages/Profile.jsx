import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";

const Profile = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext); 
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  useEffect(() => {
    document.title = "Profile - FrostBox";
  }, []);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });

      toast.success("Profile updated successfully!");
      navigate("/"); 
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile.");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">My Profile</h2>

      <div className="flex flex-col items-center space-y-3 mb-6">
        <img
          src={user?.photoURL}
          alt="User"
          className="w-24 h-24 rounded-full border-2 border-blue-500"
        />
        <h3 className="text-xl font-semibold">{user?.displayName}</h3>
        <p className="text-gray-600">{user?.email}</p>
      </div>

      <form onSubmit={handleUpdateProfile} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Photo URL</label>
          <input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Profile;
