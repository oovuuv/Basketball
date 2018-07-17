
var comScore = 0;
var userScore = 0;

function onComputerShoot() {

  var textElem = document.getElementById('text');
  var comScoreElem = document.getElementById('computer-score');
  var shootType = Math.random() < 0.5 ? 2 : 3;
    // Math.random 값이 0.5보다 작다면 '2', 크다면 '3'을 shootType 변수에 대입하라.라는 '삼향연산자'이다.

  if (shootType === 2) {
    if(Math.random() < 0.5) {
      textElem.innerHTML = '컴퓨터가 2점 슛을 성공시켰습니다!';

      comScore += 2;
      comScoreElem.innerHTML = comScore;
    } else {
      textElem.innerHTML = '컴퓨터가 2점 슛을 실패했습니다.';
    }
  } else {
    if (Math.random() < 0.33) {
      textElem.innerHTML = '컴퓨터가 3점 슛을 성공시켰습니다!';

      comScore += 3;
      comScoreElem.innerHTML = comScore;
    } else {
      textElem.innerHTML = '컴퓨터가 3점 슛을 실패했습니다.';
    }
  }
}

function onUserShoot(shootType) {

  var textElem = document.getElementById('text');
  var userScoreElem = document.getElementById('user-score');

  if (shootType === 2) {
    if(Math.random() < 0.5) {
      textElem.innerHTML = '2점 슛 성공!!';

      userScore += 2;
      userScoreElem.innerHTML = userScore;
    } else {
      textElem.innerHTML = '2점 슛을 실패했습니다.'
    }
  } else {
    if (Math.random() < 0.33) {
      textElem.innerHTML = '3점 슛 성공!!';

      userScore += 3;
      userScoreElem.innerHTML = userScore;
    } else {
      textElem.innerHTML = '3점 슛을 실패했습니다.'
    }
  }
}
