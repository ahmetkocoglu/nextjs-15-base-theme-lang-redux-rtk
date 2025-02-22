import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { base } from '@/lib/configs/route/base'
import {prepareHeaders} from "@/lib/configs/prepare-headers";

export const loginApi = createApi({
    reducerPath: 'loginApi',
    baseQuery: fetchBaseQuery({
        baseUrl: base.base,
        prepareHeaders: prepareHeaders,
    }),
    endpoints: (builder) => ({
        getIsLogin: builder.query<any, string>({
            query: (url) => `${url}`
        }),
        me: builder.query<any, string>({
            query: () => `/users/me`,
            transformResponse: (result: { token: string }) => result,
            async onQueryStarted(_args, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    // dispatch(setUser(data))
                } catch (error) {
                    // dispatch(removeUser())
                }
            }
        }),
        login: builder.mutation({
            query: (body) => ({
                url: '/auth/sign-in',
                method: 'POST',
                body,
            }),
            transformResponse: (result: { token: string, user: any }) => result,
            async onQueryStarted(_args, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    // dispatch(setToken(data.token))
                    // dispatch(setUser(data.user))
                    // toast.success("Success Login!");
                } catch (error) {
                    // toast.error("Failed Login!");
                }
            }
        }),
        register: builder.mutation({
            query: (body) => ({
                url: '/auth/sign-up',
                method: 'POST',
                body,
            }),
            transformResponse: (result: { token: string }) => result,
            async onQueryStarted(_args, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    // dispatch(setToken(data.token))
                } catch (error) {
                }
            }
        }),
    }),
})

export const { useGetIsLoginQuery, useMeQuery, useLoginMutation, useRegisterMutation } = loginApi
