import React from 'react';
import './BlogCard.css'; 

const BlogCard = (props) => {
    const {title, tags, link} = props.info;
    return (
        <div>
            <div class="card m-5">
                <h5 class="card-header tags">{tags}</h5>
                <div class="card-body">
                    <h5 class="card-title title">{title}</h5>
                    <a target="_blank" href= {link} class="btn btn-light btn-lg button mt-4" rel="noreferrer">Read the full article</a>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;