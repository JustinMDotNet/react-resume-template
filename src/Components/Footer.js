import React, {Component} from 'react';

class Footer extends Component {
    render() {

        let networks;
        if (this.props.data) {
            networks = this.props.data.social.map(function (network) {
                return <li key={network.name}><a href={network.url}><i className={network.className}/></a></li>
            })
        }

        return (
            <footer>

                <div className="row">
                    <div className="twelve columns">
                        <ul className="social-links">
                            {networks}
                        </ul>

                        <ul className="copyright">
                            <li>&copy; Copyright 2022 Justin Moran</li>
                            <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
                        </ul>

                    </div>
                    <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i
                        className="icon-up-open"/></a></div>
                </div>
            </footer>
        );
    }
}

export default Footer;
