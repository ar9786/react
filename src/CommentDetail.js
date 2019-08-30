import React from 'react';



const CommentDetail = (props) => {
    return (
        <div className="comment">
                <a href="/" alt="avtar" className="avatar"><img src={props.image} alt="avtar"/></a>
            <div className="content">
                <a href="/" alt="avtar" className="author">{props.author}</a>
            </div>
            <div className="metadata">
                <span className="date">{props.timeAgo}</span> 
            </div>
            <div className="text">
                {props.content}
            </div>
        </div>
    );
}
export default CommentDetail;