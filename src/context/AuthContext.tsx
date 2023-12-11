import { IContextType } from '@/types';
import { createContext, useContext, useEffect, useState } from 'react';

export const INITIAL_USER = {
    id: '',
    name: '',
    username: '',
    email: '',
    imageUrl: '',
    bio: ''
}

const INITIL_STATE = {
    user: INITIAL_USER,
    isLoading: false,
    isAuthenticated: false,
    setUser: () => { },
    setIsAuthenticated: () => { },
    checkAuthUser: async () => false as boolean
}

const AuthContext = createContext<IContextType>(INITIL_STATE)

const AuthContext = () => {
    return (
        <div>AuthContext</div>
    )
}

export default AuthContext