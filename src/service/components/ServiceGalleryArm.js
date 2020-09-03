import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
// const prodimage1 = require('../../../public/assets/img/services/arm1.jpg')
// const prodimage2 = require('../../../public/assets/img/services/arm2.jpg')
// const prodimage3 = require('../../../public/assets/img/services/arm.jpg')
// const prodimage4 = require('../../../public/assets/img/services/arm1.jpg')

class ServiceGalleryArm extends Component{
    render(){
                
        /* service image gallery slider params*/

        const params = {
            slidesPerView : 1,
            loop: true,
            speed: 1000,
            navigation: {
                nextEl: '.ht-swiper-button-next',
                prevEl: '.ht-swiper-button-prev'
            },
            renderPrevButton: () => (
            <div className="ht-swiper-button-prev ht-swiper-button-nav"><i className="ion-ios-arrow-left" /></div>
            ),
            renderNextButton: () => (
            <div className="ht-swiper-button-next ht-swiper-button-nav"><i className="ion-ios-arrow-forward" /></div>
            )
        };

        /* service image gallery data */

        let imageGalleryData = [
            {img: 'Cabinet.jpg'},
            {img: 'arm1.JPG'},
            {img: 'arm2.JPG'},
            {img: 'arm3.JPG'},
            {img: 'arm4.JPG'},
            // {img: 'service-details-6.jpg'}
        ];

        
        /* service image gallery component */

        let ImageGalleryDataList = imageGalleryData.map((val, i) => {
            return(
                <div className="swiper-slide service-gallery__single-slide" key={i}>
                    <div className="item">
                        <img src={`assets/img/service/${val.img}`} style={{height: '600px', width: '650px'}} className="img-fluid" alt="gallery data" />
                    </div>
                </div>
            )
        });


        return(
            <div>
                <div className="service-gallery">
                    <Swiper {...params}>
                        {ImageGalleryDataList}
                    </Swiper>
                </div>
            </div>
        )
    }
}

export default ServiceGalleryArm;