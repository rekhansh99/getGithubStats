const url = "https://api.github.com/repos/Username/";//add username here
const reponame = [];
const week = [];

const url1 = "https://api.github.com/users/Username/repos" ; //To find names of all repos

fetch(url1)
.then(function(response){
    return response.json();
})
.then(function(data){   
    for(let x=0;x<data.length;x++){
       reponame[x] = data[x].name; 
       console.log(reponame[x]);
    }
}).then(function() {
    for(let x=0;x<reponame.length;x++) //to find weekly commits
    {
        const tempurl = url + reponame[x] +"/stats/participation";
        fetch(tempurl)
        .then(function(response){
             return response.json();
        })
        .then(function(data){
        const owns = data.owner;
        for(let y=0;y<owns.length;y++){
           week[y] = owns[y]; 
        }
        });
    }
});
