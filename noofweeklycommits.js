const url1 = "https://api.github.com/repos/dikshantj/todo-list/stats/participation";//add user name here
const xht = new XMLHttpRequest();
xht.onload = function () {
    if (xht.readyState === 4 && xht.status == "200") {
        let repos = JSON.parse(xht.responseText);
        console.log(repos);
    } else{
        console.log("error");
    }
}
xht.open("GET", url1);
xht.send();

