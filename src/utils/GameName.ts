import { GameType } from '../enums';
import { Game } from '../interfaces';

export const gameName = (game: Game) => {
  switch (game.type) {
    case GameType.X01:
      return `${game.startScore}`;
    case GameType.HalveIt:
      return 'Halve it';
    case GameType.Legs:
      return 'Legs';
    default:
      return game.type;
  }
};
