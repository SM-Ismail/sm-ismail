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
            {/* <h5 className="text-start px-3 fs-4" style={{ color: "tomato" }}>About Me</h5> */}
            <div class="row p-5">
                <div class="col-sm col-md-6 px-5">
                    <img src={meInani} class="rounded img-fluid pic" alt="..." />
                </div>
                <div class="col-sm col-md-6 px-5">
                    <h4 className='texts fs-3'>I design and build websites with a great user experience. FullStack is my thing! So I've got both your "front end" and "back end" tasks handled.</h4>
                    <div className = "mt-4">
                        <h3>My Tools</h3>
                    </div>
                    <div className="row mt-3">
                        <h2 className="col-sm col-md-4 p-2"><span class="badge bg-secondary">HTML5</span></h2>
                        <h2 className="col-sm col-md-4 p-2"><span class="badge bg-secondary">CSS3</span></h2>
                        <h2 className="col-sm col-md-4 p-2"><span class="badge bg-secondary">JavaScript</span></h2>
                        <h2 className="col-sm col-md-4 p-2"><span class="badge bg-secondary">ReactJS</span></h2>
                        <h2 className="col-sm col-md-4 p-2"><span class="badge bg-secondary">BootStrap</span></h2>
                        <h2 className="col-sm col-md-4 p-2"><span class="badge bg-secondary">Material UI</span></h2>
                        <h2 className="col-sm col-md-4 p-2"><span class="badge bg-secondary">NodeJS</span></h2>
                        <h2 className="col-sm col-md-4 p-2"><span class="badge bg-secondary">firebase</span></h2>
                        <h2 className="col-sm col-md-4 p-2"><span class="badge bg-secondary">MongoDB</span></h2>
                        <h2 className="col-sm col-md-4 p-2"><span class="badge bg-secondary">Heroku</span></h2>
                        <h2 className="col-sm col-md-4 p-2"><span class="badge bg-secondary">Nodemon</span></h2>
                        <h2 className="col-sm col-md-4 p-2"><span class="badge bg-secondary">Python</span></h2>
                    </div>
                    
                    <button onClick={handleBtnWorks} type="button" className="btn btn-light btn-lg texts sizing shadowing m-4"> 
                                Get to Know My Works
                    </button>
                </div>
            </div>
        </div>
    );
};
export default AboutMe;