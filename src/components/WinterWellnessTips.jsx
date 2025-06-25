import React from "react";

const tipsData = [
  {
    id: 1,
    title: "Moisturize Your Skin",
    description: "During winter, your skin can easily become dry due to the cold, dry air. Moisturizing your skin is essential to help retain your skin’s natural moisture and prevent cracking, which is common in colder weather. Make sure to choose a rich moisturizer containing ingredients like glycerin, hyaluronic acid, and natural oils. Applying moisturizer right after a warm shower locks in moisture and keeps your skin soft and hydrated throughout the day.",
    image: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/01/Woman-With-Eyes-Closed-Applying-Moisturizer-1296x728-header.jpg?w=1155&h=1528",
  },
  {
    id: 2,
    title: "Traditional Remedies",
    description: "Bangladesh has a rich history of using natural ingredients for health and beauty. In the winter, traditional remedies like nolen gur (date palm jaggery), mustard oil, and herbal teas are commonly used to stay warm and healthy. Nolen gur is rich in iron and nutrients, making it an excellent energy booster. Mustard oil is known for its anti-inflammatory properties, and it can help reduce joint pain. Herbal teas made with ginger, tulsi, and cardamom help improve digestion and boost immunity, making them perfect for cold mornings.",
    image: "https://media.post.rvohealth.io/wp-content/uploads/2019/02/Mustard_Oil_732x549-thumbnail.jpg",
  },
  {
    id: 3,
    title: "Stay Healthy in Chilly Mornings",
    description: "In Dhaka, the chilly mornings can make it tough to stay active. It’s essential to start your day with a warm, nutritious breakfast to boost your energy and keep your immune system strong. Foods like porridge, oatmeal, or a warm smoothie bowl with fruits and nuts are great choices. Additionally, layer up with warm clothing to keep your body insulated against the cold. Don't forget to wear thermal socks and gloves before heading out to maintain body heat, especially on early mornings when temperatures dip significantly.",
    image: "https://hips.hearstapps.com/hmg-prod/images/dole-whip-smoothie-bowl-index-66268f750d620.jpg?crop=0.502xw:1.00xh;0.0369xw,0&resize=640:",
  },
];

const WinterWellnessTips = () => {
  return (
    <section className="py-12 bg-blue-50">
      <h2 className="text-center text-3xl font-semibold mb-8 text-gray-800">Winter Wellness Tips</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tipsData.map((tip) => (
          <div
            key={tip.id}
            className="bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={tip.image}
              alt={tip.title}
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{tip.title}</h3>
            <div className="h-40 overflow-auto text-gray-600 text-base">
              <p>{tip.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WinterWellnessTips;
