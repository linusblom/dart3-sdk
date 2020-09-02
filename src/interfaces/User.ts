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
  userMetadata: MetaData;
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
  bootstrapped: boolean;
  rake: number;
}

export interface Bank {
  players: string;
  turnOver: string;
  inPlay: string;
}
