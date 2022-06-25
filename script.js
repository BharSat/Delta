function getParentFolder(url) {
    if ( !url ) url = window.location.href;
        let ind = url.lastIndexOf("/");
        let new_url = url.slice(0, ind)
        return new_url
}

register_page = function () {
    window.location.href = getParentFolder() + "/register.html";
}
home_page = function () {
    window.location.href = getParentFolder() + "/index.html";
}
sec = function (loc) {
    window.location.href = getParentFolder() + "/index.html#" + loc
}
rules_page = function () {
    window.location.href = getParentFolder() + "/rules.html"
}

resize = function () {
    let height = 700;
    let width = 1400;
    document.getElementById("details").style.width = Math.round(document.getElementById("details").getBoundingClientRect().width*(1.5-(window.innerWidth/width))) + "px"
    document.getElementById("details").style.height = Math.round(document.getElementById("details").getBoundingClientRect().height*(window.innerHeight/height)) + "px"
    console.log((1.5+(window.innerWidth/width)) + "px")
}
