import { ModalContext } from '@/shared/lib/modal/ModalContext'
import { useContext } from 'react'

export const useModal = () => {
	const context = useContext(ModalContext)

	if (!context) {
		throw new Error('Need to register ModalProvider !')
	}

	return context
}
