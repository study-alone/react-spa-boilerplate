import { useState } from 'react'
import ReactLogo from '@/assets/react.svg?react'
import ViteLogo from '@/assets/vite.svg?react'
import '@/App.css'
import { useModal } from '@/shared/lib/modal/useModal'
import { TestDialog } from '@/component/modal/TestDialog'
import { Button } from '@mui/material'

function App() {
	const [count, setCount] = useState(0)
	const modal = useModal()

	const openModal = async () => {
		const res = await modal.push('modal1', TestDialog, {
			selectedValue: 'username@gmail.com',
			onClose(value: string) {
				console.log(value)
			},
		})
		window.alert(res)
	}

	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					{/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
					<ViteLogo />
				</a>
				<a href="https://react.dev" target="_blank">
					{/* <img src={reactLogo} className="logo react" alt="React logo" /> */}
					<ReactLogo />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
			<Button onClick={openModal}>open modal</Button>
		</>
	)
}

export default App
