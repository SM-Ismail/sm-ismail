import React from 'react';
import './ProjectCard.css'
const ProjectCard = (props) => {
    const project = props.project;
    const {title, texts, pts, imageURL, details, liveLink} = project;
    console.log(imageURL);
    // const handleBtnDetails = () => {
    //     document.getElementById("points").style.display = 'block';
    // }
    return (
        <div class="card m-4 box">
            <div class="row g-0">
                <div class="col-md-4">
                    <img className="img-fluid" src={imageURL} alt="..." />
                </div>
                    <div class="col-md-8">
                        <div class="card-body text">
                            <h4 class="card-title">{title}</h4>
                            <p class="card-text">{texts}</p>
                            {/* <button onClick={handleBtnDetails} type="button" className="btn btn-light btn-lg text m-4"> 
                                Details
                            </button> */}
                            <div id="points" className="m-auto p-auto text">
                                {details}
                                <div className="row">
                                    {
                                        pts.map(pt => <h4 className = "col-sm col-md-4 p-1"><span class="badge bg-secondary">{pt}</span></h4>)
                                    }
                                </div>
                            </div>
                            <div className="d-grid">
                                <button type="button" className="btn btn-light btn-lg m-4 button">  
                                    <a target="_blank" className="p-4 anchors text font" href={liveLink} rel="noreferrer">
                                        Visit the site . .
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};
export default ProjectCard;