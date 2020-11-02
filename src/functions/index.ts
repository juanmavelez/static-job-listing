import { IFilteableItems, IOffers, IState  } from '../interfaces/StateInterface'

export const searchElementById = (itemId: number, input: IFilteableItems[]): IFilteableItems => {
  const outPut = input.find((item: IFilteableItems) => item.id === itemId)!
  return outPut
}

export const offerInFilter = (filter: IFilteableItems[], offers: IOffers[], state: IState): IOffers[] => {
  return offers.filter((item) => {
    const meetsAllFilter = (filter.length === filter.filter((itemFilter) => {
      const isSameLevel: boolean = itemFilter.name === searchElementById(item.level, state.levels).name;
      const isSameRol: boolean = itemFilter.name === searchElementById(item.role, state.roles).name;
      const haveSameLanguage: boolean = (item.languages.filter((itemLanguage) => {
        return itemFilter.name === searchElementById(itemLanguage, state.languages).name
      }).length > 0);
      const haveSameTool: boolean = item.tools.filter((item) => {
        return itemFilter.name === searchElementById(item, state.tools).name
      }).length > 0;

      if (isSameLevel || isSameRol || haveSameLanguage || haveSameTool) {
        return true;
      } else {
        return false;
      }
    }).length)

    if (meetsAllFilter) {
      return true;
    } else {
      return false;
    }
  })
}
