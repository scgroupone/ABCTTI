let togglebtn = document.getElementsByClassName('toggler')[0]
let navbar = document.querySelector('.navbar')


let links = document.getElementsByClassName('navbarlinks')[0]
togglebtn.addEventListener('click',()=>{
    links.classList.toggle('active')
    navbar.classList.toggle('active')

})
window.addEventListener('DOMContentLoaded',()=>{
    let xhr = new XMLHttpRequest();
    xhr.open('GET','https://github.com/scgroupone/ABCTTI/blob/main/data/data.json',true);
    xhr.send();
    xhr.onload = ()=>{
        let display = (courses)=>{
            for(let course of courses){
                template += ` <div class="course">
                <ul>
                <li><strong>Course:</strong> ${course.name}</li>
                <li><strong>Description:</strong> ${course.description}</li>
                <li><strong>Duration:</strong> ${course.duration}</li>
                <li><strong>Level:</strong> ${course.level}</li>
            </ul></div>`
            }
            document.querySelector('.course-display').innerHTML=template

        }
        let template ='';
        if(xhr.status===200){
            let data = xhr.responseText;
            let courses = JSON.parse(data)
            console.log(courses);
            display(courses)
          
        };
        
    };
});
