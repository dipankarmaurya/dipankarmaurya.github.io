fetch('https://codingninjas.in/api/v3/courses')
.then(res=>res.json())
    .then(info => {
        let courses = info.data.courses;
       
        for (let i = 0; i < courses.length; i++){
            let url = courses[i].classroom_icon_url;
            let title = courses[i].name;
            let level = courses[i].level;
            let table = document.querySelector('table');
            let tableRow = document.createElement('tr');
            tableRow.innerHTML = '<td>' + title + '</td>' + '<td>' + level + '</td>' + '<td>' + "<img src='" + url + "' class='image'>" + '</td>';
            table.appendChild(tableRow);
        }
})