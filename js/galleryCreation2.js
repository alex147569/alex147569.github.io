/*
This code comes from https://codepen.io/pbutcher/pen/bGBmwJv

Go to "galleryCreation.js" to have the explanations for the code.
*/
var galleryCreation2 = document.getElementById('galleryCreation2');

fetch("js/gallery2.json")
.then(function(res) {
    res.json().then(function(json) {
        json.images2.forEach(function(el) {
            var galleryCreation2Item = document.createElement('a');
            galleryCreation2Item.setAttribute('class', 'galleryCreation-item');
            galleryCreation2Item.setAttribute('href', el.url);
            galleryCreation2Item.setAttribute('target', '_blank');
            var image = document.createElement('img');

            image.setAttribute('src', el.url);
            image.setAttribute('alt', el.caption);
            image.setAttribute('title', el.caption);
            
            var caption = document.createElement('caption');
            caption.innerText = el.caption;

            galleryCreation2Item.appendChild(image);
            galleryCreation2Item.appendChild(caption);
            galleryCreation2.appendChild(galleryCreation2Item);
        });
    });
});