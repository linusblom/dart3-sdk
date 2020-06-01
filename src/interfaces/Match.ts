import { MatchStatus } from '../enums';
import { MatchTeam } from './MatchTeam';
import { RoundHit } from './Hit';

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
}

export interface MatchActive {
  id: number;
  round: number;
  set: number;
  leg: number;
  matchTeamId: number;
  playerId: number;
  teamId: number;
  currentScore: number;
}

export interface MatchResponse {
  matches: Match[];
  teams: MatchTeam[];
  hits: RoundHit[];
}
