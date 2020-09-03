import React, {Component} from 'react';
import Swiper from 'react-id-swiper';

class ServiceGridSlider extends Component{
    render(){
        const params = {
            slidesPerView : 3,
            loop: true,
            speed: 1000,
            watchSlidesVisibility: true,
            spaceBetween : 30,
            autoplay: {
                delay: 3000,
            },
            // Responsive breakpoints
            breakpoints: {
                1499:{
                    slidesPerView : 3
                },

                991:{
                    slidesPerView : 2
                },

                767:{
                    slidesPerView : 1

                },

                575:{
                    slidesPerView : 1
                }
            }

        }
        let data = [
            {pageLink: 'service-details-left-sidebar', img: 'frmae.jpg', iconClass: 'flaticon-002-welding', serviceTitle: 'UVC-Kleen', serviceExcerpt: 'The UVC-Kleen is a small desk top sterilizer that delivers enough of a lethal UVC dose...(MORE)'},
            {pageLink: 'service-details-left-sidebar', img: 'room.jpg', iconClass: 'flaticon-004-walkie-talkie', serviceTitle: 'Room sterilizer model', serviceExcerpt: 'The Room sterilizer is designed to disinfect a room by delivering enough...(MORE)'},
            {pageLink: 'service-details-left-sidebar', img: 'service3.jpg', iconClass: 'flaticon-015-cart', serviceTitle: 'Conveyor belt Sterilizer', serviceExcerpt: ''},
            {pageLink: 'service-details-left-sidebar', img: 'Cabinet.jpg', iconClass: 'flaticon-010-tank-1', serviceTitle: 'Armoire / Closet Sterilizer', serviceExcerpt: 'The Armoire Sterilizer is designed to disinfect the aprons used by...(MORE)'},
            {pageLink: 'service-details-left-sidebar', img: 'service-2.jpg', iconClass: 'flaticon-004-walkie-talkie', serviceTitle: '“Pop machine” sterilizer', serviceExcerpt: ''},
            {pageLink: 'service-details-left-sidebar', img: 'service-1.jpg', iconClass: 'flaticon-002-welding', serviceTitle: 'Ventilation / Air Duct Sterilizer', serviceExcerpt: ''}
        ];

        let DataList = data.map((val, i)=>{
            return(
                <div className="swiper-slide" key={i}>
                    <div className="service-grid-item">
                    <div className="service-grid-item__image">
                        <div className="service-grid-item__image-wrapper">
                        <a href={`${process.env.PUBLIC_URL}/${val.serviceUrl}`}>
                            <img src={`assets/img/service/${val.img}`} style={{height:'250px'}} alt="" />
                        </a>
                        </div>
                        {/* <div className="icon">
                        <i className={val.iconName} />
                        </div> */}
                    </div>
                    <div className="service-grid-item__content">
                        <h3 className="title">
                        <a href={`${process.env.PUBLIC_URL}/${val.serviceUrl}`}>{val.serviceTitle}</a>
                        </h3>
                        <p className="subtitle">{val.serviceExcerpt}</p>
                        <a href={`${process.env.PUBLIC_URL}/${val.serviceUrl}`} className="see-more-link">SEE MORE</a>
                    </div>
                    </div>
                </div>
            )
        });
        return(
            <div>
                {/*====================  service grid slider area ====================*/}
                <div className="service-grid-slider-area section-space--inner--120">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title-area text-center">
                        <h2 className="section-title section-space--bottom--50">Our Products</h2>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="service-slider">
                            <Swiper {...params}>
                                {DataList}
                            </Swiper>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/*====================  End of service grid slider area  ====================*/}

            </div>
        )
    }
}


export default ServiceGridSlider;