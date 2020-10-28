/* REDUX INTERFACES */
export interface IOffers{
  id: number;
  company: string,
  logo: string,
  new: boolean,
  featured: boolean,
  position: string,
  role: string,
  level:  string,
  postedAt: string,
  contract: string,
  location: string,
  languages: string[],
  tools: string[]
}

export interface IFilter{
  name: string,
}

export interface IState{
  filter: IFilter[];
  offers: IOffers[];
}
