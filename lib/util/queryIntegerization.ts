import { GetProjectMyProps } from '@/lib/api/types';

export type Query = {
  [Properties in keyof GetProjectMyProps]?: GetProjectMyProps;
};

export default (query: Query) => {
  return {
    ...query,
    captain: query.captain === undefined ? null : query.captain,
    crew: query.crew === undefined ? null : query.crew,
    page: query.page === undefined || +query.page < 0 ? 0 : +query.page,
    size: query.size === undefined || +query.size < 1 ? 1 : +query.size,
    sort: query.sort === undefined ? null : query.sort,
  };
};
