import React, {Component} from 'react';

class Header extends Component {
    render() {

        let name;
        let occupation;
        let description;
        let city;
        let networks;

        if (this.props.data) {
            name = this.props.data.name;
            occupation = this.props.data.occupation;
            description = this.props.data.description;
            city = this.props.data.address.city;
            networks = this.props.data.social.map(function (network) {
                return <li key={network.name}><a href={network.url}><i className={network.className}/></a></li>
            })
        }

        return (
            <header id="home">

                <nav id="nav-wrap">

                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

                    <ul id="nav" className="nav">
                        <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                        <li><a className="smoothscroll" href="#about">About</a></li>
                        <li><a className="smoothscroll" href="#resume">Resume</a></li>
                        {/*<li><a className="smoothscroll" href="#portfolio">Works</a></li>*/}
                        {/*<li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>*/}
                        <li><a className="smoothscroll" href="#contact">Contact</a></li>
                    </ul>

                </nav>

                <div className="row banner">
                    <div className="banner-text">
                        <h1 className="responsive-headline">I'm {name}.</h1>
                        <h3>I'm a {city} based <span>{occupation}</span>. {description}.</h3>
                        <hr/>
                        <ul className="social">
                            {networks}
                        </ul>
                    </div>
                </div>
                <div className="image-credit-text">
                    <a href="https://www.pexels.com/photo/small-house-in-a-valley-in-mountains-10697887/" target="_blank" rel="noopener noreferrer">Photo</a> by mark soetebier from Pexels
                </div>
                <p className="scrolldown">
                    <a className="smoothscroll" href="#about"><i className="icon-down-circle"/></a>
                </p>

            </header>
        );
    }
}

export default Header;
