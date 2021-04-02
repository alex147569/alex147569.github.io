/*
This code comes from https://codepen.io/pbutcher/pen/bGBmwJv
*/

//variable that contains all the images
var galleryCreation = document.getElementById('galleryCreation');

//to fetch the json
fetch("js/gallery.json")
//function to deal with the responses
.then(function(res) {
    res.json().then(function(json) {
        //to browse through all the images contains in the json
        json.images.forEach(function(el) {
            //creation of one element of the gallery
            var galleryCreationItem = document.createElement('a');
            //setting the attributes of this element
            galleryCreationItem.setAttribute('class', 'galleryCreation-item');
            galleryCreationItem.setAttribute('href', el.url);
            galleryCreationItem.setAttribute('target', '_blank');
            //creation of the "image" element
            var image = document.createElement('img');
            //setting the attributes of this image
            image.setAttribute('src', el.url);
            image.setAttribute('alt', el.caption);
            image.setAttribute('title', el.caption);
            //creation of the "caption" element
            var caption = document.createElement('caption');
            //set the caption
            caption.innerText = el.caption;

            //link the image to the gallery element we created first
            galleryCreationItem.appendChild(image);
            //link the caption to the gallery element we created first
            galleryCreationItem.appendChild(caption);
            //link the gallery element we created first to the whole gallery
            galleryCreation.appendChild(galleryCreationItem);
        });
    });
});