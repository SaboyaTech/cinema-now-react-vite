import { makeStyles } from 'tss-react/mui'

export default makeStyles()(() => {
	return {
		root: {
			display: 'flex',
			height: '100%',
		},
		toolbar: {
			minHeight: '30px',
		},
		content: {
			flexGrow: 1,
			padding: '2em',
		},
	}
})
