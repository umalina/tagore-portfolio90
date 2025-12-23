function openGallery(type) {
  const gallery = document.getElementById("gallery");
  const content = document.getElementById("gallery-content");

  content.innerHTML = "";

  if (type === "photo") {
    const photos = [
      "images/photo/p1.jpeg",
      "images/photo/p2.jpeg",

      "images/photo/p3.jpeg"
    ];

    photos.forEach(path => {
      const img = document.createElement("img");
      img.src = path;
      img.className = "gallery-img";
      content.appendChild(img);
    });
  }

  gallery.classList.remove("hidden");
}

function closeGallery() {
  document.getElementById("gallery").classList.add("hidden");
}