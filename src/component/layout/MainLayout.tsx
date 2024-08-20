import { Box } from '@mui/material'
import { Lnb } from '@/component/Lnb'

type MainLayoutProps = React.PropsWithChildren

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	return (
		<Box>
			<Lnb />
			{children}
		</Box>
	)
}
