const url = "https://api.github.com/repos/EnterUsername/";//add usename here
var reponame = [];
var weekCommits = [];



const url1 = "https://api.github.com/users/EnterUsernameHere/repos";//add user name here
const xht = new XMLHttpRequest();
xht.onload = function () {
    if (xht.readyState === 4 && xht.status == "200") {
        let repos = JSON.parse(xht.responseText);
        var len = repos.length;
        for (let i = 0; i < len; i++) {
            reponame[i] = repos[i].name;
            console.log(reponame[i]);
            const xhr = new XMLHttpRequest();
            const url2 = url + reponame[j] + "/stats/participation";
            xhr.onload = function () {
                if (xhr.readyState === 4 && xhr.status == "200") {
                    let commit = JSON.parse(xhr.responseText).owner;
                    var len = commit.length;
                    for (let k = 0; k < len; k++) { 
                        weekCommits[k] = repos.owner[k];
                    }
                } else{
                    console.log("error");
                }
            }
            xhr.open("GET", url2);
            xhr.send();
        }
    }
    else {
        console.log("error");
    }
}
xht.open("GET", url1);
xht.send();
