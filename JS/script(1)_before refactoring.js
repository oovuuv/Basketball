//코드 리팩토링 하기 전까지의 코드. 작동에는 이상 없음을 확인 함. 오류 찾느라 힘들어 죽겠다.

var comScore = 0;
var userScore = 0;
var isComputerTurn = true;
var shotsLeft = 15;

//컴퓨터의 '슛하기'버튼을 누를 시...핸들러
function onComputerShoot() {
  if (!isComputerTurn)      //컴퓨터의 턴이 아니라면 리턴
    return;

  var textElem = document.getElementById('text');
    // 'text'영역에 성패 여부와 결과를 알려주기 때문에 선언.
  var comScoreElem = document.getElementById('computer-score');
  var shootType = Math.random() < 0.5 ? 2 : 3;
    // Math.random 값이 0.5보다 작다면 '2', 크다면 '3'을 shootType 변수에 대입하라.라는 '삼향연산자'이다.


    // 2점 슛이라면 성공확률은 50%
  if (shootType === 2) {
    if (Math.random() < 0.5) {
      textElem.innerHTML = '컴퓨터가 2점 슛을 성공시켰습니다!';

      comScore += 2;
      comScoreElem.innerHTML = comScore;
    } else {
      textElem.innerHTML = '컴퓨터가 2점 슛을 실패했습니다.';
    }
  } else { // 3점 슛이라면 성공확률은 33%(1/3)
    if (Math.random() < 0.33) {
      textElem.innerHTML = '컴퓨터가 3점 슛을 성공시켰습니다!';

      comScore += 3;
      comScoreElem.innerHTML = comScore;
    } else {
      textElem.innerHTML = '컴퓨터가 3점 슛을 실패했습니다.';
    }
  }
  isComputerTurn = false; //컴퓨터의 턴이 끝났기 때문에 false값으로 변경.

  var computerButton = document.getElementsByClassName('button-computer');
    for (var i = 0; i < computerButton.length; i++) {
      computerButton[i].disabled = true;
    }
    /* 컴퓨터의 버튼들을 모두 disable 시킨다.
       for문은 모든 'button-computer' class들을 찾아다닌다는 의미다.
       실제로는 한 개 밖에 없지만 의미가 그렇다는 말임. */

  var userButton = document.getElementsByClassName('button-user');
    for (var i = 0; i < userButton.length; i++) {
      userButton[i].disabled = false;
    }
    /* 컴퓨터의 차례가 끝나서 버튼들을 disabled 했다.
       이제 사용자의 차례기 때문에 사용자의 버튼이 disabled 돼 있으면 이것을 활성화 해야 하기 때문에 false로 변경.
       근데 실제로 처음 시작할 때 컴퓨터의 차례임에도 사용자의 버튼은 disabled 되어 있지 않다. (아직까지는..) */
}

// 사용자는 버튼이 2개다. 2점슛, 3점슛을 골라 넣을 수 있다. 이 두가지 버튼들의 핸들러다.
function onUserShoot(shootType) {

  if (isComputerTurn)
    return;

  var textElem = document.getElementById('text');
  var userScoreElem = document.getElementById('user-score');

  // 만약 shootType이 2점 슛이라면... 확률은 컴퓨터 때와 같다.
  if (shootType === 2) {
    if (Math.random() < 0.5) {
      textElem.innerHTML = '2점 슛 성공!!';

      userScore += 2;
      userScoreElem.innerHTML = userScore;
    } else {
      textElem.innerHTML = '2점 슛을 실패했습니다.';
    }
  } else { // shootType이 2점 슛이 아니라면 (여기서는 3점 슛이라면)
    if (Math.random() < 0.33) {
      textElem.innerHTML = '3점 슛 성공!!';

      userScore += 3;
      userScoreElem.innerHTML = userScore;
    } else {
      textElem.innerHTML = '3점 슛을 실패했습니다.';
    }
  }
  isComputerTurn = true;
  //이제 사용자의 턴도 종료. 다시 컴퓨터의 턴을 true 값으로 변경.

  // 컴퓨터의 disabled 값을 false(활성화)로 변경.
  var computerButton = document.getElementsByClassName('button-computer');
    for (var i = 0; i < computerButton.length; i++) {
      computerButton[i].disabled = false;
    }

  var userButton = document.getElementsByClassName('button-user');
    for (var i = 0; i < userButton.length; i++) {
      userButton[i].disabled = true;
    }

    // 모두 한번씩 슛을 쐈기 때문에 '남은 슛 횟수'를 차감한다.
    shotsLeft--;

    var shotsLeftElem = document.getElementById('shots-left');
    shotsLeftElem.innerHTML = shotsLeft;

    // 남은 슛 횟수가 0이라면, 승패 결과를 알려준다.
    if (shotsLeft === 0) {
      if (userScore > comScore)
        textElem.innerHTML = '축하합니다. 승리했습니다!';
      else if (userScore < comScore)
        textElem.innerHTML = '아쉽지만...졌습니다.';
      else {
        textElem.innerHTML = '비겼습니다.';


        /* 승패 결과가 나왔기 때문에 모든 버튼을 비활성화 시켜준다.
           비활성화 시켜주지 않으면 결과 문구가 나오고도 '남은 슛 횟수'가 마이너스가 되면서 게임이 계속 진행된다.
           그리고 교재 199쪽에서는 이미 document.getElementsByClassName 을 선언했기 때문에
           여기서는 할 필요가 없다고 하지만 만약 하지 않으면 컴퓨터 버튼이 비활성화 되지 않아서 게임이 무한반복된다. */
        var computerButton = document.getElementsByClassName('button-computer');
        for (var i = 0; i < computerButton.length; i++) {
          computerButton[i].disabled = true;
        }

        var userButton = document.getElementsByClassName('button-user');
        for (var i = 0; i < userButton.length; i++) {
          userButton[i].disabled = true;
        }
      }
    }
}
