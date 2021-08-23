import React, { Component, useRef } from 'react';
import { connect } from 'react-redux';
import resumeData from '../../ResumeData.json'

import face from '../../_images/Ajay.png'
import linkedin from '../../_images/linkedin.png'
import resume from '../../_images/resumeD.png'
import twitter from '../../_images/twitter.png'
import insta from '../../_images/insta.png'
import facebook from '../../_images/facebook.png'
import upwork from '../../_images/upwork.png'

import './Home.css';
import _ from 'lodash';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            education: [],
            work: [],
            skill: [],
            showcase: [],
            scrollLimit: false,
        };
        this.hideNavbar = this.hideNavbar.bind(this);
    }

    hideNavbar() {
        if (window.scrollY >= 100) {
            this.setState({ scrollLimit: true })
        } else {
            this.setState({ scrollLimit: false })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.hideNavbar)
        this.setState({
            data: resumeData,
            education: resumeData.education,
            work: resumeData.work,
            skill: resumeData.skills,
            showcase: resumeData.projects
        })

    }


    render() {
        const { data, education, work, skill, showcase, scrollLimit } = this.state
        return (
            <React.Fragment>


                <nav id="navbar-example2" className={!scrollLimit ? "navbar flex-column fixed-top pt-1 fadein100" : "navbarOnScroll navbar flex-column fixed-top pt-1"}>
                    <a class="navbar-brand " href="#"></a>
                    <nav class="nav nav-pills flex-row font-weight-bold ">
                        <a class="nav-link ms-3 my-1" href="#home">Home</a>
                        <a class="nav-link ms-3 my-1" href="#about">About</a>
                        <a class="nav-link ms-3 my-1" href="#experience">Experience</a>
                        <a class="nav-link ms-3 my-1" href="#showcase">Showcase</a>
                    </nav>
                </nav>


                <div id="home" class=" containermain col" style={{
                    backgroundImage: `url('https://image.winudf.com/v2/image/Y29tLmJsYWNrYmFja2dyb3VuZHdhbGxwYXBlcnNpbWFnZXNfc2NyZWVuXzEzXzE1MDkyNTIxNDFfMDU1/screen-13.jpg?fakeurl=1&type=.jpg')`,
                    opacity: 0.88,
                }}>
                    <h1 class="text-center centerMainText text-white">I'm Ajay Bhattnagar</h1>
                    <p class="text-center centerMainText text-white descText " >I currently work as a Quality Specialist for POWERsonic Industries. </p>
                    <p class="text-center centerMainText text-white descText">How did I get here? Keep reading</p>

                    <div class='row text-center d-block fadein100'>
                        <a href='https://www.linkedin.com/in/ajaybhattnagar/' target="_blank"> <img src={linkedin}
                            class='socialIcon ' alt="Logo"
                        /></a>
                        <a href='https://twitter.com/Ajaybhattnagar' target="_blank"> <img src={twitter}
                            class='socialIcon ' alt="Logo"
                        /></a>
                        <a href='https://www.instagram.com/ajaybhattnagar/' target="_blank"> <img src={insta}
                            class='socialIcon ' alt="Logo"
                        /></a>
                        <a href='https://www.facebook.com/ajay.bhattnagar' target="_blank"> <img src={facebook}
                            class='socialIcon ' alt="Logo"
                        /></a>
                    </div>

                    <div class='row text-center d-block fadein100'>
                        <a href='https://www.upwork.com/freelancers/~0186e30437451aecc6/' target="_blank"> <img src={upwork}
                            class='socialIcon ' alt="Logo"
                        /></a>
                    </div>

                </div>

                <div id="about" class='containerAbout text-white  '>
                    <div class="container ">
                        <div class="row">

                            <div class='fadein100 align-middle'>
                                <img src={face} alt="Avatar" class='photo' />
                            </div>

                            <div class="col text-center">
                                <div class="col">
                                    <h3>About me</h3>
                                    <p> I actively work to eliminate customer defects, reduce the cost of poor quality to the organization, </p>
                                    <p>and drive lean quality and manufacturing practices</p>

                                </div>
                                <div class="col">
                                    <h3>Contact</h3>
                                    <p> Email: ajay.bhattnagar21@gmail.com</p>
                                    <p> Phone: +1 (647) - 835 - 5617</p>
                                    <a href='https://www.dropbox.com/s/dsmv9gji5u7izzr/Ajay%20-%20resume%20canada.pdf?dl=1' target="_blank"> <img src={resume} alt="Avatar" class='resumeD' /> </a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="aboutDivider">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                        </svg>
                    </div>
                </div>



                {/* ///        Study               */}
                <div id="experience" class='container-fluid container justify-content-center flex-column experienceMargin'>
                    <div id="experience">
                        <div class="row">
                            <p class='item'>Education</p>

                            <div class='col'>
                                {
                                    education && education.length > 0 ?

                                        education.map((education, index) =>

                                            <table key={index} class="table table-borderless">
                                                <thead>
                                                    <tr>
                                                        <th scope="col" class='title'>{education.school}</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <td scope="col" class='desc'>{education.degree}</td>
                                                    <tr>
                                                        <ul class='italics'>{education.graduated}</ul>
                                                    </tr>
                                                </tbody>
                                            </table>


                                        )
                                        :
                                        <div>null</div>

                                }
                            </div>

                        </div>
                    </div>
                    <div class='divider' />
                </div>

                {/* ///        Study               */}




                {/* ///        Work               */}
                <div id="item-1-1" class='container-fluid container justify-content-center flex-column experienceMargin'>
                    <div id="experience">
                        <div class="container">
                            <div class="row">
                                <p class='item'>Experience</p>

                                <div class='col'>
                                    {
                                        work && work.length > 0 ?

                                            work.map((work, index) =>

                                                <table key={index} class="table table-borderless">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col" class='title'>{work.employeer}</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <td scope="col" class='desc'>{work.position} <ul class='italics'>{work.duration}</ul> </td>
                                                        <tr scope="col" class='desc'>
                                                            {
                                                                work.description.map((data, index) =>
                                                                    <ul key={index}>
                                                                        <li class='desc'>{data}</li>
                                                                    </ul>
                                                                )
                                                            }
                                                        </tr>
                                                    </tbody>
                                                </table>


                                            )
                                            :
                                            <div>null</div>

                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class='divider' />
                </div>
                {/* ///        Work               */}



                {/* ///        Skill               */}
                <div id="item-1-1" class='container-fluid container justify-content-center flex-column experienceMargin'>
                    <div id="experience">
                        <div class="container">
                            <div class="row">
                                <p class='item'>Skills</p>

                                <div class='col'>
                                    {
                                        skill && skill.length > 0 ?

                                            skill.map((data, index) =>
                                                <div key={index} class='row'>
                                                    <img src={data.icon} class='skillIcon rounded mx-auto d-block img-fluid' alt="Logo" />
                                                    <table class="table table-borderless table-sm ml-5">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col" class='skillTitle'>{data.name}</th>
                                                            </tr>

                                                        </thead>
                                                        <tbody>
                                                            <td scope="col" class='desc'>
                                                                <div class="progress">
                                                                    <div class='progress-bar bg-info' role="progressbar" style={{ width: data.level }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                            </td>
                                                        </tbody>
                                                    </table>
                                                </div>

                                            )
                                            :
                                            <div>null</div>

                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class='divider' />
                </div>
                {/* ///        Skill               */}


                {/* ///        Showcase               */}
                <div id="showcase" class='container-fluid container justify-content-center flex-column margincard'>
                    <div class='showcaseText text-center '>Check out some of my work.</div>
                    <div class='row justify-content-md-center row-cols-5'>

                        {
                            showcase && showcase.length > 0 ?
                                showcase.map((data, index) =>

                                    <div key={index} class="card mx-3 test" style={{ width: '20rem' }}>
                                        <a href={data.url} target="_blank">
                                            <img src={data.image} class="card-img-top image" alt="..."></img>
                                            <div class="card-body">
                                                <p class="card-text text">{data.title}</p>
                                            </div>
                                        </a>
                                    </div>


                                )
                                :
                                <div>null</div>

                        }
                    </div>
                </div>
                {/* ///        Showcase               */}

                {/* ///        Fotter               */}
                <div id="item-1-1" >
                    <div class='containerFooter text-white text-center p-2'>
                        <div>Designed by Ajay Bhattnagar</div>
                    </div>
                </div>
                {/* ///        Fotter               */}



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