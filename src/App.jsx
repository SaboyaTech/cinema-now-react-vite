import { CssBaseline } from '@mui/material'
import { Routes, Route, Link } from 'react-router-dom'
import {
	Navbar,
	Profile,
	Movies,
	MovieInformation,
	Actors,
} from '/src/components/index'

import useStyles from './styles'

function App() {
	const { classes } = useStyles()

	return (
		<div className={classes.root}>
			<CssBaseline />
			<Navbar />
			<main>
				<Routes>
					<Route
						exact
						path='/'
						element={<Movies />}
					/>
					<Route
						exact
						path='/movie/:id'
						element={<MovieInformation />}
					/>
					<Route
						exact
						path='/actor/:id'
						element={<Actors />}
					/>
					<Route
						exact
						path='/profile/:id'
						element={<Profile />}
					/>
				</Routes>
			</main>
		</div>
	)
}

export default App
