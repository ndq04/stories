import stories from './data';
import Stories from 'react-insta-stories';
import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectCube} from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-cube';

const MyStories = () => {
  return (
    <Swiper
      modules={[EffectCube]}
      effect='cube'
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Stories
          stories={stories}
          defaultInterval={15000}
          width={'100vw'}
          height={768}
          loop
        />
      </SwiperSlide>
      <SwiperSlide>
        <Stories
          stories={stories}
          defaultInterval={15000}
          width={'100vw'}
          height={768}
          loop
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default MyStories;
