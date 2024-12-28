'use client'

import { Search, Thermometer } from 'lucide-react'
import { Dispatch, SetStateAction, forwardRef } from 'react'

import styles from './SearchForm.module.scss'

interface SearchformProps {
	setCity: Dispatch<SetStateAction<string>>
	isSearch: boolean
	setIsSearch: Dispatch<SetStateAction<boolean>>
}

export const SearchForm = forwardRef<HTMLInputElement, SearchformProps>(
	({ setCity, setIsSearch }, ref) => {
		const handleInputChange = (
			event: React.ChangeEvent<HTMLInputElement>
		) => {
			const value = event.target.value.trim()
			setCity(value)
		}

		return (
			<>
				<form className={styles.SearchForm}>
					<Thermometer
						width={32}
						height={32}
						stroke='#fff'
					/>
					<input
						type='text'
						placeholder='Київ, Україна'
						onChange={handleInputChange}
						onClick={() => setIsSearch(true)}
						autoFocus
						ref={ref}
					/>
					<Search
						width={18}
						height={18}
						stroke='#fff'
					/>
				</form>
			</>
		)
	}
)
