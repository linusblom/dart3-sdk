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
  activeStartOrder: number;
  activeScore: number;
  stage: number;
  createdAt: string;
  startedAt: string;
  endedAt: string;
}

export interface MatchResponse {
  matches: Match[];
  teams: MatchTeam[];
  hits: RoundHit[];
}
