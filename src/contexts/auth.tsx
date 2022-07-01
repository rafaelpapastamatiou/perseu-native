import React, { createContext, ReactNode, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { api } from "../services/api";

type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

type AuthState = {
  accessToken?: string;
  user?: User;
}

type SignInCredentials = {
  email: string;
  password: string;
}

type AuthContextData = AuthState & {
  isAuthenticated: boolean;
  isLoading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

type SignInResponse = {
  accessToken: string;
  user: User;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

interface AuthProviderProps {
  children: ReactNode;
}

const initialAuthState: AuthState = {
  accessToken: undefined,
  user: undefined,
}

export function AuthProvider({
  children
}: AuthProviderProps) {
  const [auth, setAuth] = useState<AuthState>(initialAuthState)

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loadStoredData()
  }, [])

  async function signIn(credentials: SignInCredentials) {
    try {
      setIsLoading(true)

      const { data: { user, accessToken } } = await api.post<SignInResponse>(
        "signin",
        credentials
      )

      setAuth({ user, accessToken })

      await AsyncStorage.setItem('@Perseu:user', JSON.stringify(user))
      await AsyncStorage.setItem('@Perseu:token', accessToken)
    }
    catch (err) {
      console.log(err)
    }
    finally {
      setIsLoading(false)
    }
  }

  async function signOut() {
    await AsyncStorage.removeItem('@Perseu:user')
    await AsyncStorage.removeItem('@Perseu:token')

    setAuth(initialAuthState)
  }

  async function loadStoredData() {
    const storedUser = await AsyncStorage.getItem('@Perseu:user')
    const storedAccessToken = await AsyncStorage.getItem('@Perseu:token')

    if (storedUser && storedAccessToken) {
      setAuth({
        user: JSON.parse(storedUser),
        accessToken: storedAccessToken
      })
    }

    setIsLoading(false)
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!auth.accessToken,
        isLoading,
        signIn,
        signOut,
        ...auth
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
