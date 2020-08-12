import { GameType } from '../enums';

export const getStartScore = (type: GameType) => {
  switch (type) {
    case GameType.Three01:
      return 301;
    case GameType.Five01:
      return 501;
    case GameType.Legs:
      return 3;
    default:
      return 0;
  }
};
