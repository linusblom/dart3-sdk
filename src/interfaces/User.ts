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
}

export interface Identity {
  connection: string;
  provider: string;
  userId: string;
  isSocial: boolean;
}

export interface MetaData {
  currency: string;
}
