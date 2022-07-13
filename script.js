
let hamburger = document.getElementById('hamburger');
let sidenav = document.getElementById('sidenav');

sidenav.style.right = '-250px';
hamburger.onclick = function(){
  if(sidenav.style.right == '-250px'){
    sidenav.style.right = '0px';
  }
  else{
    sidenav.style.right = '-250px';
  }
}