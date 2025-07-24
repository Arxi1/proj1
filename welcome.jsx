import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        return (
            <div>
                <h1>Welcome Page</h1>
                <a href='/app'>App</a> <br/>
                <a href='/myapp'>MyApp</a>
            </div>
        );
    }
}

export default Welcome;