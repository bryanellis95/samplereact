import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import Sidebar from './components/Sidebar';
import ServiceGalleryArm from './components/ServiceGalleryArm';
import BrandLogoSlider from '../components/BrandLogoSlider';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
class ServiceDetailsLeftSidebarkleenarm extends Component{
    render(){
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
                                    <h1>Armoire / Closet Sterilizer</h1>
                                    <ul className="page-breadcrumb">
                                        <li><a href="/">Home</a></li>
                                        <li><a href={`${process.env.PUBLIC_URL}/services`}>Products</a></li>
                                        <li>Armoire / Closet Sterilizer</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====================  End of breadcrumb area  ====================*/}

                <div className="page-wrapper section-space--inner--120">
                    {/*Service section start*/}
                    <div className="service-section">
                        <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-12 order-1 order-lg-2">
                            <div className="service-details">
                                {/* service gallery */}
                                <ServiceGalleryArm/>

                                <div className="content section-space--top--30">
                                <div className="row">
                                    <div className="col-12">
                                    <h2>Armoire / Closet Sterilizer</h2>
                                    <h3>$1485</h3>

                                    <p>The Armoire Sterilizer is designed to disinfect the aprons used by barbers / beauticians that come in contact with germs. The Apron(s) can be hung inside the unit and within 3 minutes the unit has sanitized the apron. This can be scaled to handle more than 1 apron depending on the customers needs. Other clothing items can also be used in this unit.</p>
                                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aliquid quod, officiis unde nostrum itaque! Adipisci dolorum, ab dolor, exercitationem praesentium dolorem quo voluptatum itaque dignissimos, sit esse cupiditate. Doloremque rerum similique a nobis placeat in illum, quo quaerat, ut repellat, fuga itaque? Nihil mollitia nisi, nam, accusantium nemo consequuntur reiciendis autem dicta consequatur earum beatae dolor distinctio, debitis repudiandae?</p> */}
                                    </div>
                                    <div className="col-lg-6 col-12 section-space--top--30">
                                    <h3>Dimensions</h3>
                                    <p>
                                    Armoire is 23” wide
                                    </p>
                                    <p>
                                    21 ½” deep
                                    </p>
                                    <p>
                                    64” tall
                                    </p>
                                    </div>
                                    {/* <div className="col-lg-6 col-12 section-space--top--30">
                                    <h3>Project Costing</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, animi? Vel quas in minima qui totam, aliquid dolores quaerat voluptatum?</p>
                                    </div>
                                    <div className="col-lg-6 col-12 section-space--top--30">
                                    <h3>Project Planning</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, animi? Vel quas in minima qui totam, aliquid dolores quaerat voluptatum?</p>
                                    </div>
                                    <div className="col-lg-6 col-12 section-space--top--30">
                                    <h3>Project Strategy</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, animi? Vel quas in minima qui totam, aliquid dolores quaerat voluptatum?</p>
                                    </div> */}
                                </div>
                                <div class="container">
                                    <div class='row'>
                                    <div class="col-lg-6"><button><a href="/checkout2">Purchase now</a></button></div>
                                <div class="col-lg-6"><button><a href="https://uvc-kleen.com" target="_blank">View Product Site</a></button></div>
                                </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-12 order-2 order-lg-1">
                                <Sidebar />
                            </div>
                        </div>
                        </div>
                    </div>
                    {/*Service section end*/}
                    </div>

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


export default ServiceDetailsLeftSidebarkleenarm;