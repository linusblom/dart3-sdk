import { GameType } from '../enums';

export const gameSubName = (type: GameType) => {
  switch (type) {
    case GameType.Three01SingleInDoubleOut:
    case GameType.Five01SingleInDoubleOut:
      return 'Single in - Double out';
    case GameType.Three01SDoubleInDoubleOut:
    case GameType.Five01DoubleInDoubleOut:
      return 'Double in - Double out';
    default:
      return '';
  }
};

export const gameName = (type: GameType) => {
  switch (type) {
    case GameType.Three01SingleInDoubleOut:
    case GameType.Three01SDoubleInDoubleOut:
      return '301';
    case GameType.Five01SingleInDoubleOut:
    case GameType.Five01DoubleInDoubleOut:
      return '501';
    case GameType.HalveIt:
      return 'Halve it';
    case GameType.Legs:
      return 'Legs';
    default:
      return type;
  }
};
