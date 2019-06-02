import $ from 'jquery';

class SearchControl {
  constructor(props) {


  }

  static init(data) {
    const {button, body} = data;
    this.btnOpen = $(`${button}-open`)[0];
    this.btnClose = $(`${button}-close`);
    this.body = $(`${body}-main`);
    const bodyClassname = body.split('.').join('');

    const th = this;

    console.log($(this.btnClose));

    $(this.btnOpen).on('click',  (event)  => {
      $(th.body).addClass(`${bodyClassname}--active`)
    });

    $(this.btnClose).on('click',  (event) => {
      console.log('hh');
      $(th.body).removeClass(`${bodyClassname}--active`)
    })
  }

}

export default SearchControl;
