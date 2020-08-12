import { GameType } from '../enums';

export const gameName = (type: GameType) => {
  switch (type) {
    case GameType.Three01:
      return '301';
    case GameType.Five01:
      return '501';
    case GameType.HalveIt:
      return 'Halve it';
    case GameType.Legs:
      return 'Legs';
    default:
      return type;
  }
};
