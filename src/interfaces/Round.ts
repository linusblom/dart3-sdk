import { Score } from './Score';
import { JackpotDrawType } from '../enums';

export interface Round {
  scores: Score[];
  score: number;
  scoreDisplay: string;
  jackpotDraw: JackpotDrawType;
  color?: string;
}
