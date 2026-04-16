const mapFrame = document.getElementById("map-frame");
const placeTitle = document.getElementById("place-title");
const placeDescription = document.getElementById("place-description");

const schoolBtn = document.getElementById("school-btn");
const longIslandBtn = document.getElementById("longisland-btn");
const cafeBtn = document.getElementById("cafe-btn");

if (
  mapFrame &&
  placeTitle &&
  placeDescription &&
  schoolBtn &&
  longIslandBtn &&
  cafeBtn
) {
  const places = {
    school: {
      title: "Illinois Institute of Technology",
      description: "Illinois Institute of Technology is important to me because it is where I study and where I have made many amazing friends.",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2972.609322941937!2d-87.62853512337861!3d41.83670997124634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c72d3e9a80f%3A0x91cbe4661afb6f1a!2sIllinois%20Institute%20of%20Technology!5e0!3m2!1sen!2sus!4v1776308465349!5m2!1sen!2sus"
    },
    longIsland: {
      title: "Long Island, New York",
      description: "Long Island is important to me because it is where I was born and grew up before moving to Chicago.",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d772604.4022100738!2d-73.60843234325094!3d40.850232354933496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e84454e1eea5cb%3A0x1df7f96186940d18!2sLong%20Island!5e0!3m2!1sen!2sus!4v1776308538914!5m2!1sen!2sus"
    },
    cafe: {
      title: "Hanabusa Cafe",
      description: "Hanabusa Cafe is important to me because it is one of my favorite spots in Chicago and a place I connect good memories with.",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.506621233549!2d-87.62933952337664!3d41.88196047124133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2dae45610401%3A0x1dc1809b6722610!2sHanabusa%20Cafe!5e0!3m2!1sen!2sus!4v1776308563787!5m2!1sen!2sus"
    }
  };

  function updatePlace(place) {
    mapFrame.src = place.map;
    placeTitle.textContent = place.title;
    placeDescription.textContent = place.description;
    mapFrame.title = "Map showing " + place.title;
  }

  schoolBtn.addEventListener("click", function () {
    updatePlace(places.school);
  });

  longIslandBtn.addEventListener("click", function () {
    updatePlace(places.longIsland);
  });

  cafeBtn.addEventListener("click", function () {
    updatePlace(places.cafe);
  });
}

const sliderImage = document.getElementById("slider-image");
const sliderCaption = document.getElementById("slider-caption");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

if (sliderImage && sliderCaption && prevBtn && nextBtn) {
  const slides = [
    {
      image: "media/images/img1.png",
      alt: "Diamond rank act triangle from Valorant",
      caption: "Diamond 1 Act Rank Triangle (approximately 6.45% of VALORANT players are ranked Diamond 1 or higher)."
    },
    {
      image: "media/images/img5.png",
      alt: "Valorant Tracker score showing an 800 tracker score",
      caption: "800 Valorant Tracker Score (S+ Tier)"
    }
  ];

  let currentSlide = 0;

  function showSlide(index) {
    sliderImage.src = slides[index].image;
    sliderImage.alt = slides[index].alt;
    sliderCaption.textContent = slides[index].caption;
  }

  nextBtn.addEventListener("click", function () {
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    showSlide(currentSlide);
  });

  prevBtn.addEventListener("click", function () {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
  });
}