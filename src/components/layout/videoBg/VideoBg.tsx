import { useEffect, useRef, useState } from 'react'

import { weatherBg } from './weatherbg.helper'

interface IVideoBg {
	weather?: string
}

export function VideoBg({ weather }: IVideoBg) {
	const [src, setSrc] = useState<string>('')
	const videoRef = useRef<HTMLVideoElement>(null)
	useEffect(() => {
		const updateWeatherBg = () => {
			if (!weather) {
				console.error('Погодні данні відсутні')
				setSrc('')
				return
			}
			const bg = weatherBg[weather]
			if (bg) {
				setSrc(bg)
			} else {
				console.error('Невідомий тип погоди: ', weather)
				setSrc('')
			}
		}
		updateWeatherBg()
		if (videoRef.current) {
			videoRef.current.load()
		}
	}, [src, weather])

	return (
		<video
			ref={videoRef}
			autoPlay
			playsInline
			loop
			muted
		>
			<source
				src={`.${src}`}
				type='video/mp4'
			/>
			Your browser does not support the video tag.
		</video>
	)
}
