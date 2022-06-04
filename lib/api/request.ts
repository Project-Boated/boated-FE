import { AxiosResponse } from 'axios';

import client from './client';

import { Method, ErrorResponse, ApiResponse } from './types';

const request = async <RES = unknown, REQ = null, PARAMS = null>(
  method: Method,
  url: string,
  body?: REQ,
  params?: PARAMS,
): Promise<ApiResponse<RES>> => {
  const response = (await client({
    method,
    url,
    params,
    ...(body && { data: body }),
  })) as AxiosResponse<RES | ErrorResponse>;

  const { status, data } = response;

  const responseData = data as RES;

  return {
    statusCode: status,
    data: responseData,
  };
};

export default request;
