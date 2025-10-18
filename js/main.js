const studyContent = document.querySelector('.study-content__input');
const studyContentText = document.querySelector('.study-content__output');

// returnは省略可能
// valueは入力した値を取得する
studyContent.addEventListener('input', () => {
  studyContentText.textContent = studyContent.value;
});

// クラス名は.を忘れない
const studyTime = document.querySelector('.study-time__input');
const studyTimeText = document.querySelector('.study-time__output');

studyTime.addEventListener('input', () => {
  studyTimeText.textContent = studyTime.value;
});

const button = document.querySelector('button');
const studySubscribe = document.querySelector('.study__subscribe');
const error = document.querySelector('.error');

const studySumTime = document.querySelector('.study__sum-time');
let sumTime = Number(studySumTime.textContent); // textContentで中の要素を取得

button.addEventListener('click', () => {
  const studyContentValue = studyContent.value;
  const studyTimeValue = studyTime.value;
  const time = Number(studyTimeValue);

  // if文の中でreturnを使えると処理を抜けられる

  // 未入力チェック
  if (!studyContentValue || !studyTimeValue) {
    error.textContent = '未入力です';
    return;
  }
  // 整数チェック
  if (!Number.isInteger(time)) {
    error.textContent = '整数にしましょう';
    return;
  }

  //okなら登録
  studySubscribe.innerHTML += `<p>${studyContentValue} ${studyTimeValue}時間 </p>`;
  studyContent.value = '';
  studyTime.value = '';
  error.textContent = '';

  sumTime += time; //letにしないとこれは再代入になるため
  studySumTime.textContent = sumTime;
});
