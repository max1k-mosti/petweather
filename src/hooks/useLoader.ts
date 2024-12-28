import { useEffect, useState } from 'react'

export const useLoader = () => {
	const [showLoader, setShowLoader] = useState<boolean>(true)

	useEffect(() => {
		const TIMER = setTimeout(() => {
			setShowLoader(false)
		}, 1000)
		return () => clearTimeout(TIMER)
	}, [])
	return { showLoader }
}
