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

button.addEventListener('click', () => {
  const studyContentValue = studyContent.value;
  const studyTimeValue = studyTime.value;
  studySubscribe.textContent = `${studyContentValue} ${studyTimeValue}時間`;
});
