const page = ["/index.html", "/about-page.html", "/contact-page.html", "/blog-page.html", "/project-page.html", "archive-page.html", "/404-page.html", "/media-page.html"];
const navbar = document.getElementById("navigation");
const frame = document.getElementById("o-frame");


$(document).ready(function () {
    updateNavbar();

    var currentPage = document.location.pathname.split('/').pop();
    frame.onload = function () {
        postMessage('{method:"setVolume",value:0}', '*');
        console.log("iFrame (Oceans): Volume set to 0");
    };
    // if (currentPage === "project-page.html") {
    //     frame.onload = function () {
    //         postMessage('{method:"setVolume",value:0}', '*');
    //         console.log("iFrame (Oceans): Volume set to 0");
    //     }
    // }

});



function updateNavbar() {
    const navlinks = navbar.getElementsByTagName("a");
    for (let i = 0; i < navlinks.length; i++) {
        const item = navlinks[i];
        if (document.location.pathname === item.pathname) {
            item.classList.add('active');
            console.log(document.location.pathname);
        } else {
            item.classList.remove('active');
        }
    }
    console.log(document.location.pathname);
}


function playVideoIH() {
    const video = document.getElementById("IH_cycle");
    video.play();
    video.muted = true;
    video.loop = true;
    video.autoplay = true;
    video.controls = true;
    video.poster = false;
}


function nextClip() {
    const video = document.getElementById("IH_cycle");
    var sourceList = ['../images/IH_2.mp4', '../images/IH_3.mp4' , '../images/IH_4.mp4', '../images/IceAndFireDevScene.mp4'];
    console.log(video.src.split('/').pop());
    var currentSource = video.src.split('/').pop();
    if (currentSource === "IceAndFireDevScene.mp4") {
        video.src = sourceList[0];
        video.play();
    }
    if (currentSource === "IH_2.mp4") {
        video.src = sourceList[1];
        video.play();
    }
    if (currentSource === "IH_3.mp4") {
        video.src = sourceList[2];
        video.play();
    }
    if (currentSource === "IH_4.mp4") {
        video.src = sourceList[3];
        video.play();
    }

}


