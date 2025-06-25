import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const GiftAddress = () => {
    const [address, setAddress] = useState('');
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const navigate = useNavigate();

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const handleDoneClick = () => {
        setIsPopupVisible(true); 
        setTimeout(() => {
            navigate("/");  
        }, 2000);  
    };

    return (
        <div className="p-6 max-w-2xl mx-auto bg-white rounded-lg shadow-lg mt-3">
            <h1 className="text-3xl font-semibold text-center text-gray-700 mb-6">Enter Gift Address</h1>
            
            <form className="space-y-4">
                <div>
                    <label htmlFor="address" className="block text-gray-700 font-medium mb-2">Recipient's Address</label>
                    <input
                        id="address"
                        type="text"
                        value={address}
                        onChange={handleAddressChange}
                        className="w-full p-3 border border-gray-300 rounded-md"
                        placeholder="Enter the recipient's address"
                    />
                </div>
                <button
                    type="button"
                    onClick={handleDoneClick}
                    className="w-full bg-blue-500 text-white py-2 px-6 rounded-full"
                >
                    Done
                </button>
            </form>

            {/* Popup */}
            {isPopupVisible && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl text-center text-gray-700">Gift Address Added!</h3>
                        <p className="text-center text-gray-600 mt-2">Redirecting to Home...</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GiftAddress;
