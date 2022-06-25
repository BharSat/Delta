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

