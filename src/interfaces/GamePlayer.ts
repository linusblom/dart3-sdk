import { Round } from './Round';

export interface GamePlayer {
  id: string;
  total: number;
  totalDisplay: string;
  currentRound: number;
  position: number;
  xp: number;
  win: number;
  rounds: {
    [key: string]: Round;
  };
}
