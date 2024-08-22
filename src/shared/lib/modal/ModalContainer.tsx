import ReactDOM from 'react-dom'
import { useModal } from '@/shared/lib/modal/useModal'
import { useEffect, useId } from 'react'

type ModalContainerProps = {
	containerId: string
}

export const ModalContainer: React.FC<ModalContainerProps> = ({ containerId }) => {
	const modal = useModal()
	const topComponentInfo = modal.top

	useEffect(() => {
		if (document.getElementById(containerId)) return
		const modalDOM = document.createElement('div')
		modalDOM.id = containerId
		document.body.append(modalDOM)
	}, [])

	if (!topComponentInfo && !document.getElementById(containerId)) return <></>

	console.log('ModalContainer', topComponentInfo)

	return ReactDOM.createPortal(
		<div>
			<topComponentInfo.Component
				{...(topComponentInfo.props as object)}
				key={topComponentInfo.key}
				resolve={topComponentInfo.resolve}
				reject={topComponentInfo.reject}
			/>
		</div>,
		document.getElementById(containerId) as HTMLElement,
	)
}
