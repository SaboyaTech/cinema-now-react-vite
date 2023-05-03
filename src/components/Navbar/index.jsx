import {
	AppBar,
	IconButton,
	Toolbar,
	Drawer,
	Button,
	Avatar,
	useMediaQuery,
} from '@mui/material'

import {
	Menu,
	AccountCircle,
	Brightness4,
	Brightness7,
} from '@mui/icons-material'

import { useTheme } from '@mui/material/styles'

import useStyles from './styles'
import { Link } from 'react-router-dom'

const Navbar = () => {
	const { classes } = useStyles()
	const isMobile = useMediaQuery('(max-width:600px)')
	const theme = useTheme()
	const isAuthenticated = true

	return (
		<>
			<AppBar>
				<Toolbar className={classes.toolbar}>
					{isMobile && (
						<IconButton
							color='inherit'
							edge='end'
							style={{ outline: 'none' }}
							onClick={() => {}}
							className={classes.menuButton}
						>
							<Menu />
						</IconButton>
					)}
					{/* Dark Mode Toggle */}
					<IconButton
						color='inherit'
						sx={{ ml: 1 }}
						onClick={() => {}}
					>
						{theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
					</IconButton>
					{!isMobile && 'Search...'}
					<div>
						{!isAuthenticated ? (
							<Button
								color='inherit'
								onClick={() => {}}
							>
								Login &nbsp; <AccountCircle />
							</Button>
						) : (
							<Button
								color='inherit'
								component={Link}
								to={`/profile/:id`}
								className={classes.linkButton}
								onClick={() => {}}
							>
								{!isMobile && <>My Movies &nbsp;</>}
								<Avatar
									style={{ width: 30, height: 30 }}
									alt='Profile'
									src='https://media.licdn.com/dms/image/D4E03AQFuj7oL2yON0g/profile-displayphoto-shrink_800_800/0/1682797521120?e=2147483647&v=beta&t=gPoqdUx0qp6yVBa2u9tDTrb8PWlqXVGJ063yrMmxJVg'
								/>
							</Button>
						)}
					</div>
					{isMobile && 'Search...'}
				</Toolbar>
			</AppBar>
		</>
	)
}
export default Navbar
