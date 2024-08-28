import { create } from 'zustand'

interface UIStore {
    sideOpen: boolean
    setSideOpen: (sideOpen: boolean) => void
}

const useUIStore = create<UIStore>(set => ({
    sideOpen: false,

    setSideOpen: (sideOpen: boolean) => { set({ sideOpen })},
}))

export default useUIStore
