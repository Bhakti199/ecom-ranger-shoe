import { v4 as uuid } from "uuid";
const brands = [
  {
    id: uuid(),
    img: "./assets/adidaslogo.jpg",
  },
  {
    id: uuid(),
    img: "./assets/hrx.png",
  },
  {
    id: uuid(),
    img: "./assets/nikelogo.png",
  },
  {
    id: uuid(),
    img: "./assets/reebok.png",
  },
  {
    id: uuid(),
    img: "./assets/pumalogo.png",
  },
];

const sliderData = [
  {
    id: uuid(),
    img: "./assets/banner-v-4.webp",
    productDetail: "Fire run running shoes for men",
  },

  {
    id: uuid(),
    img: "./assets/banner-v-2.webp",
    productDetail: "Hustle V2 Running Shoes For Women  ",
  },
  {
    id: uuid(),
    img: "./assets/banner-v-3.webp",
    productDetail: "Supertec Running Shoes For Women",
  },

  {
    id: uuid(),
    img: "./assets/banner-v-5.webp",
    productDetail: "Ferrari X-Ray Speed Running Shoes",
  },

  {
    id: uuid(),
    img: "./assets/banner-v-7.webp",
    productDetail: "Supertec Running Shoes For Women",
  },

  {
    id: uuid(),
    img: "./assets/banner-v-1.webp",
    productDetail: "Fire run running shoes for men",
  },

  {
    id: uuid(),
    img: "./assets/banner-v-10.webp",
    productDetail: "Supertec Running Shoes For Women",
  },
  {
    id: uuid(),
    img: "./assets/banner-v-11.webp",
    productDetail: "Troy MU Running Shoes For Men",
  },
];

const settings = {
  className: "center must-have-row-container",
  infinite: true,
  dots: true,
  centerPadding: "60px",
  slidesToShow: 3,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        initialSlide: 2,
      },
    },
  ],
};

export { sliderData, settings, brands };
