import $ from 'jquery';

class TabSwitcher {
  constructor(props) {
    this.btnName = props.tabClass.split('.').join('');
    this.tabsName = props.tabTarget.split('.').join('');
    this.switcher = $(props.tabClass);
    this.tabs = $(props.tabTarget);
  }

  init() {
    this.initSwitchs(this.switcher);
    // this.initTabs(this.tabs);
  }

  initSwitchs(switchs) {
    // console.log('swtchs', switchs);
    const ArraySend = [];

    switchs.map(obj => {
      const button = $(switchs[obj])[0];
      const btnElement = $(button);
      const tabName = button.dataset.switcher;
      const tabElement = $(`div[data-switch=${tabName}`)[0];

      if (btnElement.hasClass(`${this.btnName}--active`)) {
        $(tabElement).addClass(`${this.tabsName}--active`);
      }

      this.onButtonClick(tabName);

      const dataSend = {
        key: tabName,
        tab: tabElement,
        btn: btnElement
      };

      ArraySend.push(dataSend);
    });

    this.collectTabs(ArraySend);
  }

  onButtonClick(tabName) {
    const btnElement = $(`div[data-switcher=${tabName}`)[0];
    const tabTarget = $(`div[data-switch=${tabName}`)[0];

    $(btnElement).on('click', () => {
      $(`.${this.tabsName}`).removeClass(`${this.tabsName}--active`);
      $(tabTarget).addClass(`${this.tabsName}--active`);

      $(`.${this.btnName}`).removeClass(`${this.btnName}--active`);
      $(btnElement).addClass(`${this.btnName}--active`);
    });
  }

  collectTabs(data) {
    // TODO: add transform movement to tabs

    data.filter(obj => {
      const {btn, tab, key} = obj;
      // console.log(tab);


    })
  }
}

export default TabSwitcher;
