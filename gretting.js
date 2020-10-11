//gretting.js
//clock/js는 변동 없음.
const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");
const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}//key는 showing, value는 text, 즉 form에 입력받은 value가 된다. 

function handleSubmit(event) {
  event.preventDefault();//현재 이벤트의 기본동작을 중단한다.
//이 상황에서 이벤트의 기본동작이란 입력 받은 값을 submit한 뒤 값을 clear하는 것을 의미한다.
  const currentValue = input.value;//입력받은 값
  paintGreeting(currentValue);
  saveName(currentValue);//localstroage에 저장.
}

function askForName() {
  form.classList.add(SHOWING_CN);//입력 칸을 display한다.
  form.addEventListener("submit", handleSubmit);
}//입력 받은 뒤 enter를 통해 submit했을 경우 handleSubmit함수를 실행.

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}
function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    // she is not
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}
function init() {
  loadName();
}
init();