/*
This code comes from https://codepen.io/pbutcher/pen/bGBmwJv

Go to "galleryCreation.js" to have the explanations for the code.
*/

var galleryCreation3 = document.getElementById('galleryCreation3');

fetch("js/gallery3.json")
.then(function(res) {
    res.json().then(function(json) {
        json.images3.forEach(function(el) {
            var galleryCreation3Item = document.createElement('a');
            
            galleryCreation3Item.setAttribute('class', 'galleryCreation-item');
            galleryCreation3Item.setAttribute('href', el.url);
            
            galleryCreation3Item.setAttribute('target', '_blank');
            var image = document.createElement('img');

            image.setAttribute('src', el.url);
            image.setAttribute('alt', el.caption);
            image.setAttribute('title', el.caption);
            
            var caption = document.createElement('caption');
            caption.innerText = el.caption;

            galleryCreation3Item.appendChild(image);
            galleryCreation3Item.appendChild(caption);
            galleryCreation3.appendChild(galleryCreation3Item);
        });
    });
});