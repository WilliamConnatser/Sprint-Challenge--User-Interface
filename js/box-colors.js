window.onload = () => {
    const boxesDiv = document.querySelector(".boxes");

    const colors = [
        "teal",
        "gold",
        "cadetblue",
        "coral",
        "crimson",
        "forestgreen",
        "darkorchid",
        "hotpink",
        "indigo",
        "dodgerblue"
    ];

    //Each element in boxes div
    boxesDiv.childNodes.forEach(el => {

        //If its a box then change the background color
        if(el.className === "box") {
            el.style.background = colors.shift();
        }
    });
}