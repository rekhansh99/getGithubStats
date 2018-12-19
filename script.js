const url = "https://api.github.com/repos/EnterUsername/";//add usename here
var reponame = [];
var weekCommits = [];



var url1 = "https://api.github.com/users/EnterUsernameHere/repos";//add user name here
const xht = new XMLHttpRequest();
xht.onload = function () {
    if (xht.readyState === 4 && xht.status == "200") {
        let repos = JSON.parse(xht.responseText);
        var i = 0;
        var len = repos.length;
        for (; i < len; ) { 
        reponame[i] = repos[i].name;
        console.log(reponame[i]);
		 i++;} 
    } else{
        console.log("error");
    }
}
xht.open("GET", url1);
xht.send();

var j=0;
for(j=0;j<reponame.length;j++)
{
    var url2 = url + reponame[j] + "/stats/participation";
    console.log(url2);
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
    if (xhr.readyState === 4 && xhr.status == "200") {
        let commit = JSON.parse(xhr.responseText);
        var k = 0;
        var len = commit.owner.length;
        for (; k< len; ) { 
        weekCommits[k] += repos.owner[k];
        console.log(weekCommits[z])
        k++;} 
    } else{
        console.log("error");
    }
}
xhr.open("GET", url2);
xhr.send();
}
