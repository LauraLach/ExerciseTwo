import React, { useMemo } from "react";
import { useParams } from "react-router";
import Data from '../components/data';

function Article() {
    const { id } = useParams();

    const articleData = Data.find((article) => (article.id === id));
 
    const date = useMemo(() => {
        if(!articleData) return '';
        const parsedDate = new Date(articleData.publishedDate);
        return parsedDate.toDateString();}, 
        [articleData]);


    return (
        <main className="articleMain">
            <header className="articleHeader" style={{
                backgroundImage: `url('${articleData.image.url}')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
                }}>
                <div class="articleHeaderContent">
                    <h1>{articleData.title}</h1>
                    <p>{date}</p>
                    <p class="articleDesc">Note that this is the article blurb. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </header>
            <section className="articleTextSection">
                {articleData.articleText.map((text, i) => {
                    const type = text.type;
                    switch (type) {
                        case "p":
                            return <p key={i}>{text.data}</p>;
                        case "h1":
                            return <h1 key={i}>{text.data}</h1>;
                        case "h2":
                            return <h2 key={i}>{text.data}</h2>; 
                        case "h3":
                            return <h3 key={i}>{text.data}</h3>;   
                        case "h4":
                            return <h4 key={i}>{text.data}</h4>;
                        default:
                            return <p key={i}>{text.data}</p>;
                    }})}
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempus sed erat eu posuere. Etiam faucibus justo quis tempus finibus. Sed vitae nibh sed nunc cursus congue. Sed non sollicitudin purus, quis pulvinar augue. Donec condimentum leo nec nisl tempor imperdiet vitae sed dolor. Nullam eget mi est. Integer velit augue, posuere quis turpis non, efficitur tincidunt ligula. Curabitur congue aliquet sapien, vel pharetra felis vulputate a. Quisque cursus, nibh nec egestas porttitor, leo libero ultricies enim, ut mattis massa diam vel orci. Fusce semper mauris quis massa dapibus laoreet.</p>
                <h2>Header Two Inserted</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempus sed erat eu posuere. Etiam faucibus justo quis tempus finibus. Sed vitae nibh sed nunc cursus congue. Sed non sollicitudin purus, quis pulvinar augue. Donec condimentum leo nec nisl tempor imperdiet vitae sed dolor. Nullam eget mi est. Integer velit augue, posuere quis turpis non, efficitur tincidunt ligula. Curabitur congue aliquet sapien, vel pharetra felis vulputate a. Quisque cursus, nibh nec egestas porttitor, leo libero ultricies enim, ut mattis massa diam vel orci. Fusce semper mauris quis massa dapibus laoreet.</p>
                <h3>Header Three Inserted</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempus sed erat eu posuere. Etiam faucibus justo quis tempus finibus. Sed vitae nibh sed nunc cursus congue. Sed non sollicitudin purus, quis pulvinar augue. Donec condimentum leo nec nisl tempor imperdiet vitae sed dolor. Nullam eget mi est. Integer velit augue, posuere quis turpis non, efficitur tincidunt ligula. Curabitur congue aliquet sapien, vel pharetra felis vulputate a. Quisque cursus, nibh nec egestas porttitor, leo libero ultricies enim, ut mattis massa diam vel orci. Fusce semper mauris quis massa dapibus laoreet.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempus sed erat eu posuere. Etiam faucibus justo quis tempus finibus. Sed vitae nibh sed nunc cursus congue. Sed non sollicitudin purus, quis pulvinar augue. Donec condimentum leo nec nisl tempor imperdiet vitae sed dolor. Nullam eget mi est. Integer velit augue, posuere quis turpis non, efficitur tincidunt ligula. Curabitur congue aliquet sapien, vel pharetra felis vulputate a. Quisque cursus, nibh nec egestas porttitor, leo libero ultricies enim, ut mattis massa diam vel orci. Fusce semper mauris quis massa dapibus laoreet.</p> */}
            </section>
        </main>
    );
}

export default Article;