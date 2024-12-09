document.addEventListener("DOMContentLoaded", () => {
  let userScore = 0;
  let deviceScore = 0;

  //   Getting User Choice
  const getUserChoce = (button) => {
    return button.dataset.text;
  };

  //   Getting Device Choice
  const getDeviceChoce = () => {
    const choices = ["rock", "paper", "scissor"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  };

  //   Highlighting Score
  const highlightScoreByColor = (
    userScore,
    deviceScore,
    _userScore,
    _deviceScore
  ) => {
    if (userScore === deviceScore) {
      _userScore.style.background = "#ffffff30";
      _deviceScore.style.background = "#ffffff30";
    } else if (userScore > deviceScore) {
      _userScore.style.background = "green";
      _deviceScore.style.background = "red";
    } else {
      _deviceScore.style.background = "green";
      _userScore.style.background = "red";
    }
  };

  //   Winner Function
  const winner = (isUserVictory, userChoice, deviceChoice) => {
    const _userScore = document.querySelector("#user-score");
    const _deviceScore = document.querySelector("#device-score");
    if (isUserVictory) {
      userScore++;
      document.querySelector(
        "#toast"
      ).textContent = `Congrats! You won, ${userChoice} beats ${deviceChoice}.`;
      _userScore.textContent = userScore;
      highlightScoreByColor(userScore, deviceScore, _userScore, _deviceScore);
    } else {
      deviceScore++;
      document.querySelector(
        "#toast"
      ).textContent = `Computer won, ${deviceChoice} beats ${userChoice}.`;
      _deviceScore.textContent = deviceScore;
      highlightScoreByColor(userScore, deviceScore, _userScore, _deviceScore);
    }
  };

  const buttons = document.querySelectorAll("#rock-paper-scissor .button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const userChoice = getUserChoce(button);
      const deviceChoice = getDeviceChoce();
      document.querySelector(
        "#user-choice p"
      ).innerHTML = `<span>User</span><span>${userChoice}</span>`;
      document.querySelector(
        "#device-choice p"
      ).innerHTML = `<span>Computer</span><span>${deviceChoice}</span>`;
      if (userChoice === deviceChoice) {
        document.querySelector("#toast").textContent = "Draw!";
      } else {
        let isUserVictory = true;
        if (userChoice === "rock") {
          isUserVictory = deviceChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
          isUserVictory = deviceChoice === "scissor" ? false : true;
        } else {
          isUserVictory = deviceChoice === "rock" ? false : true;
        }
        // Calling Winner Function
        winner(isUserVictory, userChoice, deviceChoice);
      }
    });
  });
});
