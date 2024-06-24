var dropnav = document.getElementById("dropnav");
var icon = document.getElementById("options");

icon.addEventListener("click", () => {
  if (window.innerWidth <= 800) {
    dropnav.classList.toggle("active");
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 800) {
    dropnav.classList.remove("active");
  }
});

//scrolling nav bar
var nambut = document.getElementById("name");
nambut.addEventListener("click", () => {
    document.getElementById('header').scrollIntoView();
})
var totop = document.getElementById("totop");
totop.addEventListener("click", () => {
    document.getElementById('header').scrollIntoView();
})

var illbut = document.getElementsByClassName("illbut");
for(let i of illbut){
    i.onclick = function(){
        document.getElementById('illustrations').scrollIntoView();
    }
}
var crebut = document.getElementsByClassName("crebut");
for(let i of crebut){
    i.onclick = function(){
        document.getElementById('creative').scrollIntoView();
    }
}
var frabut = document.getElementsByClassName("frabut");
for(let i of frabut){
    i.onclick = function(){
        document.getElementById('frameworks').scrollIntoView();
    }
}
var combut = document.getElementsByClassName("combut");
for(let i of combut){
    i.onclick = function(){
        document.getElementById('commissions').scrollIntoView();
    }
}

//modal
var modal = document.getElementById("myModal");
var img = document.getElementsByClassName("works");
var modalImg = document.getElementById("imgprev");
var captionText = document.getElementById("caption");

for(let i of img){
    i.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}

var bgmodal = document.getElementsByClassName("modal")[0];

bgmodal.onclick = function() {
  modal.style.display = "none";
}