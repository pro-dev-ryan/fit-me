console.log("I'm working");

const dataContainer = document.querySelector("#fetchedData");
const formContainer = document.querySelector("#log-form")

const loadedData = ()=>{
    const url = "http://numbersapi.com/1/30/date?json"
    $.get(url, (data)=>{
        const div = document.createElement("div");
        div.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'h-100', 'flex-column')
        div.innerHTML = `
        <h2 class="text-lg-start text-center">General Knowledge Today</h2>
        <p class="dataText">${data.text}</p>
        <p class="dataText">Year : ${data.year}</p>
        `
        dataContainer.appendChild(div)
    })
}

 formContainer.addEventListener("submit", (e)=>{
    e.preventDefault();

    fetch('http://localhost:5000/users', {
        method: 'POST',
        body: new FormData(formContainer),
      }).then(res=>{
        if(res.status === 200){
        alert("Member Added");
        $('#exampleModal').hide();
        $('.modal-backdrop').remove()
        formContainer.reset();
        }else{
       alert("Member Addition Fail");
      }
    })

})

// Anime-> logix

 $(document).ready(function(){
    loadedData();

    $('#advantages').waypoint(function(){
    $('.adTitle').addClass('animated rotateInUpLeft');

}, {offset: '150px'});
    $('#advantages').waypoint(function(){
    $('.adCard').addClass('animated fadeInLeft animated__delay-3s');

}, {offset: '250px'});
$('#membership').waypoint(function(){
    $('#membership').addClass('animated fadeInRight');

}, {offset: '200px'})
$('#about').waypoint(function(){
    $('.leftSide').addClass('animated rotateInDownLeft');
    $('.rightSide').addClass('animated rotateInDownRight animate__delay-4s');

}, {offset: '250px'})
$('#trainers').waypoint(function(){
    $('#trainers').addClass('animated slideInUp');

}, {offset: '100px'})
 })