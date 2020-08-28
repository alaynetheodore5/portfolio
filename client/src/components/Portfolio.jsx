import React from 'react';

const Portfolio = props => {

    // var modal = document.getElementById("myModal");

    // // Get the image and insert it inside the modal - use its "alt" text as a caption
    // var img = document.getElementById("port1");
    // var modalImg = document.getElementById("img01");
    // var captionText = document.getElementById("caption");
    // img.onClick = function(){
    // modal.style.display = "block";
    // modalImg.src = this.src;
    // captionText.innerHTML = this.alt;
    // }

    // // Get the <span> element that closes the modal
    // var span = document.getElementsByClassNameclassNameName("close")[0];

    // // When the user clicks on <span> (x), close the modal
    // span.onclick = function() { 
    // modal.style.display = "none";
    // }
    
    return (
        <div id="portfolio" className="portfolio">
            <div className="container">
                <div className="section-title">
                    <h2>My Portfolio</h2>
                    {/* <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p> */}
                </div>
            </div>
            <div>
                <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                    <div className="portyconbc mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden" style={{backgroundColor:"#B7B7A4"}}>
                        <div className="my-3 py-3">
                        <h2 className="display-5">TheBookClub</h2>
                        <p className="lead">C#/.Net, MVC, CSS/HTML/Bootstrap</p>
                        </div>
                        <a href="https://github.com/alaynetheodore5/TheBookClub">
                            <div className="bg-light shadow-sm mx-auto" id="portybc"></div>
                        </a>
                    </div>
                    <div className="mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden" style={{backgroundColor:"#FFF1E6"}}>
                        <div className="my-3 p-3">
                        <h2 className="display-5">Kimagotchi</h2>
                        <p className="lead">ReactJS SPA</p>
                        </div>
                        <a href="https://github.com/alaynetheodore5/kimagotchi">
                            <div className="bg-dark shadow-sm mx-auto" id="portykk"></div>
                        </a>
                    </div>
                </div>
                <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                    <div className="portyconbc mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden" style={{backgroundColor:"#DDBEA9"}}>
                        <div className="my-3 py-3">
                        <h2 className="display-5">Team Manager</h2>
                        <p className="lead">JavaScript, MongoDB/ExpressJS/ReactJS/NodeJS</p>
                        </div>
                        <a href="https://github.com/alaynetheodore5/team_manager">
                            <div className="bg-light shadow-sm mx-auto" id="portytm"></div>
                        </a>
                    </div>
                    <div className="mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden" style={{backgroundColor:"#F0EFEB"}}>
                        <div className="my-3 p-3">
                        <h2 className="display-5">TheTraveler</h2>
                        <p className="lead">Java 8, Spring, SQL, Maven</p>
                        </div>
                        <a href="https://github.com/alaynetheodore5/vacation-planner">
                            <div className="bg-dark shadow-sm mx-auto" id="portytt"></div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
