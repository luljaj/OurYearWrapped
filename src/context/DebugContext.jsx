import { createContext, useContext } from 'react'

export const DebugContext = createContext(false)

export function useDebug() {
  return useContext(DebugContext)
}

