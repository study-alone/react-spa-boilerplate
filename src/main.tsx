import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ModalProvider } from '@/shared/lib/modal/ModalProvider'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ModalProvider containerId="modal-contaniner">
			<App />
		</ModalProvider>
	</StrictMode>,
)
