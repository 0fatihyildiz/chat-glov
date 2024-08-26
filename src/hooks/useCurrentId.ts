import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function useCurrentId() {
	const { pathname } = useLocation()
	const [currentId, setCurrentId] = useState<string | null>(null)

	useEffect(() => {
		const id = pathname.split('/')[1]
		setCurrentId(id)
	}, [pathname])

	return currentId
}

export default useCurrentId
