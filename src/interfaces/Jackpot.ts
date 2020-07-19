export interface Jackpot {
  id: number;
  value: string;
  nextValue: string;
}

export interface RoundJackpot {
  gems: boolean[];
  playerIds: number[];
  value?: string;
}
