import { useState } from 'react'
import { ModalController } from '@/shared/lib/modal/ModalController'
import { ModalContainer } from '@/shared/lib/modal/ModalContainer'
import { ModalContext } from '@/shared/lib/modal/ModalContext'

type ModalProviderProps = React.PropsWithChildren<{
	containerId: string
}>

export const ModalProvider = ({ children, containerId }: ModalProviderProps) => {
	const flagState = useState(1)
	const [modalController] = useState(() => new ModalController(flagState))

	return (
		<ModalContext.Provider value={modalController}>
			<>{children}</>
			<ModalContainer containerId={containerId} />
		</ModalContext.Provider>
	)
}
