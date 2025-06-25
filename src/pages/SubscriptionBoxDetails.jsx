import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { HiArrowNarrowLeft } from "react-icons/hi";

const SubscriptionBoxDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [box, setBox] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/details.json")
      .then((res) => res.json())
      .then((data) => {
        const foundBox = data.find((item) => item.id === parseInt(id));
        setBox(foundBox);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading box details:", error);
        setLoading(false);
      });
  }, [id]);

  const handleAddSubscription = () => {
     
    const subscriptions = JSON.parse(localStorage.getItem("subscriptions")) || [];
    subscriptions.push(box);
    localStorage.setItem("subscriptions", JSON.stringify(subscriptions));
    navigate("/my-orders");
  };

  if (loading) return <div className="p-4 text-center">Loading...</div>;
  if (!box) return <div className="p-4 text-red-500 text-center">Box not found!</div>;

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex justify-center items-center">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-blue-100">
         
        <img
          src={box.image_url}
          alt="Subscription Box"
          className="w-full h-72 object-cover rounded-t-3xl"
        />

        
        <div className="p-8 space-y-6">
          <p className="text-4xl font-bold text-center text-blue-800">
            {box.title || "Subscription Box"}
          </p>

          <div className="space-y-3 text-gray-700 text-lg">
            <p>
              <span className="font-semibold text-gray-900">Description:</span> {box.long_description}
            </p>
            <p>
              <span className="font-semibold text-gray-900">Ingredients:</span> {box.ingredients.join(", ")}
            </p>
            <p>
              <span className="font-semibold text-gray-900">Cultural Significance:</span> {box.cultural_significance}
            </p>

            {box.special_tradition && (
              <p>
                <span className="font-semibold text-gray-900">Special Tradition:</span> {box.special_tradition}
              </p>
            )}
            {box.serving_suggestion && (
              <p>
                <span className="font-semibold text-gray-900">Serving Suggestion:</span> {box.serving_suggestion}
              </p>
            )}
            {box.regional_touch && (
              <p>
                <span className="font-semibold text-gray-900">Regional Touch:</span> {box.regional_touch}
              </p>
            )}

            {box.customer_favorite && (
              <p className="text-green-700 font-semibold flex items-center gap-2 mt-2"> Customer Favorite Pick!
              </p>
            )}
          </div>

          <div className="md:flex md:mx-3 md:justify-between"> 
            <div className="flex justify-center pt-4">
              <button
                onClick={handleAddSubscription}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1 hover:cursor-pointer"
              >
                Add Subscription
              </button>
            </div>

            {/* Go Back Home Button */}
            <div className="flex justify-center pt-4">
              <button
                onClick={() => navigate("/")}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1 hover:cursor-pointer"
              >
                <HiArrowNarrowLeft className="text-xl" />
                Go Back Home
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SubscriptionBoxDetails;
