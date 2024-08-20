import ReactDOM from 'react-dom'
import { useModal } from '@/shared/lib/modal/useModal'
import { useEffect, useId } from 'react'

type ModalContainerProps = {
	containerId: string
}

export const ModalContainer: React.FC<ModalContainerProps> = ({ containerId }) => {
	const tempId = useId()
	const modal = useModal()
	const { Component, reject, resolve, ...restProps } = modal.top

	if (!Component) return <></>

	useEffect(() => {
		if (window.document.getElementById(containerId)) return
		const modalDOM = document.createElement('div')
		modalDOM.id = containerId || tempId
		document.body.append(modalDOM)
	}, [])

	return ReactDOM.createPortal(
		<div>
			<Component resolve={resolve} reject={reject} {...restProps} />
		</div>,
		window.document.getElementById('containerId') as HTMLElement,
	)
}
