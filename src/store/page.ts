import {create} from 'zustand'

type Page = {
	page : number,
	setPage : (number : number) => void
}

const usePage = create<Page>()((set) => ({
	page : 0,
	setPage: (number : number) => set({page : number})
}))

export default usePage