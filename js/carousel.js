/*
This code comes from https://codepen.io/pbutcher/pen/YEeWzO
*/

//variable that contains all the images
var images = document.getElementById('carouselImages');
//variable that contains the caption of one image
var caption = document.getElementById('carouselCaption');
//variable that contains the previous images of the carousel
var prev = document.getElementById('carouselPrev');
//variable that contains the next images of the carousel
var next = document.getElementById('carouselNext');

//to fetch the json
fetch("js/carousel.json")
//function to deal with the responses
.then(function(res) {
  res.json().then(function(json) {
    //to browse through all the images contains in the json
    json.forEach(function(el, i) {
      //creation of an "image" element
      var image = document.createElement('img');
      //setting the attributes of this image
      image.setAttribute('src', el.url);
      image.setAttribute('alt', el.caption);
      image.setAttribute('title', el.caption);
      //link the image to the container of 
      images.appendChild(image);
    });
    //calling the function setupCarousel
    setupCarousel(json);
  });
});

//function to setup the carousel (O_o)
function setupCarousel(json) {

  //variable containing the number of images in the carousel
  var imageCount = images.childElementCount;
  //variable representing the current image, set at 1
  var currentImage = 1;
  //width of the image
  var imageWidth = 1500;
  
  //function "previous"
  prev.addEventListener('click', function(e) {
    //to not go at the top of the page when you click the button
    e.preventDefault();
    //if the current image isn't the image 1, set a new value and scroll to the new image selected
    if(currentImage != 1) {
      --currentImage;
      images.style.left = imageWidth - (currentImage * imageWidth) + 'px';
    }
    //set the right caption for the image
    caption.innerText = json[currentImage - 1].caption;
  });

  //function "next"
  next.addEventListener('click', function(e) {
    //to not go at the top of the page when you click the button
    e.preventDefault();
    //if the current image isn't the last one, set a new value and scroll to the new image selected
    if(currentImage != imageCount) {
      ++currentImage;
      images.style.left = imageWidth - (currentImage * imageWidth) + 'px';
    }
    //set the right caption for the image
    caption.innerText = json[currentImage - 1].caption;
  });
  //initialize the caption
  caption.innerText = json[currentImage - 1].caption;
}