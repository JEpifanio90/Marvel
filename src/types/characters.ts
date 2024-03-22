export interface CharacterBio {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: {
    path: string;
    extension: string;
  },
  resourceURI: string;
}

export interface State {
  characters: Array<CharacterBio>;
  loading: boolean;
  count: number;
  limit: number;
  offset: number;
  total: number;
  error: unknown;
}
