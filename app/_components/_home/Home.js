import React, { Component } from 'react';
import { connect } from 'react-redux';
import resumeData from '../../ResumeData.json'
import face from '../../_images/Ajay.png'
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
            showcase: []
        };
    }

    componentDidMount() {
        this.setState({
            data: resumeData,
            education: resumeData.education,
            work: resumeData.work,
            skill: resumeData.skills,
            showcase: resumeData.projects
        })

    }

    

    render() {
        const { data, education, work, skill, showcase } = this.state
        return (
            <React.Fragment>

                <div class=" jumbotron-fluid" >



                    <nav id="navbar-example" class="navbar flex-column fixed-top pt-1 .navbar-fixed-top navbar-expand-lg navbar-nav-scroll">
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
                        opacity: 0.85,
                    }} >
                        <h1 class="text-center centerMainText text-white">I'm Ajay Bhattnagar</h1>
                        <p class="text-center centerMainText text-white descText " >I currently work as a Quality Specialist for POWERsonic Industries. </p>
                        <p class="text-center centerMainText text-white descText">How did I get here? Keep reading</p>
                        <a href='https://www.linkedin.com/in/ajaybhattnagar/' target="_blank"> <img src="https://cdn3.iconfinder.com/data/icons/brands-applications/512/LinkedIN-512.png"
                            class='linkedinImage rounded mx-auto d-block img-fluid' alt="Logo"
                        /></a>


                    </div>


                        <div id="about" class='containerAbout text-white'>
                            <div class="container">
                                <div class="row">

                                    <div class="text-center">
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
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* ///        Study               */}
                        <div id="experience" class='container-fluid container justify-content-center flex-column testMargin'>
                            <div id="experience">
                                <div class="container">
                                    <div class="row">
                                        <p class='item'>Education</p>

                                        <div class='col'>
                                            {
                                                education && education.length > 0 ?

                                                    education.map((education, index) =>

                                                        <table class="table table-borderless">
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
                            </div>
                            <div class='divider' />
                        </div>

                        {/* ///        Study               */}




                        {/* ///        Work               */}
                        <div id="item-1-1" class='container-fluid container justify-content-center flex-column testMargin'>
                            <div id="experience">
                                <div class="container">
                                    <div class="row">
                                        <p class='item'>Experience</p>

                                        <div class='col'>
                                            {
                                                work && work.length > 0 ?

                                                    work.map((work, index) =>

                                                        <table class="table table-borderless">
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
                                                                            <ul>
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
                        <div id="item-1-1" class='container-fluid container justify-content-center flex-column testMargin'>
                            <div id="experience">
                                <div class="container">
                                    <div class="row">
                                        <p class='item'>Skills</p>

                                        <div class='col'>
                                            {
                                                skill && skill.length > 0 ?

                                                    skill.map((data, index) =>
                                                        <div class='row'>
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

                                            <div class="card mx-3 test" style={{ width: '20rem' }}>
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