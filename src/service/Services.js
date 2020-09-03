import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import BrandLogoSlider from '../components/BrandLogoSlider';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
class Services extends Component{
    render(){

        let data = [
            {pageLink: 'service-details-left-sidebar', img: 'frmae.jpg', iconClass: 'flaticon-002-welding', serviceTitle: 'UVC-Kleen', serviceSubtitle: 'The UVC-Kleen is a small desk top sterilizer that delivers enough of a lethal UVC dose...(MORE)'},
            {pageLink: 'service-details-left-sidebar', img: 'room.jpg', iconClass: 'flaticon-004-walkie-talkie', serviceTitle: 'Room sterilizer model', serviceSubtitle: 'The Room sterilizer is designed to disinfect a room by delivering enough...(MORE)'},
            {pageLink: 'service-details-left-sidebar', img: 'noimage.png', iconClass: 'flaticon-015-cart', serviceTitle: 'Conveyor belt Sterilizer', serviceSubtitle: 'Designed to meet your needs'},
            {pageLink: 'service-details-left-sidebar', img: 'Cabinet.jpg', iconClass: 'flaticon-010-tank-1', serviceTitle: 'Armoire / Closet Sterilizer', serviceSubtitle: 'The Armoire Sterilizer is designed to disinfect the aprons used by...(MORE)'},
            {pageLink: 'service-details-left-sidebar', img: 'noimage.png', iconClass: 'flaticon-004-walkie-talkie', serviceTitle: '“Pop machine” sterilizer', serviceSubtitle: ''},
            {pageLink: 'service-details-left-sidebar', img: 'noimage.png', iconClass: 'flaticon-002-welding', serviceTitle: 'Ventilation / Air Duct Sterilizer', serviceSubtitle: ''}
        ];

        let Datalist = data.map((val, i) => {
            return(
                <div className="col-lg-4 col-md-6 col-12 section-space--bottom--30" key={i}>
                    <div className="service-grid-item">
                    <div className="service-grid-item__image">
                        <div className="service-grid-item__image-wrapper">
                        <a href={`${process.env.PUBLIC_URL}/${val.pageLink}`}>
                            <img src={`assets/img/service/${val.img}`} style={{height:'280px'}} className="img-fluid" alt="Service Grid" />
                        </a>
                        </div>
                        {/* <div className="icon">
                        <i className={val.iconClass} />
                        </div> */}
                    </div>
                    <div className="service-grid-item__content">
                        <h3 className="title">
                        <a href={`${process.env.PUBLIC_URL}/${val.pageLink}`}>{val.serviceTitle}</a>
                        </h3>
                        <p className="subtitle">{val.serviceSubtitle}</p>
                        <a href={`${process.env.PUBLIC_URL}/${val.pageLink}`} className="see-more-link">SEE MORE</a>
                    </div>
                    </div>
                </div>
            )
        });

        return(
            <div>

                {/* Navigation bar */}
                <NavBar/>

                {/* breadcrumb */}
                {/*====================  breadcrumb area ====================*/}
                <div className="breadcrumb-area breadcrumb-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="page-banner text-center">
                                    <h1>Products</h1>
                                    <ul className="page-breadcrumb">
                                        <li><a href="/">Home</a></li>
                                        <li>Products</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====================  End of breadcrumb area  ====================*/}

                {/*====================  service page content ====================*/}
                <div className="page-wrapper section-space--inner--120">
                {/*Service section start*/}
                <div className="service-section">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="service-item-wrapper">
                            <div className="row">
                                {Datalist}
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/*Service section end*/}
                </div>

                {/*====================  End of service page content  ====================*/}

                {/* Brand logo */}
                {/* <BrandLogoSlider background = "grey-bg" /> */}

                {/* Footer */}
                <Footer/>

                {/* Mobile Menu */}
                <MobileMenu/>

            </div>
        )
    }
}

export default Services;