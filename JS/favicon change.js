const image_here = document.getElementById('image_here');

  const kepek = ["../Képek/favicon/kukutyinfalva barna.ico","../Képek/favicon/kukutyinfalva kek.ico", "../Képek/favicon/kukutyinfalva lila.ico","../Képek/favicon/kukutyinfalva vilagos kek.ico"];
  let randomIndex =
    Math.floor(
      Math.random() * kepek.length
    );
  image_here.href = kepek[randomIndex];

  console.log(kepek[randomIndex])
