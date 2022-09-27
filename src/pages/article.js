import React from "react";

function Article() {
    const backgroundImage = "url('https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000')";
    return (
        <main className="articleMain">
            <header className="articleHeader" style={{backgroundImage}}>
                <div class="articleHeaderContent">
                    <h1>Article Title</h1>
                    <p>Date</p>
                    <p>Note that this is the article blurb. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </header>
            <section className="articleTextSection">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempus sed erat eu posuere. Etiam faucibus justo quis tempus finibus. Sed vitae nibh sed nunc cursus congue. Sed non sollicitudin purus, quis pulvinar augue. Donec condimentum leo nec nisl tempor imperdiet vitae sed dolor. Nullam eget mi est. Integer velit augue, posuere quis turpis non, efficitur tincidunt ligula. Curabitur congue aliquet sapien, vel pharetra felis vulputate a. Quisque cursus, nibh nec egestas porttitor, leo libero ultricies enim, ut mattis massa diam vel orci. Fusce semper mauris quis massa dapibus laoreet.</p>
                <h2>Header Two Inserted</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempus sed erat eu posuere. Etiam faucibus justo quis tempus finibus. Sed vitae nibh sed nunc cursus congue. Sed non sollicitudin purus, quis pulvinar augue. Donec condimentum leo nec nisl tempor imperdiet vitae sed dolor. Nullam eget mi est. Integer velit augue, posuere quis turpis non, efficitur tincidunt ligula. Curabitur congue aliquet sapien, vel pharetra felis vulputate a. Quisque cursus, nibh nec egestas porttitor, leo libero ultricies enim, ut mattis massa diam vel orci. Fusce semper mauris quis massa dapibus laoreet.</p>
                <h3>Header Three Inserted</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempus sed erat eu posuere. Etiam faucibus justo quis tempus finibus. Sed vitae nibh sed nunc cursus congue. Sed non sollicitudin purus, quis pulvinar augue. Donec condimentum leo nec nisl tempor imperdiet vitae sed dolor. Nullam eget mi est. Integer velit augue, posuere quis turpis non, efficitur tincidunt ligula. Curabitur congue aliquet sapien, vel pharetra felis vulputate a. Quisque cursus, nibh nec egestas porttitor, leo libero ultricies enim, ut mattis massa diam vel orci. Fusce semper mauris quis massa dapibus laoreet.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempus sed erat eu posuere. Etiam faucibus justo quis tempus finibus. Sed vitae nibh sed nunc cursus congue. Sed non sollicitudin purus, quis pulvinar augue. Donec condimentum leo nec nisl tempor imperdiet vitae sed dolor. Nullam eget mi est. Integer velit augue, posuere quis turpis non, efficitur tincidunt ligula. Curabitur congue aliquet sapien, vel pharetra felis vulputate a. Quisque cursus, nibh nec egestas porttitor, leo libero ultricies enim, ut mattis massa diam vel orci. Fusce semper mauris quis massa dapibus laoreet.</p>
            </section>
        </main>
    );
}

export default Article;