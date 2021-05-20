import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav } from 'react-bootstrap';
import Brand from '../../_images/brand.png'

class NavigationBar extends Component {

    render() {
        return (
            <div></div>
        );
    }
}

function mapState(state) {
    return {

    };
}

const actionCreators = {

}

export default connect(mapState, actionCreators)(NavigationBar);