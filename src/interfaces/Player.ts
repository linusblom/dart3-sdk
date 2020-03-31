export interface Player {
  id: number;
  accountId: string;
  name: string;
  email: string;
  balance: string;
  createdAt: Date;
  deletedAt: Date;
  color: string;
  avatar: string;
  xp: number;
  highScore: number;
  oneHundredEighties: number;
  nineDarters: number;
}

export interface CreatePlayer {
  name: string;
  email: string;
}

export interface UpdatePlayer {
  name: string;
}
