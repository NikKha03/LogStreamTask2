let addHistory = document.querySelector('.history-of-actions');
var resField = document.querySelector('.calc--result-field');
var btnNum = document.querySelectorAll('.js--btn-add-res');
var btnReset = document.querySelector('.js--btn-reset');
var btnCalc = document.querySelector('.js--btn-calc');

const addH = () => {
  addHistory.append(`${resField.value} = ${eval(resField.value)}`);
};

for (i = 0; i < btnNum.length; i++) {
  btnNum[i].addEventListener('click', function (e) {
    e.preventDefault();
    resField.value += this.innerHTML;
  });
}

btnCalc.addEventListener('click', function (e) {
  e.preventDefault();
  addH();
  resField.value = '';
});
