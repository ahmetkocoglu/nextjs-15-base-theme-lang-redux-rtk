'use client'

// ** React Imports
import {createContext, useEffect, useState, ReactNode} from 'react'
import {useLoginMutation, useMeQuery} from "@/lib/api/auth";
// ** Types
import {AuthValuesType, LoginParams, ErrCallbackType, UserDataType} from '@/type/types'
import {removeToken} from "@/lib/slice/auth/token";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/lib/store";
import {useRouter, usePathname} from "next/navigation";

// ** Defaults
const defaultProvider: AuthValuesType = {
    token: null,
    user: null,
    loading: true,
    setUser: () => null,
    setLoading: () => Boolean,
    login: () => Promise.resolve(),
    logout: () => Promise.resolve()
}

const AuthContext = createContext(defaultProvider)

type Props = {
    children: ReactNode
}

const AuthProvider = ({children}: Props) => {
    // ** Mutation **
    const [login, result] = useLoginMutation()

    // ** Query **
    const {data: me, isSuccess, isError: meIsError} = useMeQuery('');

    // ** Dispatch
    const dispatch = useDispatch<AppDispatch>();

    // ** Selector **
    const token = useSelector((state: RootState) => state.tokenState);

    // ** States
    const [user, setUser] = useState<UserDataType | null>(defaultProvider.user)
    const [loading, setLoading] = useState<boolean>(defaultProvider.loading)

    // ** Hooks
    const router = useRouter()
    const pathname = usePathname()

    /*useEffect(() => {
        const initAuth = async (): Promise<void> => {
            const storedToken = window.localStorage.getItem('token')!
            if (storedToken) {
                dispatch(setToken(storedToken))
                if(router.pathname === '/') router.push("/home")
            } else {
                console.log(storedToken)
                if(token.token !== '' && router.pathname === '/auth/sign-in' && result.isSuccess) router.push("/home")
                if(token.token === '' && router.pathname === '/') router.push("/auth/sign-in")
            }
        }

        initAuth()
    }, [dispatch, result, router, token, token.token])*/


    useEffect(() => {
        // console.log(router, pathname)
        /*if (result.isSuccess) {
            if (pathname === '/auth/sign-in') router.push("/home")
        } else if (isError && pathname === '/auth/sign-up') {
        } else if (isError && pathname !== '/auth/sign-in') {
            router.replace("/auth/sign-in")
        } else if (isSuccess) {
            if (pathname === '/auth/sign-in') router.push("/home")
        }*/


        /*if (isSuccess) {
            if (router.pathname === '/auth/sign-in' && isSuccess) router.push("/home")
            if (router.pathname === '/' && isSuccess) router.push("/home")
        }*/
    }, [meIsError, isSuccess, result.isSuccess, router])

    useEffect(() => {
        if (result.isSuccess) {
            if (pathname === '/auth/sign-in') {
                router.push("/dashboard")
            }
        }
    }, [result.isSuccess, pathname, router]);

    useEffect(() => {
        if (pathname.startsWith('/dashboard')) {
            if (meIsError) {
                router.push("/auth/sign-in")
            }
        }
    }, [meIsError, pathname, router]);

    const handleLogin = (params: LoginParams, errorCallback?: ErrCallbackType) => {
        login(params)
    }

    const handleLogout = () => {
        router.push("/auth/sign-in")
        // toast.success("Success Logout !");
        dispatch(removeToken())
    }

    const values = {
        token: token.token,
        user,
        loading,
        setUser,
        setLoading,
        login: handleLogin,
        logout: handleLogout
    }

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export {AuthContext, AuthProvider}
