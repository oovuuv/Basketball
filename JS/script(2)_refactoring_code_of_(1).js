var comScore = 0;
var userScore = 0;
var isComputerTurn = true;
var shotsLeft = 15;

//삽입된 function들은 이 페이지 하단에 선언해 두었음.

function onComputerShoot() {

  if (!isComputerTurn)
    return;

  var shootType = Math.random() < 0.5 ? 2 : 3;

  if (shootType === 2) {
    if (Math.random() < 0.5) {
      showText('컴퓨터가 2점 슛을 성공시켰습니다!');
      updateComputerScore(2);
    } else {
      showText('컴퓨터가 2점 슛을 실패했습니다.');
    }
  } else { // 3점 슛이라면 성공확률은 33%(1/3)
    if (Math.random() < 0.33) {
      showText('컴퓨터가 3점 슛을 성공시켰습니다!');
      updateComputerScore(3);
    } else {
      showText('컴퓨터가 3점 슛을 실패했습니다.');
    }
  }

  isComputerTurn = false; //컴퓨터의 턴이 끝났기 때문에 false값으로 변경.

  disableComputerButton(true); //컴퓨터의 슛쏘기 버튼은 비활성화.
  disableUserButton(false);
}

function onUserShoot(shootType) {

  if (isComputerTurn)
    return;

  if (shootType === 2) {
    if (Math.random() < 0.5) {
      showText('2점 슛 성공!!');
      updateUserScore(2);
    } else {
      showText('2점 슛을 실패했습니다.');
    }
  } else { // shootType이 2점 슛이 아니라면 (여기서는 3점 슛이라면)
    if (Math.random() < 0.33) {
      showText('3점 슛 성공!!');
      updateUserScore(3);
    } else {
      showText('3점 슛을 실패했습니다.');
    }
  }

  isComputerTurn = true;

  disableComputerButton(false);
  disableUserButton(true);

  shotsLeft--;

  var shotsLeftElem = document.getElementById('shots-left');
  shotsLeftElem.innerHTML = shotsLeft;

  if (shotsLeft === 0) {
    if (userScore > comScore)
      showText('축하합니다. 승리했습니다!');
    else if (userScore < comScore)
      showText('아쉽지만...졌습니다.');
    else {
      showText('비겼습니다.');
      }
    //남은 턴 수가 0이 되어 게임이 종료되었기에.. 컴퓨터와 유저의 슛 쏘기 버튼은 모두 비활성화를 '참'으로 바꾼다.
    disableComputerButton(true);
    disableUserButton(true);
  }
}

//핸들러 내에 삽입된 함수들 정리.

function showText(s) {
  var textElem = document.getElementById('text');
  textElem.innerHTML = s;
}

function updateComputerScore(score) {
  var comScoreElem = document.getElementById('computer-score');
  comScore += score;
  comScoreElem.innerHTML = comScore;
}

function updateUserScore(score) {
  var userScoreElem = document.getElementById('user-score');
  userScore += score;
  userScoreElem.innerHTML = userScore;
}

function disableComputerButton(flag) {
  var computerButton = document.getElementsByClassName('button-computer');
  for (var i = 0; i < computerButton.length; i++) {
      computerButton[i].disabled = flag;
    }
}

function disableUserButton(flag) {
  var userButton = document.getElementsByClassName('button-user');
  for (var i = 0; i < userButton.length; i++) {
      userButton[i].disabled = flag;
    }
}
