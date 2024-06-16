document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("fullscreenModal");
    const modalImg = document.getElementById("fullImage");
    const closeBtn = document.getElementsByClassName("close")[0];
  
    document.querySelectorAll(".gallery-item").forEach(item => {
      item.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = item.src;
        modalImg.alt = item.alt;
  
        // Perkecil gambar sesuai resolusi aslinya
        const maxWidth = window.innerWidth * 0.5; // Maksimum 90% lebar layar
        const maxHeight = window.innerHeight * 0.5; // Maksimum 90% tinggi layar
  
        // Reset ukuran modal content
        modalImg.style.maxWidth = maxWidth + "px";
        modalImg.style.maxHeight = maxHeight + "px";
      });
    });
  
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    modal.addEventListener("click", (e) => {
      if (e.target !== modalImg) {
        modal.style.display = "none";
      }
    });
  });
  