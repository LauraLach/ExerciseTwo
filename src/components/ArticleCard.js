import React from "react";

function ArticleCard({date, imageAlt, imageSrc, text, title}) {
    return (
        <div className="articleCard">
            <div className="articleCard--image">
                <img src={imageSrc} alt={imageAlt} />
            </div>
            <div className="articleCard--text">
                <h2>{title}</h2>
                <p className="date">{date}</p>
                <p className="loremIpsum">{text}</p>
                <p className="link">
                    <a href="">Link</a>
                </p>
            </div>
        </div>
    );
}

export default ArticleCard;