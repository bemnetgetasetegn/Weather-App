import { create } from "zustand"


interface QueryStore {
    q: string
    Query: (location: string) => void
}

const querySetter = create<QueryStore>(set => ({
    q: 'Addis Abeba',
    Query: (location: string) => set(() => ({q:location}))
}))

export default querySetter