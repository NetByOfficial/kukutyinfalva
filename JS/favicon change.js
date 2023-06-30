const image_here = document.getElementById('image_here');

  const kepek = ["Képek/favicon/kukutyinfalva_barna.ico","Képek/favicon/kukutyinfalva_kek.ico", "Képek/favicon/kukutyinfalva_lila.ico","Képek/favicon/kukutyinfalva_vilagoskek.ico"];
  let randomIndex =
    Math.floor(
      Math.random() * kepek.length
    );
  image_here.href = kepek[randomIndex];

  console.log(kepek[randomIndex])
