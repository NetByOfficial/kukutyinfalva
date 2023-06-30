const image_here = document.getElementById('image_here');

  const kepek = ["../Képek/favicon/kukutyinfalva barna.png","../Képek/favicon/kukutyinfalva kék.png", "../Képek/favicon/kukutyinfalva lila.png","../Képek/favicon/kukutyinfalva világos kék.png"];
  let randomIndex =
    Math.floor(
      Math.random() * kepek.length
    );
  image_here.href = kepek[randomIndex];

  console.log(kepek[randomIndex])
