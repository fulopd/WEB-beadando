function openCloseNav() {
  var leftSideBar = getComputedStyle(sideBar);
  console.log("Alap: " + leftSideBar.display); 

  var x = document.getElementById("sideBar");    
    if (leftSideBar.display === "block") {
      x.style.display = "none";  
      console.log("Eltüntet: " + x.style.display);      
    } else {
      x.style.display = "block";
      console.log("Előhoz: " + x.style.display);      
    } 
    
  }

//  window.onresize = function(event) {
//     document.querySelector("#sideBar").removeAttribute('style');
//     console.log("visszaállítva minden css");   
// }