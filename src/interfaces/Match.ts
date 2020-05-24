import { MatchStatus } from '../enums';
import { MatchTeam } from './MatchTeam';

export interface Match {
  id: number;
  gameId: number;
  status: MatchStatus;
  activeRound: number;
  activeSet: number;
  activeLeg: number;
  activeMatchTeamId: number;
  activePlayerId: number;
  stage: number;
  createdAt: Date;
  startedAt: Date;
  endedAt: Date;
  teams: MatchTeam[];
}

export interface MatchActive {
  round: number;
  set: number;
  leg: number;
  matchTeamId: number;
  playerId: number;
  teamId: number;
  currentScore: number;
}
