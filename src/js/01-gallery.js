// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// console.log(gallerytems);
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const galleryEl = document.querySelector('.gallery');

const galleryMakeup = makeGallery(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', galleryMakeup);


function makeGallery (galleryItems) {
return galleryItems.map(item => {
    return `<li class="gallery__item"><a class="gallery__link" href="${item.original}" onclick="event.preventDefault()"><img class="gallery__image" src="${item.preview}" alt="${item.description}"></img></a></li>`;  
   
    })
.join(' ');
// console.log(creatGallery);
};

var lightbox = new SimpleLightbox('.gallery a', { 
    caption: true,
  captionsData: 'alt',
  captionDelay: 250,
  
 });