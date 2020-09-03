import React, { Component } from 'react';
import ModalVideo from 'react-modal-video'
const prodimage3 = require('../../public/assets/img/video.mp4')

class VideoCta extends Component{

    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
      }
     
      openModal () {
        this.setState({isOpen: true})
      }
    render(){
        return(
            <div>
                {/*====================  video cta area ====================*/}
                <div className="video-cta-area section-space--inner--120">
                    <div className="container">
                        <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="video-cta-content">
                            <h4 className="video-cta-content__small-title">ABOUT US</h4>
                            <h3 className="video-cta-content__title">Over 60 Years of Experience designing and building equipment</h3>
                            <p className="video-cta-content__text">US-UVC is a US based company that has over 60 years experience designing and building equipment. This product line is our attempt to help the USA and all other countries battle the Covid-19 and other virus / bacteria that have invaded our daily life.</p>
                            <a href={`${process.env.PUBLIC_URL}/contact-us`} className="ht-btn ht-btn--round">CONTACT US</a>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1 col-md-6">
                            <div className="cta-video-image">
                            <div className="video-popup">
                            <ModalVideo channel='custom' isOpen={this.state.isOpen} url={prodimage3} onClose={() => this.setState({isOpen: false})} />
                                <button onClick={this.openModal}>
                                    <div className="cta-video-image__image">
                                        <img src="assets/img/screen.png" className="img-fluid" alt="" />
                                    </div>
                                    <div className="cta-video-image__icon">
                                        <i className="ion-ios-play" />
                                    </div>
                                </button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                {/*====================  End of video cta area  ====================*/}
            </div>
        )
    }
}


export default VideoCta;