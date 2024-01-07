import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";

export default () => {
  const style = {
    backgroundColor: "skyblue",
    padding: "100px 50px ",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px",
  };
  const style2 = {
    backgroundColor: "#2D3250",
    padding: "100px 50px ",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px",
    color: "white",
  };
  return (
    <>
      <div className="center">
        <Swiper spaceBetween={10} slidesPerView={3}>
          <SwiperSlide style={style}>Slide 1</SwiperSlide>
          <SwiperSlide style={style}>Slide 2</SwiperSlide>
          <SwiperSlide style={style}>Slide 3</SwiperSlide>
          <SwiperSlide style={style}>Slide 4</SwiperSlide>
          <SwiperSlide style={style}>Slide 5</SwiperSlide>
          <SwiperSlide style={style}>Slide 6</SwiperSlide>
        </Swiper>
      </div>
      <hr />
      <div className="center">
        <h1 style={{ textAlign: "center", fontFamily: "sans-serif" }}>
          you can change slidesPerView numbers
        </h1>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          loop={true}
          spaceBetween={10}
          slidesPerView={"auto"}
          navigation
          pagination={{ clickable: true }}
        >
          <br />
          <br />
          <SwiperSlide style={style2}>Slide 1</SwiperSlide>
          <SwiperSlide style={style2}>Slide 2</SwiperSlide>
          <SwiperSlide style={style2}>Slide 3</SwiperSlide>
          <SwiperSlide style={style2}>Slide 4</SwiperSlide>
          <SwiperSlide style={style2}>Slide 5</SwiperSlide>
          <SwiperSlide style={style2}>Slide 6</SwiperSlide>
          <SwiperSlide style={style2}>Slide 7</SwiperSlide>
        </Swiper>
      </div>
      <hr />
      <div className="center">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          navigation={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: "0",
            stretch: "0",
            depth: "100",
            modifier: "3",
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiperasli"
          pagination={{ clickable: true }}
        >
          <br />
          <br />
          <SwiperSlide style={style2}>Slide 1</SwiperSlide>
          <SwiperSlide style={style2}>Slide 2</SwiperSlide>
          <SwiperSlide style={style2}>Slide 3</SwiperSlide>
          <SwiperSlide style={style2}>Slide 4</SwiperSlide>
          <SwiperSlide style={style2}>Slide 5</SwiperSlide>
          <SwiperSlide style={style2}>Slide 6</SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
