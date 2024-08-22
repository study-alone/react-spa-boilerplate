import {
	Avatar,
	List,
	ListItem,
	ListItemAvatar,
	ListItemButton,
	ListItemText,
	DialogTitle,
	Dialog,
} from '@mui/material'
import { blue } from '@mui/material/colors'
import { useState } from 'react'

const emails = ['username@gmail.com', 'user02@gmail.com']

export interface SimpleDialogProps {
	// open: boolean
	selectedValue: string
	onClose: (value: string) => void
}

export const TestDialog = ({ selectedValue, onClose }: SimpleDialogProps) => {
	const [open, setOpen] = useState(true)
	const handleClose = () => {
		onClose(selectedValue)
		setOpen(false)
	}

	const handleListItemClick = (value: string) => {
		onClose(value)
		setOpen(false)
	}

	return (
		<Dialog onClose={handleClose} open={open}>
			<DialogTitle>Set backup account</DialogTitle>
			<List sx={{ pt: 0 }}>
				{emails.map((email) => (
					<ListItem disableGutters key={email}>
						<ListItemButton onClick={() => handleListItemClick(email)}>
							<ListItemAvatar>
								<Avatar sx={{ bgcolor: blue[100], color: blue[600] }}></Avatar>
							</ListItemAvatar>
							<ListItemText primary={email} />
						</ListItemButton>
					</ListItem>
				))}
				<ListItem disableGutters>
					<ListItemButton autoFocus onClick={() => handleListItemClick('addAccount')}>
						<ListItemAvatar>
							<Avatar></Avatar>
						</ListItemAvatar>
						<ListItemText primary="Add account" />
					</ListItemButton>
				</ListItem>
			</List>
		</Dialog>
	)
}
