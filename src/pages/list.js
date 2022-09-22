import React from "react";
import ArticleCard from "../components/ArticleCard";

function List() {
    return (
        <main className="pageWrapper">
            <h1>Articles</h1>
            <ArticleCard 
            date=""
            imageAlt="altText" 
            imageSrc="imgSrc"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            title="Article Title"
            />
            <ArticleCard 
            date=""
            imageAlt="altText" 
            imageSrc="imgSrc"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            title="Article Title"
            />
            <ArticleCard 
            date=""
            imageAlt="altText" 
            imageSrc="imgSrc"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            title="Article Title"
            />
        </main>
    );
}

export default List;