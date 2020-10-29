import { EmptyStatement } from "typescript";

/*  STORE  INTERFACES */
export interface IOffers {
  id: number;
  company: number;
  new: boolean;
  featured: boolean;
  position: string;
  role: number;
  level: number;
  postedAt: string;
  contract: number;
  location: number;
  languages: number[];
  tools: number[];
}

export interface ICompanies {
  id: number;
  company: string;
  logo: string;
}

export interface IRoles {
  id: number;
  role: string;
}

export interface ILevels {
  id: number;
  level: string;
}

export interface ILocations {
  id: number;
  location: string;
}

export interface ILanguages {
  id: number;
  language: string;
}

export interface ITools {
  id: number;
  tool: string;
}

export interface IContracts {
  id: number;
  contract: string;
}

export type FilteableItems = ICompanies | IRoles | ILevels | ILocations | ILanguages | IContracts | ITools;

export interface IState {
  filter: FilteableItems[];
  offers: IOffers[];
  companies: ICompanies[];
  roles: IRoles[];
  contracts: IContracts[];
  levels: ILevels[];
  locations: ILocations[];
  languages: ILanguages[];
  tools: ITools[];
}

/* ------------------------ */
