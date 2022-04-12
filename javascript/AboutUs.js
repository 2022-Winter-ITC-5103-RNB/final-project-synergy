let url = "/assets/images/";

// Auto load page
window.onload = function () {
  showIcons();
};

//create object array for icons
let itemList = [
  {
    imgUrl: url + "chef.png",
    imgName: "Best Chef",
  },
  {
    imgUrl: url + "table.png",
    imgName: "30+ Tables",
  },
  {
    imgUrl: url + "clean-energy.png",
    imgName: "Clean Environment",
  },
];

function showIcons() {
  itemList.map((item, index) => {
    var img = document.getElementById("img-name");
    console.log("item", item.imgUrl);
    img.innerHTML += item.imgName;
  });
}

//header
var x = document.getElementById("myTopnav");
if (x.className === "navbar") {
  x.className += " responsive";
} else {
  x.className = "navbar";
  x.className -= " responsive";
}
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}
