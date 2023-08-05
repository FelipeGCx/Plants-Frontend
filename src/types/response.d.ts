//*|||||||||||||||||||||*\\
//* Response Interfaces *\\
//*|||||||||||||||||||||*\\

export interface Response {
  status: string;
  message: string;
  data: DataResponse;
  code?: number;
  meta?: Object;
}

export interface DataResponse {
  pagination?: PaginationResponse;
  results?: Object | Array;
}

export interface PaginationResponse {
  page: number;
  totalPages: number;
  totalItems: number;
}
