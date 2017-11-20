var show_opdracht = document.getElementById("show_opdracht");
var t = document.getElementById("t");
var ct = document.getElementById("ct");
var opdrachtsubmit = document.getElementById("opdrachtsubmit");

t.addEventListener("click", function(){
nieuweOpdracht("t");
});
ct.addEventListener("click", function(){
nieuweOpdracht("ct");
});
document.body.style.backgroundImage = "url('https://cdn.vox-cdn.com/thumbor/9tcFMUrm9UUZjD7MAoDfi0-kUFs=/0x0:1280x720/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/49940385/csgo.0.jpg')";

console.log(opdrachtenVoorct.length);
function nieuweOpdracht(team) {

if (team == "ct") {
  var x = Math.floor((Math.random() * opdrachtenVoorct.length));
  document.body.style.backgroundImage = "url('https://vignette.wikia.nocookie.net/cswikia/images/c/c1/Csgo_chooseteam_CT_full.png/revision/latest?cb=20151203222257')";
  show_opdracht.innerHTML = opdrachtenVoorct[x];
} else if (team == "t") {
  var x = Math.floor((Math.random() * opdrachtenVoort.length) );
  document.body.style.backgroundImage = "url('http://vignette2.wikia.nocookie.net/cswikia/images/4/41/Csgo_chooseteam_Terror_full.png/revision/latest?cb=20151203222257')";
  show_opdracht.innerHTML = opdrachtenVoort[x];
} else {
  show_opdracht.innerHTML = "Er is geen geldig team geselecteerd";
}

}

opdrachtsubmit.addEventListener("click", function(){
  var opdrachtform = document.getElementById("opdrachtform");
  let opdrachtSelect = document.getElementById("opdrachtSelect").value;

  if (opdrachtSelect == "ct") {

opdrachtenVoorct.push(opdrachtform.value);

  } else if (opdrachtSelect == "t") {

opdrachtenVoort.push(opdrachtform.value);

  }

  opdrachtform.value = "";

});
