// form search
$(".fas").click(function(){
    $(".form-control").val("");
})

// login
let state = false;
$('.span').click(function(){
    if (state) {
        $('#defaultForm-pass').attr('type', 'password');
        state = false;
    } else {
        $('#defaultForm-pass').attr('type', 'text');
        state = true
    }
});

$('.log').click(function(){
    $('.validate').val('');
})

// table
$(".delete1").click(function(){
    $('#myTableRow1').remove();
})
$(".delete2").click(function(){
    $('#myTableRow2').remove();
})
$(".delete3").click(function(){
    $('#myTableRow3').remove();
})
$(".delete4").click(function(){
    $('#myTableRow4').remove();
})

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

function login() {
    let uname = document.getElementById("defaultForm-email");
    let pass = document.getElementById("defaultForm-pass");

    console.log("Username : " + uname.value);
    console.log("Password : " + pass.value);
    if (uname.value == "admin" && pass.value == "1234"){
        alert("Selamat Datang!")
    }else{
        alert("Usernam atau Password salah!")
    }
}