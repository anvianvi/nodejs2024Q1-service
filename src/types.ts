export type User = {
  id: string;
  login: string;
  password: string;
  version: number;
  createdAt: number;
  updatedAt: number;
};

export type Track = {
  id: string;
  name: string;
  artistId: string | null;
  albumId: string | null;
  duration: number;
};
