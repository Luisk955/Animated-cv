window.addEventListener(`load`, init, false);



function init() {
    var requestId;


    function update() {
        requestId = requestAnimationFrame(update);
    }
    update();



    //Containers
    var startSection = document.getElementById(`startSection`);
    var aboutMeSection = document.getElementById(`aboutMeSection`);



    headerStart(startSection);


    //Navbar events
    let home = document.getElementById(`home`);
    let aboutMe = document.getElementById(`aboutMe`);
    home.addEventListener(`click`, headerStart);
    aboutMe.addEventListener(`click`, aboutMeStart);

    function headerStart(startSection) {
        hideContainer(aboutMeSection);
        showContainer(startSection, `flex`);
        let headerRect = document.getElementById(`headerRect`),
            name = document.getElementById(`name`),
            prof = document.getElementById(`prof`);


        //header rectangle
        let headerRectOptions = {
            x: -1500,
            ease: Elastic.easeInOut
        };
        TweenMax.from(headerRect, 2.5, headerRectOptions);

        //name
        let nameOptions = {
            scale: 0,
            transformOrigin: `center`,
            delay: 2,
            ease: Elastic.easeOut
        };
        TweenMax.from(name, 4, nameOptions);

        //prof
        let profOptions = {
            scale: 0,
            transformOrigin: `center`,
            delay: 2.5,
            ease: Elastic.easeOut
        };
        TweenMax.from(prof, 4, profOptions);
        // setTimeout(() => {
        //     hideContainer(startSection);
        // }, 6000);
    }

    function aboutMeStart() {
        hideContainer(startSection);
        showContainer(aboutMeSection, `flex`);


        let aboutMeText1 = document.getElementById(`aboutMeText1`),
            aboutMeText2 = document.getElementById(`aboutMeText2`),
            svgCircle = document.getElementById(`svgCircle`),
            aboutMeTitle = document.getElementById(`aboutMeTitle`);

        //aboutMeTitle
        let aboutMeTitleOptions = {
            scale: 0,
            transformOrigin: `center`,
            delay: 0.5,
            ease: Elastic.easeOut
        };
        TweenMax.from(aboutMeTitle, 4, aboutMeTitleOptions);

        //aboutMeText1
        let aboutMeText1Options = {
            x: 800,
            delay: 1,
            ease: Elastic.easeInOut
        };
        TweenMax.from(aboutMeText1, 2, aboutMeText1Options);

        //aboutMeText2
        let aboutMeText2Options = {
            x: 800,
            delay: 2,
            ease: Elastic.easeInOut
        };
        TweenMax.from(aboutMeText2, 2, aboutMeText2Options);

        //svgCircle
        let svgCircleOptions = {
            x: -800,
            delay: 2,
            ease: Elastic.easeInOut
        };
        TweenMax.from(svgCircle, 2, svgCircleOptions);
    }



    function hideContainer(pContainer) {
        pContainer.style.display = `none`;
    }

    function showContainer(pContainer, pDisplay) {
        pContainer.style.display = pDisplay;
    }

}