import { publicationCardData } from "../utils/constants.js";
import { PublicationCard } from "../components/PublicationCard.js";
import { Section } from "../components/Section.js";

// import Swiper bundle with all modules installed
import Swiper from "https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js";

/*Публикации*/
function createPublicationCard(cardData, cardTemplateSelector) {
  const card = new PublicationCard(cardData, cardTemplateSelector);
  return card.generateCard();
}

const publicationSections = new Section(
  {
    items: publicationCardData,
    renderer: (item) => createPublicationCard(item, "#publications-card"),
  },
  ".slider__cards-list_type_publications"
);

publicationSections.renderItems();

const publicationSwiperSettings = {
  slidesPerView: "auto",
  direction: "horizontal",
  watchOverflow: true,
  centerInsufficientSlides: true,
  rewind: true,

  breakpoints: {
    // when window width is >= 1281px
    1281: {
      slidesPerGroup: 3,
      spaceBetween: 30,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      centeredSlides: false,
    },

    1100: {
      slidesPerGroup: 3,
      spaceBetween: 30,
      slidesOffsetBefore: 30,
      slidesOffsetAfter: 60,
      centeredSlides: false,
    },

    // when window width is >= 691px
    770: {
      slidesPerGroup: 2,
      spaceBetween: 30,
      slidesOffsetBefore: 35,
      slidesOffsetAfter: 30,
      centeredSlides: false,
    },
    // when window width is >= 320px
    320: {
      slidesPerGroup: 1,
      spaceBetween: 8,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      centeredSlides: true,      
    },
  },

  // If we need pagination
  pagination: {
    el: ".slider__pagination_section_publications",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".slider__button-next_type_publications",
    prevEl: ".slider__button-prev_type_publications",
  },
};
new Swiper(".swiper", publicationSwiperSettings);

