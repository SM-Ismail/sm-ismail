import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import traveltheworld from '../../pics/traveltheworld.PNG';
import booksworld from '../../pics/booksworld.PNG';

const Projects = () => {
    const projectsInfo = [
        {
            sl: 1,
            title: "website for 'travelTheWorld.com'",
            texts: "The website is made for the famous travel agency 'travelTheWorld.com'. All their Services, reviews, blogs/stories are organized as per client demand.",
            details: "The website is made with react.js for client side and node.js for server side. The server is using MongoDB database. Authentication system is in place. As well as the Payment Gateway system is installed. User/customer can have a smooth service purchase experience. Futhermore, users/customers are very easily able to leave their reviews and share their memorable stories from the tour as well through form.",
            pts: ["React.js for client side", "Node.js for server side", "MongoDB database for server implementation", "Firebase authentication with google sign up", "react-hook form use", "Payment Gateway implemented with stripe", "server side Heroku hosting"], 
            imageURL: `${traveltheworld}`
        },
        {
            sl: 2,
            title: "website for 'Books World'",
            texts: "The website is made for the famous book shop 'Books World'. All their Services, reviews, blogs/stories are organized as per client demand.",
            details: "The website is made with react.js for client side and node.js for server side. The server is using MongoDB database. Authentication system is in place.  User/customer can have a smooth service purchase experience.",
            pts: ["React.js for client side", "Node.js for server side", "MongoDB database for server implementation", "Firebase authentication with google sign up", "react-hook form use", "server side Heroku hosting"], 
            imageURL: `${booksworld}`
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