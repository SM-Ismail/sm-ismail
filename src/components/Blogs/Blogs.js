import React from 'react';
import BlogCard from './BlogCard';
import './BlogCard.css';

const Blogs = () => {
    const blogsInfo = [
        {
            sl: 1,
            title: '10 interesting and important JavaScript questions',
            tags: "#webdev #javascript #computerscience #career",
            link: "https://dev.to/smismail/10-interesting-and-important-javascript-questions-k2e"
        },
        {
            sl: 2,
            title: '10 basic concepts of React JS',
            tags: "#react #webdev #javascript #computerscience",
            link: "https://dev.to/smismail/10-basic-concepts-of-react-js-4hfh"
        },
        {
            sl: 3,
            title: 'Some basic concepts for web developers',
            tags: "#webdev #javascript #computerscience #career",
            link: "https://dev.to/smismail/some-coding-concepts-for-web-developers-3n2c"
        }
    ];
    return (
        <div>
            <h3 className="mt-3 heading">Welcome to my blog!</h3>
            {
                blogsInfo.map(info => <BlogCard key={info.sl} info={info}></BlogCard>)
            }
        </div>
    );
};

export default Blogs;