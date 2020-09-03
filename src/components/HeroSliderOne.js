import React, {Component} from 'react';
import Swiper from 'react-id-swiper';

class HeroSliderOne extends Component{
    
    render(){
        const params = {
            slidesPerView : 1,
            loop: true,
            speed: 2000,
            watchSlidesVisibility: true,
            effect: 'fade',
            navigation: {
                nextEl: '.ht-swiper-button-next',
                prevEl: '.ht-swiper-button-prev'
            },
            renderPrevButton: () => (
                <div className="ht-swiper-button-prev ht-swiper-button-nav d-none d-xl-block"><i className="ion-ios-arrow-left" /></div>
              ),
              renderNextButton: () => (
                <div className="ht-swiper-button-next ht-swiper-button-nav d-none d-xl-block"><i className="ion-ios-arrow-forward" /></div>
              ),
            autoplay: {
                delay: 5000,
            }
        }

        let data = [
            {bgImg: 'frmae.jpg', sliderTitle: 'UVC-Kleen', sliderSubtitle: 'The UVC-Kleen is a small desk top sterilizer that delivers enough of a lethal UVC dose...(MORE)', btnLink: 'services'},
            {bgImg: 'room.jpg', sliderTitle: 'Room sterilizer model', sliderSubtitle: 'The Room sterilizer is designed to disinfect a room by delivering enough...(MORE)', btnLink: 'services'},
            {bgImg: 'Cabinet.jpg', sliderTitle: 'Armoire / Closet Sterilizer', sliderSubtitle: 'The Armoire Sterilizer is designed to disinfect the aprons used by...(MORE)', btnLink: 'services'}
        ];

        let DataList = data.map((val, i)=>{
            return(
                
                <div className="swiper-slide" key={i}>
                    <div className="hero-slider__single-item" style={{ backgroundImage: `url(assets/img/slider/${val.bgImg})` }} >
                        <div className="hero-slider__content-wrapper">
                            <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                <div className="hero-slider__content">
                                    <h2 style={{color:'black'}} className="hero-slider__title">{val.sliderTitle}</h2>
                                    <p style={{color:'black'}} className="hero-slider__text">{val.sliderSubtitle}</p>
                                    <a className="hero-slider__btn" href={`${process.env.PUBLIC_URL}/${val.btnLink}`}> Learn More</a>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        });

        return(
            <div>
                {/*====================  hero slider area ====================*/}
                <div className="hero-alider-area">
                    <Swiper {...params}>
                        {DataList}
                    </Swiper>
                </div>
                {/*====================  End of hero slider area  ====================*/}

            </div>
        )
    }
}

export default HeroSliderOne;