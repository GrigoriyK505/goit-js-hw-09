const gallery = document.querySelector(".gallery");

const galleryItems = images
  .map(
    ({ url, alt }) =>
      `<li class="gallery-item"><img src="${url}" alt="${alt}" class="gallery-image"></li>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", galleryItems);