import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: []
        };
    }
    render() {
        return (
            <div>
                <footer  className="flex-shrink-0 py-4 bg-dark text-white-50 fixed-bottom">
                    <div className="container text-center">
                        <small>Copyright &copy; Your Website</small>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;