import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MobileMenu from './MobileMenu';
class NavBar extends Component{

    constructor(props){
        super(props);
        this.state = { windowWidth: window.innerWidth};
        this.handleScroll = this.handleScroll.bind(this);
        this.handleResize = this.handleResize.bind(this);

        this.mobileMenuElement = React.createRef();
    }

    activeMobileMenu = () => {
        this.mobileMenuElement.current.toggleMobileMenu();
    }

    handleScroll() {
        if(this.mount){
            this.setState({scroll: window.scrollY});
        }
    }

     handleResize = (e) => {
        this.setState({ windowWidth: window.innerWidth });
       };
  
    componentDidMount() {
        this.mount = true;
        const el = document.querySelector('nav');
        this.setState({top: el.offsetTop, height: el.offsetHeight});
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener("resize", this.handleResize);

    }
    
    componentDidUpdate() {
        this.state.scroll > this.state.top ? 
        document.body.style.paddingTop = `${this.state.height}px` :
        document.body.style.paddingTop = 0;
    }

    componentWillUnmount(){
        this.mount = false;
        window.addEventListener("resize", this.handleResize);

    }

    render(){


        return(
            <div>
                {/*====================  header area ====================*/}
                <div className={`header-area header-sticky header-sticky--default ${this.state.scroll > this.state.top ? "is-sticky" : ""}`}>
                    <div className="header-area__desktop header-area__desktop--default">
                    {/*=======  header top bar  =======*/}
                    <div className="header-top-bar">
                        <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4">
                            {/* top bar left */}
                            <div className="top-bar-left-wrapper">
                                <div className="social-links social-links--white-topbar d-inline-block">
                                <ul>
                                    <li><a href="//facebook.com"><i className="zmdi zmdi-facebook" /></a></li>
                                    {/* <li><a href="//twitter.com"><i className="zmdi zmdi-twitter" /></a></li>
                                    <li><a href="//vimeo.com"><i className="zmdi zmdi-vimeo" /></a></li>
                                    <li><a href="//linkedin.com"><i className="zmdi zmdi-linkedin-box" /></a></li>
                                    <li><a href="//skype.com"><i className="zmdi zmdi-skype" /></a></li> */}
                                </ul>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-8">
                            {/* top bar right */}
                            <div className="top-bar-right-wrapper">
                                <a href={`${process.env.PUBLIC_URL}/services`} className="ht-btn ht-btn--default d-inline-block">View our Products</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/*=======  End of header top bar  =======*/}
                    {/*=======  header info area  =======*/}
                    <div className="header-info-area">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-12">
                                <div className="header-info-wrapper align-items-center">
                                    {/* logo */}
                                    <div className="logo">
                                        <Link to = {`${process.env.PUBLIC_URL}/home-one`}>
                                        {this.state.windowWidth < 990 ? (
                                            <>
                                            <img style={{height: 80, width: 80}} src="assets/img/logo/kleen.jpg" className="img-fluid" alt="Logo" />
                                            <p style={{fontSize: 10, marginLeft:8, fontWeight:'bold'}}>UVC KLEEN IT!</p>
                                            </>
                                            ): (
                                                <>
                                            <img style={{height: 120, width: 120}} src="assets/img/logo/kleen.jpg" className="img-fluid" alt="Logo" />
                                            <p style={{marginLeft: 10, fontWeight:'bold'}}>UVC KLEEN IT!</p>
                                                </>
                                        )}
                                        </Link>
                                    </div>
                                    {this.state.windowWidth > 990 ? (
                                    <span style={{fontSize:10}}>US-UVC is a US based company that has over 60 years experience designing and building equipment. This product line is our attempt to help the USA and all other countries battle the Covid-19 and other virus / bacteria that have invaded our daily life.</span>

                                    ):null}

                                    {/* header contact info */}
                                    <div className="header-contact-info">
                                    <div className="header-info-single-item">
                                        <div className="header-info-single-item__icon">
                                        <i className="zmdi zmdi-smartphone-android" />
                                        </div>
                                        <div className="header-info-single-item__content">
                                        <h6 className="header-info-single-item__title">Phone</h6>
                                        <p className="header-info-single-item__subtitle">+3176992120</p>
                                        </div>
                                    </div>
                                    <div className="header-info-single-item">
                                        <div className="header-info-single-item__icon">
                                        <i className="zmdi zmdi-home" />
                                        </div>
                                        <div className="header-info-single-item__content">
                                        <h6 className="header-info-single-item__title">Address</h6>
                                        <p className="header-info-single-item__subtitle">441 E South St Shelbyville, IN 46124</p>
                                        </div>
                                    </div>
                                    </div>
                                    {/* mobile menu */}
                                    <div className="mobile-navigation-icon" id="mobile-menu-trigger" onClick={this.activeMobileMenu}>
                                        <i />
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                    </div>
                    {/*=======  End of header info area =======*/}
                    {/*=======  header navigation area  =======*/}
                    <div className="header-navigation-area default-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    {/* header navigation */}
                                    <div className="header-navigation header-navigation--header-default position-relative">
                                        <div className="header-navigation__nav position-static">
                                        <nav>
                                            <ul>
                                            {/* <li className="has-children has-children--multilevel-submenu">
                                                <Link to={`${process.env.PUBLIC_URL}/`}> HOME </Link> */}
                                                {/* <ul className="submenu">
                                                    <li><Link to={`${process.env.PUBLIC_URL}/home-one`}>Homepage One</Link></li>
                                                    <li><Link to={`${process.env.PUBLIC_URL}/home-two`}>Homepage Two</Link></li>
                                                    <li><Link to={`${process.env.PUBLIC_URL}/home-three`}>Homepage Three</Link></li>
                                                </ul> */}
                                            {/* </li> */}
                                            <li><Link to={`${process.env.PUBLIC_URL}/`}>HOME</Link> </li>
                                            <li><Link to={`${process.env.PUBLIC_URL}/about-us`}>ABOUT</Link></li>
                                            <li className="has-children has-children--multilevel-submenu">
                                                <Link to={`${process.env.PUBLIC_URL}/services`}>PRODUCTS</Link>
                                                <ul className="submenu">
                                                <li><Link to={`${process.env.PUBLIC_URL}/services`}>Products Page</Link></li>
                                                <li><Link to={`${process.env.PUBLIC_URL}/service-details-left-sidebar`}>UVC-Kleen</Link></li>
                                                <li><Link to={`${process.env.PUBLIC_URL}/service-details-left-sidebar`}>Room sterilizer model</Link></li>
                                                <li><Link to={`${process.env.PUBLIC_URL}/service-details-left-sidebar`}>Conveyor belt Sterilizer</Link></li>
                                                <li><Link to={`${process.env.PUBLIC_URL}/service-details-left-sidebar`}>Armoire / Closet Sterilizer</Link></li>
                                                <li><Link to={`${process.env.PUBLIC_URL}/service-details-left-sidebar`}>“Pop machine” sterilizer</Link></li>
                                                <li><Link to={`${process.env.PUBLIC_URL}/service-details-left-sidebar`}>Ventilation / Air Duct Sterilizer</Link></li>

                                                </ul>
                                            </li>
                                            {/* <li className="has-children has-children--multilevel-submenu">
                                                <Link to={`${process.env.PUBLIC_URL}/projects`} >PROJECT</Link>
                                                <ul className="submenu">
                                                <li><Link to={`${process.env.PUBLIC_URL}/projects`} >Project Page</Link></li>
                                                <li><Link to={`${process.env.PUBLIC_URL}/project-details`}>Project Details</Link></li>
                                                </ul>
                                            </li> */}
                                            {/* <li className="has-children has-children--multilevel-submenu">
                                                <Link to={`${process.env.PUBLIC_URL}/blog-left-sidebar`}>BLOG</Link>
                                                <ul className="submenu">
                                                <li><Link to={`${process.env.PUBLIC_URL}/blog-left-sidebar`}>Blog Left Sidebar</Link></li>
                                                <li><Link to={`${process.env.PUBLIC_URL}/blog-right-sidebar`}>Blog Right Sidebar</Link></li>
                                                <li><Link to={`${process.env.PUBLIC_URL}/blog-details-left-sidebar`}>Blog Details Left Sidebar</Link></li>
                                                <li><Link to={`${process.env.PUBLIC_URL}/blog-details-right-sidebar`}>Blog Details Right Sidebar</Link></li>
                                                </ul>
                                            </li> */}
                                            <li><Link to={`${process.env.PUBLIC_URL}/contact-us`}>CONTACT</Link> </li>
                                            </ul>
                                        </nav>
                                        </div>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    {/*=======  End of header navigation area =======*/}
                    </div>
                </div>
                {/*====================  End of header area  ====================*/}
                
                {/* Mobile Menu */}
                <MobileMenu ref={this.mobileMenuElement} />

            </div>
        )
    }
}


export default NavBar;