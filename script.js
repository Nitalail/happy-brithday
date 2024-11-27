function goToBirthdayPopup() {
    // Sembunyikan halaman pengantar
    document.getElementById("welcomePage").style.display = "none";
    
    // Tampilkan popup ulang tahun
    document.getElementById("birthdayPopup").style.display = "flex";
    
    // Mainkan musik ulang tahun
    document.getElementById("birthdaySong").play();
    
    // Tambahkan balon
    generateBalloons();
  }
  
  function closePopup() {
    document.getElementById("birthdayPopup").style.display = "none";
    document.getElementById("birthdaySong").pause(); // Hentikan musik saat popup ditutup
  }
  
  function generateBalloons() {
    const balloonsContainer = document.getElementById("balloons");
    for (let i = 0; i < 15; i++) {
      const balloon = document.createElement("div");
      balloon.classList.add("balloons");
      balloon.style.left = `${Math.random() * 100}vw`;
      balloon.style.animationDuration = `${Math.random() * 2 + 3}s`; // variasi durasi animasi
      balloonsContainer.appendChild(balloon);
    }
  }
  