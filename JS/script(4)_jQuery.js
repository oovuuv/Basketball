var computer = {
  score : 0,
  percent2 : 0.7,
  percent3 : 0.5
};

var user = {
  score : 0,
  percent2 : 0.7,
  percent3 : 0.5
};

var game = {
  isComputerTurn : true,
  shotsLeft : 15
};

var shootType = Math.random() < computer.percent2 ? 2 : 3;

//삽입된 function들은 이 페이지 하단에 선언해 두었음.

function onComputerShoot() {

  if (game.shotsLeft === 0) {
  return;
  }

  if (!game.isComputerTurn) {
    return;
  }   // 컴퓨터의 차례가 아니라면 컴퓨터 턴으로 전환.

  updateAI();

  if (Math.random() < computer['percent' + shootType]) {
    showText('컴퓨터가'+ shootType + '점 슛을 성공시켰습니다!');
    updateComputerScore(shootType);
  } else {
    showText('컴퓨터가'+ shootType + '점 슛을 실패했습니다.');
  }

  game.isComputerTurn = false; //컴퓨터의 턴이 끝났기 때문에 false값으로 변경.

  disableComputerButton(true); //컴퓨터의 슛쏘기 버튼은 비활성화.
  disableUserButton(false);
}


function onUserShoot(shootType) {

  if (game.shotsLeft === 0) {
    return;
  }

  if (game.isComputerTurn) {
    return;
  }

  if (Math.random() < computer['percent' + shootType]) {
    showText(shootType + '점 슛 성공!!');
    updateUserScore(shootType);
  } else {
    showText(shootType + '점 슛을 실패했습니다.');
  }

  game.isComputerTurn = true;

  disableComputerButton(false);
  disableUserButton(true);

  game.shotsLeft--;

  //var shotsLeftElem = document.getElementById('shots-left');
  var $shotsLeftElem = $('#shots-left');

  // shotsLeftElem.innerHTML = game.shotsLeft;
  $shotsLeftElem.html(game.shotsLeft);


  if (game.shotsLeft === 0) {
    if (user.score > computer.score) {
      showText('축하합니다. 승리했습니다!');
    } else if (user.score < computer.score) {
      showText('아쉽지만...졌습니다.');
    } else {
      showText('비겼습니다.');
    }
    //남은 턴 수가 0이 되어 게임이 종료되었기에.. 컴퓨터와 유저의 슛 쏘기 버튼은 모두 비활성화를 '참'으로 바꾼다.
    disableComputerButton(true);
    disableUserButton(true);
  }
}

//핸들러 내에 삽입된 함수들 정리.

function showText(string) {
  //var textElem = document.getElementById('text');
  var $textElem = $('#text');
  $textElem.html(string);
  //textElem.innerHTML = string;
}

function updateComputerScore(score) {
  //var comScoreElem = document.getElementById('computer-score');
  var $comScoreElem = $('#computer-score');
  computer.score += score;
  $comScoreElem.html(computer.score);
  //comScoreElem.innerHTML = computer.score;
}

function updateUserScore(score) {
  //var userScoreElem = document.getElementById('user-score');
  var $userScoreElem = $('#user-score');
  user.score += score;
  $userScoreElem.html(user.score);
  //userScoreElem.innerHTML = user.score;
}

function disableComputerButton(flag) {
  /*
  var computerButton = document.getElementsByClassName('button-computer');
  for (var i = 0; i < computerButton.length; i++) {
      computerButton[i].disabled = flag;
    }
  */
  $('.button-computer').prop('disabled',flag);
}

function disableUserButton(flag) {
  /*
  var userButton = document.getElementsByClassName('button-user');
  for (var i = 0; i < userButton.length; i++) {
      userButton[i].disabled = flag;
    }
  */
  $('.button-user').prop('disabled',flag);
}

function updateAI() {
  var diff = user.score - computer.score;

  if (diff >= 10) {
    computer.percent2 = 0.9;
    computer.percent3 = 0.8;
  } else if (diff >= 6) {
    computer.percent2 = 0.8;
    computer.percent3 = 0.6;
  } else if (diff <= -10) {
    user.percent2 = 0.9;
    user.percent3 = 0.8;
  } else if (diff <= -6) {
    user.percent2 = 0.8;
    user.percent3 = 0.6;
  }
}
