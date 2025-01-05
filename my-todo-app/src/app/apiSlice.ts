import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8081/api' }),
  tagTypes: ['Task'],
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => '/todos',
      providesTags: ['Task'],
    }),
    addTask: builder.mutation({
      query: (task) => ({
        url: '/todos',
        method: 'POST',
        body: task,
      }),
      invalidatesTags: ['Task'],
    }),
    updateTask: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/todos/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Task'],
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/todos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Task'],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useAddTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = apiSlice;
