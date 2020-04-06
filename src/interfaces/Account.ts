export interface Account {
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
  userMetaData: MetaData;
}

export interface MetaData {
  currency: string;
}
