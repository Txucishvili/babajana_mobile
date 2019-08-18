import $ from 'jquery';
import TabSwitcher from './tab-switcher';
import SearchControl from './search-control';
import slick from './slick';

const tabSwitcher = new TabSwitcher({
  tabClass: '.btn--switcher',
  tabTarget: '.switcher--tab'
});

tabSwitcher.init();
SearchControl.init({
  button: '.search-btn',
  body: '.search-container'
});

const openPopupName = '.popup--open';
const closePopupName = '.popup--close';

const openPopup = () => {
  const item = $(openPopupName);
  const target = $(openPopupName).data('modal');
  const parentTarget = $('.popup-page');

  $(parentTarget).addClass('popup-page--active');
  $(`.${target}`).addClass('popup-page--item--active');
};


const closePopup = () => {
  const item = $(openPopupName);
  const target = $(openPopupName).data('modal');
  const parentTarget = $('.popup-page');

  $(parentTarget).removeClass('popup-page--active');
  $(`.${target}`).removeClass('popup-page--item--active');
};

$(openPopupName).on('click', openPopup);

$(closePopupName).on('click', closePopup);

// $('.tab-switcher').on('click', ($event) => {
//   tabSwitcher.switch($event);
// });

$('.news-box-list').slick({
  infinite: false,
  slidesToShow: 2,
  centerMode: true,
  variableWidth: true,
  arrows: false
});
