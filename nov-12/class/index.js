let contentDiv = document.getElementById('content');
let url = "https://api.github.com/users"
 
fetch(url).then(response => {
    //signifying retrive of data
    return response.json();
}).then(data => {
    for (let i = 0; i < data.length;i++)
    {
        let img = document.createElement('img');
        img.src = data[i].avatar_url;
        contentDiv.appendChild(img);
    }
})




