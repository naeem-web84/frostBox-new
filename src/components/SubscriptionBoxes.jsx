import React, { useEffect, useState } from 'react';
import SubscriptionCard from './SubscriptionCard';

const SubscriptionBoxes = () => {
  const [boxes, setBoxes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/winterSubscriptionBoxes.json')
      .then((res) => res.json())
      .then((data) => {
        setBoxes(data);
        setLoading(false);
      })
      .catch((error) => { 
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading boxes...</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Available Subscription Boxes</h2>
      <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
        {boxes.map((box, index) => (
          <div key={index} className="h-full">
            <SubscriptionCard box={box} />
          </div>
        ))}

      </div>
    </div>
  );
};

export default SubscriptionBoxes;
