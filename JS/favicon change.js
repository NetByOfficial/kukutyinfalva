  const image_here = document.getElementById('image_here');

    const kepek_ = ["Képek/favicon/kukutyinfalva_barna.ico","Képek/favicon/kukutyinfalva_kek.ico", "Képek/favicon/kukutyinfalva_lila.ico","Képek/favicon/kukutyinfalva_vilagoskek.ico"];
    let randomIndex =
      Math.floor(
        Math.random() * kepek_.length
      );
    image_here.href = kepek_[randomIndex];

    console.log(kepek_[randomIndex])
