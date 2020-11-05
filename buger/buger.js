// const HoverEffect = document.getElementById("DropDown");
// const ClassBar = document.querySelector(".Bar");
// console.log(HoverEffect);
// HoverEffect.style.hover= ClassBar;
// function showModal() { alert("yippr") }
// const HoverEffect = document.getElementsByClassName(".fa");
// const Bar = document.getElementsByClassName("sub-menu");
// console.log(HoverEffect);
function SubMenu(){
  var expandableNavBar = document.getElementById("sub-menu");
  let status ="";
   if (expandableNavBar.style.display === "none" || !expandableNavBar.style.display){ status = "block"}
  else status = "none"
//   console.log(status)
//   console.log(expandableNavBar.style.display)
  expandableNavBar.style.display =status;
}
