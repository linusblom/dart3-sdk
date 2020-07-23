import { GameType } from '../enums';

export const getStartScore = (type: GameType) => {
  switch (type) {
    case GameType.Three01SingleInDoubleOut:
    case GameType.Three01SDoubleInDoubleOut:
      return 301;
    case GameType.Five01SingleInDoubleOut:
    case GameType.Five01DoubleInDoubleOut:
      return 501;
    case GameType.Legs:
      return 3;
    default:
      return 0;
  }
};
