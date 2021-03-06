import React, {Component} from 'react';
import Swiper from 'react-id-swiper';
const prodimage3 = require('../../public/assets/img/viewall.png')

class ServiceGridSlider extends Component{
    render(){
        const params = {
            slidesPerView : 4,
            speed: 1000,
            watchSlidesVisibility: true,
            spaceBetween : 30,
           
            // Responsive breakpoints
            breakpoints: {
                1499:{
                    slidesPerView : 4
                },

                991:{
                    slidesPerView : 4
                },

                767:{
                    slidesPerView : 4

                },

                575:{
                    slidesPerView : 4
                }
            }

        }
        let data = [
            {pageLink: 'service-details-left-sidebar', img: 'frmae.jpg', iconClass: 'flaticon-002-welding', serviceTitle: 'UVC-Kleen', serviceExcerpt: '', serviceUrl: 'kleen'},
            {pageLink: 'service-details-left-sidebar', img: 'room.jpg', iconClass: 'flaticon-004-walkie-talkie', serviceTitle: 'Room sterilizer model', serviceExcerpt: '', serviceUrl: 'room'},
            {pageLink: 'service-details-left-sidebar', img: 'Cabinet.jpg', iconClass: 'flaticon-010-tank-1', serviceTitle: 'Armoire / Closet Sterilizer', serviceExcerpt: '', serviceUrl: 'arm'},
            {pageLink: 'service-details-left-sidebar', img: 'viewall.png', iconClass: 'flaticon-015-cart', serviceTitle: 'View All Products', serviceExcerpt: '', serviceUrl: 'services'},

        ];

        let DataList = data.map((val, i)=>{
            return(
<div className="col-lg-3">
                <div className="swiper-slide" key={i}>
                    <div className="service-grid-item">
                    <div className="service-grid-item__image">
                        <div className="">
                        <a href={`${process.env.PUBLIC_URL}/${val.serviceUrl}`}>
                            <img className="imgFor" src={`assets/img/service/${val.img}`} style={{height:'280px'}} alt="" />
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
                </div>
            )
        });
        return(
            <div>
                {/*====================  service grid slider area ====================*/}
                <div className="service-grid-slider-area section-space--inner--120">
                <div className="container">
                    <div className="row">
                    {/* <div className="col-lg-12">
                        <div className="section-title-area text-center">
                        <h2 className="section-title section-space--bottom--50">Our Products</h2>
                        </div>
                    </div> */}
                    <div class="container-fluid">
                    <div className="col-lg-12">
                    <div className="row">
                        {/* <div className="service-slider"> */}
                            {/* <Swiper {...params}> */}
                                {DataList}
                            {/* </Swiper> */}
                        {/* </div> */}
                        </div>
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