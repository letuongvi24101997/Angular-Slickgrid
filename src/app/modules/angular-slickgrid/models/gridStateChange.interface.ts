import { Column, CurrentFilter, CurrentSorter, GridState, GridStateType, Pagination } from './../models/index';

export interface GridStateChange {
  /** Changes that were triggered */
  change?: {
    newValues: Column[] | CurrentFilter[] | CurrentSorter[] | Pagination;
    type: GridStateType;
  };

  /** Current grid state */
  gridState?: GridState;
}
