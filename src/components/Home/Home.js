import React from 'react';
import './Home.css';
import books_behind from '../../pics/books_behind.jpg';
import { useHistory } from 'react-router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import AboutMe from '../AboutMe/AboutMe';
library.add(fab, faGithub, faLinkedin);


const Home = () => {
    let history = useHistory();
    const handleBtnMyResume = () => {
    };

    const handleBtnMyProjects = () => {
        history.push("/projects");
    };

    const handleBtnMessage = () => {
        history.push("/contact-me")
    };

    return (
        <div className='home'>
            <div class="container py-4">
                <div class="row">
                    <div class="col-sm col-md-7">
                        <h1 className="texts text-end">Hello there !
                        <br />
                        I'm <span className="fs-1 fw-bold">Sayem Mohammad Ismail</span></h1>
                        <h1 className="texts text-end">A Full Stack Web Developer from
                        <br />
                        Dhaka, Bangladesh
                        </h1>

                        <div className="d-flex justify-content-end">
                            <button onClick={handleBtnMyResume} type="button" className="btn btn-light btn-lg shadowing m-4">
                                <a target="_blank" className="p-4 anchors1 texts res-prj" href="https://drive.google.com/file/d/1v7xVhFsfTw8XpN7zxXOYSZ3nni_ZBLGO/view?usp=sharing" rel="noreferrer">
                                    My Resume
                                </a>
                            </button>
                            <button onClick={handleBtnMyProjects} type="button" className="btn btn-light btn-lg button-text shadowing m-4 res-prj">
                                My Projects
                            </button>
                        </div>

                        <div className="d-flex justify-content-end my-2">
                            <div>
                                <a target="_blank" className="p-4 anchors" href="https://github.com/SM-Ismail" rel="noreferrer">  <FontAwesomeIcon icon={faGithub} size="2x" /> GitHub</a>
                            </div>
                            <div>
                                <a target="_blank" className="p-4 anchors" href="https://www.linkedin.com/in/sayem-mohammad-ismail-7135a8130/" rel="noreferrer"> <FontAwesomeIcon icon={faLinkedin} size="2x" /> LinkedIn</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm col-md-5 px-5">
                        <img src={books_behind} class="img-thumbnail img-fluid pic" alt="..." />
                    </div>
                </div>

            </div>
            <div>
                <AboutMe />
            </div>
            <div>
                <h3 className="sizing texts fw-bold">Do you wanna work with me? Please reach out .... </h3>
                <div>
                    <button onClick={handleBtnMessage} type="button" className="btn btn-light btn-lg button-text shadowing res-prj m-4">
                        Drop a message . . .
                    </button>
                </div>
            </div>
        </div>
    )
};
export default Home;