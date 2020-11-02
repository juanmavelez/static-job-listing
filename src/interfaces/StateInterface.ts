/*  STORE  INTERFACES */
export interface IOffers {
  id: number;
  company: number;
  isNew: boolean;
  isFeatured: boolean;
  position: string;
  role: number;
  level: number;
  postedAt: string;
  contract: number;
  location: number;
  languages: number[];
  tools: number[];
}

export interface IFilteableItems {
  id: number;
  name: string
  logo?: string
}

export interface IState {
  filter: IFilteableItems[];
  offers: IOffers[];
  companies: IFilteableItems[];
  roles: IFilteableItems[];
  contracts: IFilteableItems[];
  levels: IFilteableItems[];
  locations: IFilteableItems[];
  languages: IFilteableItems[];
  tools: IFilteableItems[];
}

/* ------------------------ */
