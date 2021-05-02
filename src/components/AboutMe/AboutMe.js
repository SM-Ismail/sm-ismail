import React from 'react';
import { useHistory } from 'react-router';
import meInani from '../../pics/me-inani.jpg';

const AboutMe = () => {
    let history = useHistory();
    const handleBtnWorks = () => {
        history.push("/projects");
    }
    return (
        <div>
            <h5 className="text-start px-3 fs-4" style={{ color: "tomato" }}>About Me</h5>
            <div class="row p-5">
                <div class="col-sm col-md-6 px-5">
                    <img src={meInani} class="rounded img-fluid pic" alt="..." />
                </div>
                <div class="col-sm col-md-6 px-5">
                    <h2 style={{ color: "tomato" }} >This is Sayem Mohammad Ismail</h2>
                    <h4 className="m-5 fs-3" style={{ color: "green" }}>I am a self-taught Full Stack Developer and programming is my passion! I really enjoy building applications especially the backend works.
                    </h4>
                    <button onClick={handleBtnWorks} type="button" className="btn btn-warning btn-lg button-text m-4"> 
                                Get to Know My Works
                    </button>
                </div>
            </div>
            <div>
                <h3 style={{ color: "tomato" }}>Tools I use for work !</h3>
                <div class="row p- fs-4">
                    <div class="col-sm col-md-6 px-5">
                        <h3 style={{ color: "tomato" }}>Front End Works</h3>
                        <div className="d-flex justify-content-center">
                            <ul className="text-success text-start m-3">
                                <li>HTML, CSS</li>
                                <li>JavaScript</li>
                                <li>React Js</li>
                                <li>BootStarp, Material UI</li>
                                <li>Firebase</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm col-md-6 px-5">
                        <h3 style={{ color: "tomato" }} >Back End Works</h3>
                        <div className="d-flex justify-content-center">
                            <ul className="text-success text-start m-3">
                                <li>Node Js</li>
                                <li>MongoDB</li>
                                <li>Nodemon</li>
                                <li>Express</li>
                                <li>Heroku</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AboutMe;