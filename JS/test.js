function changeImage() {
  const image = document.getElementById('image');
  const kepek = ["Képek/Képek/kukutyinfalva_barna.png","Képek/Képek/kukutyinfalva_kek.png", "Képek/Képek/kukutyinfalva_lila.png","Képek/Képek/kukutyinfalva_vilagoskek.png"];
  let randomIndex = Math.floor(Math.random() * kepek.length);
  image.src = kepek[randomIndex];
  console.log(kepek[randomIndex]);

  setInterval( function() {
    requestAnimationFrame(changeImage);
 }, 1500)
  
}

changeImage();
