// 分页
export type PaginationType = {
  pageSize?: number;
};

// 列表response
export type ListResponse<T> = {
  total: number;
  list: T[];
};
