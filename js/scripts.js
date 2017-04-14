/*
Hero arrays. Groups heroes by category.
*/
var defense = ["Bastion", "Hanzo", "Junkrat", "Mei", "Torbjorn", "Widowmaker"];
var offense = ["Genji", "Tracer", "Soldier_76", "Reaper", "Sombra", "Pharah", "McCree"];
var tank = ["D.Va", "Orisa", "Reinhardt", "Roadhog", "Winston", "Zarya"];
var support = ["Ana", "Lucio", "Mercy", "Symmetra", "Zenyatta"];

/*
Array of hero image names.
*/
var heroImages = new Array(24);
heroImages[0] = "Spray_Ana_Pixel.png";
heroImages[1] = "Spray_Bastion_Pixel.png";
heroImages[2] = "Spray_D.Va_Pixel.png";
heroImages[3] = "Spray_Genji_Pixel.png";
heroImages[4] = "Spray_Hanzo_Pixel.png";
heroImages[5] = "Spray_Junkrat_Pixel.png";
heroImages[6] = "Spray_Lucio_Pixel.png";
heroImages[7] = "Spray_McCree_Pixel.png";
heroImages[8] = "Spray_Mei_Pixel.png";
heroImages[9] = "Spray_Mercy_Pixel.png";
heroImages[10] = "Spray_Orisa_Pixel.png";
heroImages[11] = "Spray_Pharah_Pixel.png";
heroImages[12] = "Spray_Reaper_Pixel.png";
heroImages[13] = "Spray_Reinhardt_Pixel.png";
heroImages[14] = "Spray_Roadhog_Pixel.png";
heroImages[15] = "Spray_Soldier_76_Pixel.png";
heroImages[16] = "Spray_Sombra_Pixel.png";
heroImages[17] = "Spray_Symmetra_Pixel.png";
heroImages[18] = "Spray_Torbjorn_Pixel.png";
heroImages[19] = "Spray_Tracer_Pixel.png";
heroImages[20] = "Spray_Widowmaker_Pixel.png";
heroImages[21] = "Spray_Winston_Pixel.png";
heroImages[22] = "Spray_Zarya_Pixel.png";
heroImages[23] = "Spray_Zenyatta_Pixel.png";




var allChars = defense.concat(offense.concat(tank.concat(support)));

var selectedArrays;



function getRandomInt(input_num) {
  console.log("Called" + input_num);
  return Math.floor((Math.random() * input_num));
}

function joinArrays() {

}


function createImgString(charString) {
  var imgString = "images/Spray_" + charString + "_Pixel.png";
  return imgString;
}

function getCharacter(charArray) {

  var num = getRandomInt(allChars.length);
  console.log(num);
  //document.getElementById("herogoeshere").innerHTML = "<h2>"+charArray[num]+"</h2>";
  console.log(createImgString(charArray[num]));
  drawCharacter(createImgString(charArray[num]));
  console.log(charArray[num]);

}

function drawCharacter(imgString) {
  console.log("calling drawCharacter");
  console.log(document.getElementById("heroImg").src);
  document.getElementById("heroImg").src = imgString;
}
