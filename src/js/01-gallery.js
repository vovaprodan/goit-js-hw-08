// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const pictureMarkup = createPictureCards(galleryItems);
// console.log(galleryItems);
gallery.insertAdjacentHTML("beforeend", pictureMarkup)

gallery.addEventListener('click', onClickCard)

function createPictureCards(galleryItems) {
    const markup = galleryItems.map(({preview, original, description}) => {
        return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`
    }).join('')
    return markup;
}
function onClickCard(event) {
    event.preventDefault();
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  
});