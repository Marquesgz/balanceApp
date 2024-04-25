function toggleClockAndNavigate() {
    
    const clock = document.querySelector('.clock');
    if (clock) {
      clock.classList.toggle('off');
    }
    setTimeout(() => {
      window.location.href = "secondHome.html";
    }, 3000); 
  }