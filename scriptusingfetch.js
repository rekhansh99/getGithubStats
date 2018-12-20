const url = "https://api.github.com/repos/Username/";//add username here
var reponame = [];
var week = [];

var url1 = "https://api.github.com/users/Username/repos" ; //To find names of all repos

fetch(url1)
.then(function(response){
    return response.json();
})
.then(function(data){
    
    for(let x=0;x<data.length;x++){
       reponame[x] = data[x].name; 
       console.log(reponame[x]);
    }
});

for(let x=0;x<reponame.length;x++) //to find weekly commits
{
    var tempurl = url + reponame[x] +"/stats/participation";
    fetch(tempurl)
    .then(function(response){
         return response.json();
    })
    .then(function(data){
    var owns = data.owner;
    for(let x=0;x<owns.length;x++){
       week[x] += owns[x]; 
    }
    });
}
