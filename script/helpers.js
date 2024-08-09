export const generateComputerChoice = (list) => {
  const n = Math.floor(Math.random() * list.length);
  return list[n];
};

export const compareChoices = (player, computer) => {
  const resultState = {
    win: "You Won!🎉",
    lose: "You Loose!🏳️",
    draw: "Draw!🟰",
  };

  if (player === computer) {
    return resultState.draw;
  }

  if (
    (player === "🪨" && computer === "✂️") ||
    (player === "📃" && computer === "🪨") ||
    (player === "✂️" && computer === "📃")
  ) {
    return resultState.win;
  } else {
    return resultState.lose;
  }
};
