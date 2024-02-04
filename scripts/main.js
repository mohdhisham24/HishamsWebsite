

const navLinks = document.querySelectorAll('.navlink');
const sections = document.querySelectorAll('.section');
let activeSection = 'home';
window.addEventListener('scroll',()=>{

  sections.forEach(element => {
    if(window.scrollY >= (element.offsetTop-element.clientHeight/1.6)){
      activeSection = element.id
    }
  });

  navLinks.forEach(link=>{
    if(link.href.includes(activeSection)){
      document.querySelector('.active-nav').classList.remove('active-nav');
      link.classList.add('active-nav')
    }
  })


});



// function getRandomImage(){
//   // get image containers
  
//   var imageContainers =[ document.getElementById('mar1'),document.getElementById('mar2'),document.getElementById('mar3')];

//   imageContainers.forEach((imageContainer)=>{

//       // Remove the first image
//   var firstImage = imageContainer.firstElementChild;
//   if (firstImage) {
//     imageContainer.removeChild(firstImage);
//   }



//   var imageFiles = ['boat.jpg', 'confused.jpg', 'flowers.jpg', 'friends.jpg','manbeach.jpg','ullal.jpg'];

//   // Get a random index from the array
//   var randomIndex = Math.floor(Math.random() * imageFiles.length);

//   // Get the random image file name
//   var randomImageFile = imageFiles[randomIndex];

//   // Insert a new image at the bottom
//   var newImage = document.createElement('img');
//   newImage.src = '/Art/' + randomImageFile;
//   newImage.alt = 'New Image';
//   imageContainer.appendChild(newImage);
//   })
// }

// // JavaScript code to remove the first image and insert a new image at the bottom
// document.addEventListener('DOMContentLoaded', function () {
  
//   setInterval(getRandomImage, 25000);
// });