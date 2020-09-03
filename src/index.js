import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import DemoIndex from './demo_page/Demo';
import HomeOne from './HomeOne';
import HomeTwo from './HomeTwo';
import HomeThree from './HomeThree';
import About from './pages/About';
import Services from './service/Services';
import ServiceDetailsLeftSidebarkleen from './service/ServiceDetailsLeftSidebarkleen';
import ServiceDetailsLeftSidebarroom from './service/ServiceDetailsLeftSidebarroom';
import ServiceDetailsLeftSidebarkleenarm from './service/ServiceDetailsLeftSidebarkleenarm';
import ServiceDetailsLeftSidebarconvey from './service/ServiceDetailsLeftSidebarconvey';
import ServiceDetailsLeftSidebarpop from './service/ServiceDetailsLeftSidebarpop';
import ServiceDetailsLeftSidebarvent from './service/ServiceDetailsLeftSidebarvent';
import ServiceDetailsRightSidebar from './service/ServiceDetailsRightSidebar';
import Projects from './project/Projects';
import ProjectDetails from './project/ProjectDetails';
import BlogLeftSidebar from './blog/BlogLeftSidebar';
import BlogRightSidebar from './blog/BlogRightSidebar';
import BlogDetailsLeftSidebar from './blog/BlogDetailsLeftSidebar';
import BlogDetailsRightSidebar from './blog/BlogDetailsRightSidebar';
import Contact from './pages/Contact';
import PageNotFound from './pages/404';
import NoMAtch from './pages/404';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Checkout from './checkout'
import Checkout2 from './checkout2'
import firebase from '@firebase/app';
import '@firebase/firestore';
import { FirestoreProvider } from 'react-firestore';
class Root extends Component{
    render(){
        const prodConfig = {
            apiKey: "AIzaSyCTvY_XcCiJ1_UEGU56PIy1UsXH_7VRdRw",
            authDomain: "uskleen.firebaseapp.com",
            databaseURL: "https://uskleen.firebaseio.com",
            projectId: "uskleen",
            storageBucket: "uskleen.appspot.com",
            messagingSenderId: "715705445400",
            appId: "1:715705445400:web:e0febb83f6e62834bc676d",
            measurementId: "G-1PWZ5ZQ0EH"
          };
        firebase.initializeApp(prodConfig)
        return(
            <BrowserRouter basename={'/'}>
                   <FirestoreProvider firebase={firebase}>
                <Switch>
                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomeOne}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/home-one`} component={HomeOne}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/home-two`} component={HomeTwo}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/home-three`} component={HomeThree}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/about-us`} component={About}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/services`} component={Services}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/kleen`} component={ServiceDetailsLeftSidebarkleen}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/room`} component={ServiceDetailsLeftSidebarroom}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/arm`} component={ServiceDetailsLeftSidebarkleenarm}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/convey`} component={ServiceDetailsLeftSidebarconvey}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/pop`} component={ServiceDetailsLeftSidebarpop}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/vent`} component={ServiceDetailsLeftSidebarvent}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/checkout`} component={Checkout}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/checkout2`} component={Checkout2}/>

                    <Route exact path={`${process.env.PUBLIC_URL}/service-details-right-sidebar`} component={ServiceDetailsRightSidebar}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/projects`} component={Projects}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/project-details`} component={ProjectDetails}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/blog-left-sidebar`} component={BlogLeftSidebar}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/blog-right-sidebar`} component={BlogRightSidebar}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/blog-details-left-sidebar`} component={BlogDetailsLeftSidebar}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/blog-details-right-sidebar`} component={BlogDetailsRightSidebar}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/contact-us`} component={Contact}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/404`} component={PageNotFound}/>
                    <Route component={NoMAtch} />
                </Switch>
                </FirestoreProvider>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));

serviceWorker.register();