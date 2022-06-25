import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Testimonial.scss'
import RonaldRichards from '../../img/ronald-richards.png'

const Testimonial = () => {
  const params = {
    modules: [Navigation, Pagination],
    navigation: true,
    spaceBetween: 100,
    pagination: {
      clickable: true,
    }
  }
  
  return (
    <section className='testimonial'>
      <Swiper className='testimonial__slider' {...params}>
        <SwiperSlide className='testimonial__slide'>
          <div className="testimonial__slide-container">
            <div className="testimonial__image-col">
              <img src={RonaldRichards} alt="" className='testimonial__image'/>
              <div className="testimonial__image-badge">
                <h3 className="testimonial__name">Ronald Richards</h3>
                <p className="testimonial__additional">Product Manager</p>
              </div>
              <div className="testimonial__bg-mask">
                <div className="testimonial__bg-mask-1"></div>
                <div className="testimonial__bg-mask-2"></div>
                <div className="testimonial__bg-mask-3"></div>
              </div>
            </div>
            <div className="testimonial__text-col">
              <p>Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do nulla velit labore occaecat do deserunt Lorem magna officia incididunt consectetur amet. Sunt consectetur veniam minim ex commodo sint non. Occaecat aute officia excepteur non laboris id qui ad.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='testimonial__slide'>
          <div className="testimonial__slide-container">
            <div className="testimonial__image-col">
              <img src={RonaldRichards} alt="" className='testimonial__image'/>
              <div className="testimonial__image-badge">
                <h3 className="testimonial__name">Ronald Richards</h3>
                <p className="testimonial__additional">Product Manager</p>
              </div>
              <div className="testimonial__bg-mask">
                <div className="testimonial__bg-mask-1"></div>
                <div className="testimonial__bg-mask-2"></div>
                <div className="testimonial__bg-mask-3"></div>
              </div>
            </div>
            <div className="testimonial__text-col">
              <p>Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do nulla velit labore occaecat do deserunt Lorem magna officia incididunt consectetur amet. Sunt consectetur veniam minim ex commodo sint non. Occaecat aute officia excepteur non laboris id qui ad.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='testimonial__slide'>
          <div className="testimonial__slide-container">
            <div className="testimonial__image-col">
              <img src={RonaldRichards} alt="" className='testimonial__image'/>
              <div className="testimonial__image-badge">
                <h3 className="testimonial__name">Ronald Richards</h3>
                <p className="testimonial__additional">Product Manager</p>
              </div>
              <div className="testimonial__bg-mask">
                <div className="testimonial__bg-mask-1"></div>
                <div className="testimonial__bg-mask-2"></div>
                <div className="testimonial__bg-mask-3"></div>
              </div>
            </div>
            <div className="testimonial__text-col">
              <p>Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do nulla velit labore occaecat do deserunt Lorem magna officia incididunt consectetur amet. Sunt consectetur veniam minim ex commodo sint non. Occaecat aute officia excepteur non laboris id qui ad.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Testimonial;
