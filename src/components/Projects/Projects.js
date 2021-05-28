import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import traveltheworld from '../../pics/traveltheworld.PNG';
import booksworld from '../../pics/booksworld.PNG';

const Projects = () => {
    const projectsInfo = [
        {
            sl: 1,
            title: "website for 'travelTheWorld.com'",
            texts: "The website is made for the famous travel agency 'travelTheWorld.com' with all of their services, reviews, blogs/stories",
            pts: ["React.js", "Node.js", "MongoDB database", "Firebase authentication", "react-hook", "Payment Gateway", "Heroku"], 
            imageURL: `${traveltheworld}`,
            liveLink: "https://traavel-the-world.web.app/"
            
        },
        {
            sl: 2,
            title: "website for 'Books World'",
            texts: "The website is made for the famous book shop 'Books World' with all of their ervices, reviews, blogs/stories",
            pts: ["React.js", "Node.js", "MongoDB database", "Firebase authentication", "react-hook", "Heroku"], 
            imageURL: `${booksworld}`,
            liveLink: "https://books-world-9c3a5.web.app/"
        }

    ]
    return (
        <div>
            {
                projectsInfo.map(projInfo => <ProjectCard key={projInfo.sl} project={projInfo}></ProjectCard>) 
            }
        </div>
    );
}
export default Projects;