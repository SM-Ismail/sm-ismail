import React from 'react';
import './ProjectCard.css'
const ProjectCard = (props) => {
    const project = props.project;
    const {title, texts, pts, imageURL, details} = project;
    console.log(imageURL);
    const handleBtnDetails = () => {
        document.getElementById("points").style.display = 'block';
    }
    return (
        <div class="card m-5 box">
            <div class="row g-0">
                <div class="col-md-4">
                    <img className="img-fluid" src={imageURL} alt="..." />
                </div>
                    <div class="col-md-8">
                        <div class="card-body text-danger">
                            <h5 class="card-title">{title}</h5>
                            <p class="card-text">{texts}</p>
                            <button onClick={handleBtnDetails} type="button" className="btn btn-warning btn-lg button-text m-4"> 
                                Details
                            </button>
                            <div id="points" className="m-auto p-auto text-primary">
                                <h4>Technical Details</h4>
                                {details}
                                <ul>
                                    {
                                        pts.map(pt => <li className='text-start'>{pt}</li>)
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};
export default ProjectCard;