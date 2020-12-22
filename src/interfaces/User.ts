export interface User {
  userId: string;
  username: string;
  email: string;
  name: string;
  nickname: string;
  emailVerified: boolean;
  picture: string;
  createdAt: Date;
  updatedAt: Date;
  lastIp: string;
  lastLogin: Date;
  loginCount: number;
  metadata: MetaData;
  identities: Identity[];
  bank: Bank;
}

export interface Identity {
  connection: string;
  provider: string;
  userId: string;
  isSocial: boolean;
}

export interface MetaData {
  currency: string;
  jackpotFee: number;
  nextJackpotFee: number;
  rake: number;
  gemChance: string;
}

export interface Bank {
  players: string;
  turnOver: string;
  inPlay: string;
  rake: string;
}
