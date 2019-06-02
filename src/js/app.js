import $ from 'jquery';
import TabSwitcher from './tab-switcher';
import SearchControl from './search-control';

const tabSwitcher = new TabSwitcher({
  tabClass: '.btn--switcher',
  tabTarget: '.switcher--tab'
});

tabSwitcher.init();
SearchControl.init({
  button: '.search-btn',
  body: '.search-container'
});

// $('.tab-switcher').on('click', ($event) => {
//   tabSwitcher.switch($event);
// });
