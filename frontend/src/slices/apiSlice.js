import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants';

// allows to make request to backend API
const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const apiSlice = createApi({
  baseQuery, // baseQuery: baseQuery
  tagTypes: ['Product', 'Order', 'User'],
  endpoints: (builder) => ({}), 
});