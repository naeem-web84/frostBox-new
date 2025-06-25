import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const images = [
  {
    url: "https://i.postimg.cc/855SL2Dm/Chat-GPT-Image-May-6-2025-07-16-14-AM.png",
    caption: "Handcrafted Winter Comforts"
  },
  {
    url: "https://i.postimg.cc/prmPMg6L/autumn-autumn-leaves-a-hot-steaming-cup-of-coffee-and-a-warm-blanket-seasonal-morning-coffee-sunday.jpg",
    caption: "Warm Mornings, Cozy Vibes"
  },
  {
    url: "https://i.postimg.cc/fyyRT3JZ/ed3f158cbdd8a642ce2426fe28931efd.jpg",
    caption: "Winter Street Food Delights"
  },
  {
    url: "https://i.postimg.cc/k5PGFXhF/Chat-GPT-Image-May-6-2025-07-07-41-AM.png",
    caption: "Kids' Joy in Every Stitch"
  },
  {
    url: "https://i.postimg.cc/xCRXdD5G/Chat-GPT-Image-May-6-2025-06-27-34-AM-1.png",
    caption: "Sweetness of Nolen Gur"
  },
  {
    url: "https://i.postimg.cc/gcgwFpnm/Chat-GPT-Image-May-6-2025-06-53-33-AM.png",
    caption: "Winter Wellness Essentials"
  }
];

const Slider = () => {
  return (
    <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-xl">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 2300,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={img.url}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-10 left-10 text-white text-3xl md:text-5xl font-bold drop-shadow-md">
                {img.caption}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
