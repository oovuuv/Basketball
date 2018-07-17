
var comScore = 0;

function onComputerShoot() {

  var textElem = document.getElementById('text');

  var shootType = Math.random() < 0.5 ? 2 : 3;
    // Math.random 값이 0.5보다 작다면 '2', 크다면 '3'을 shootType 변수에 대입하라.라는 '삼향연산자'이다.


  if (shootType === 2) {
    if(Math.random() < 0.5) {
      textElem.innerHTML = '컴퓨터가 2점슛을 성공시켰습니다!';

      comScore += 2;

      var comScoreElem = document.getElementById('computer-score');
      comScoreElem.innerHTML = comScore;
    } else {
      textElem.innerHTML = '컴퓨터가 2점슛을 실패했습니다.';
    }
  } else {
    if (Math.random() < 0.33) {
      textElem.innerHTML = '컴퓨터가 3점슛을 성공시켰습니다!';

      comScore += 3;

      var comScoreElem = document.getElementById('computer-score');
      comScoreElem.innerHTML = comScore;
    } else {
      textElem.innerHTML = '컴퓨터가 3점슛을 실패했습니다.';
    }
  }
}
