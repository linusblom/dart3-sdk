import { State } from '../enums';
import { MatchTeam } from './MatchTeam';
import { RoundHit } from './Hit';

export interface Match {
  id: number;
  gameId: number;
  state: State;
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
