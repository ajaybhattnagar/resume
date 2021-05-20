import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Home.css';
import _ from 'lodash';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <React.Fragment>

                <div class=" jumbotron-fluid">



                    <nav id="navbar-example" class="navbar navbar-light bg-light flex-column sticky-top ">
                        <a class="navbar-brand" href="#"></a>
                        <nav class="nav nav-pills flex-row ">
                            <a class="nav-link ms-3 my-1" href="#home">Home</a>
                            <a class="nav-link ms-3 my-1" href="#about">About</a>
                            <a class="nav-link ms-3 my-1" href="#item-1-2">Item 1-2</a>
                        </nav>
                    </nav>


                    <div id="home" class=" containermain" style={{
                        backgroundImage: `url('https://image.winudf.com/v2/image/Y29tLmJsYWNrYmFja2dyb3VuZHdhbGxwYXBlcnNpbWFnZXNfc2NyZWVuXzEzXzE1MDkyNTIxNDFfMDU1/screen-13.jpg?fakeurl=1&type=.jpg')`,
                        opacity: 0.85,
                    }} >
                        <h1 class="text-center centerMainText text-white">test</h1>
                        <p class="text-center centerMainText text-white " >This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                        <p class="text-center centerMainText text-white">It uses utility classes for typography and spacing to space content out within the larger container.</p>


                    </div>


                </div>

                <div data-bs-spy="scroll" data-bs-target="#navbar-example2"  class="scrollspy-example" tabindex="0">

                    <div id="about" class='containerAbout text-white'>
                        <div class="container">
                            <div class="row">

                                <div class="text-center">
                                    <img src="https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-superJumbo-v4.jpg" alt="Avatar" class='photo' />
                                </div>
                                <div class="col text-center">
                                    <div class="col">
                                        <h4>About me</h4>
                                    <p>&nbsp;&nbsp;&nbsp; sdadasd</p>
                                    </div>
                                    <div class="col">
                                        <h4>Contact</h4>
                                    <p>&nbsp;&nbsp;&nbsp; sdadasd</p>
                                    <p>&nbsp;&nbsp;&nbsp; sdadasd</p>
                                    <p>&nbsp;&nbsp;&nbsp; sdadasd</p>
                                    <p>&nbsp;&nbsp;&nbsp; sdadasd</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div id="item-1-1" class='container-fluid container justify-content-center flex-column testMargin'>
                        <h1 class="text-center ">test</h1>
                    </div>

                    <div id="item-1-1" class='container-fluid container justify-content-center flex-column testMargin'>
                        <h1 class="text-center ">test</h1>
                    </div>

                    <div id="item-1-1" class='container-fluid container justify-content-center flex-column testMargin'>
                        <h1 class="text-center ">test</h1>
                    </div>

                    <div id="item-1-1" class='container-fluid container justify-content-center flex-column testMargin'>
                        <h1 class="text-center ">test</h1>
                    </div>

                </div>

            </React.Fragment>
        );
    }
}

function mapState(state) {

    return {

    };
}

const actionCreators = {

}

export default connect(mapState, actionCreators)(Home);