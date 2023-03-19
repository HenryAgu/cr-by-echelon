// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../../../img/bar-1.jpg";
import image2 from "../../../img/lobby.jpg";
import image3 from "../../../img/gym-2.jpg";
import image4 from "../../../img/hallway.jpg";
import image5 from "../../../img/lobby-2.jpg";
import image6 from "../../../img/swimming.jpg";
import image7 from "../../../img/home.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slider() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="slide">
                        <div className="slide-img">
                            <img src={image1} alt="" />
                        </div>{" "}
                        <div className="slide-text">Bar.</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide">
                        {" "}
                        <div className="slide-img">
                            <img src={image2} alt="sliders" />
                        </div>
                        <div className="slide-text">Conference Hall.</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide">
                        {" "}
                        <div className="slide-img">
                            <img src={image3} alt="sliders" />
                        </div>
                        <div className="slide-text">Fitness Center.</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide">
                        {" "}
                        <div className="slide-img">
                            <img src={image4} alt="sliders" />
                        </div>
                        <div className="slide-text">HallWay.</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide">
                        {" "}
                        <div className="slide-img">
                            <img src={image5} alt="sliders" />
                        </div>
                        <div className="slide-text">Lobby.</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide">
                        {" "}
                        <div className="slide-img">
                            <img src={image6} alt="sliders" />
                        </div>
                        <div className="slide-text">Swimming Pool.</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide">
                        {" "}
                        <div className="slide-img">
                            <img src={image7} alt="sliders" />
                        </div>
                        <div className="slide-text">Reception.</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide">
                        {" "}
                        <div className="slide-img">
                            <img src={image1} alt="sliders" />
                        </div>
                        <div className="slide-text">Restaurant.</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide">
                        {" "}
                        <div className="slide-img">
                            <img src={image2} alt="sliders" />
                        </div>
                        <div className="slide-text">Store.</div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
