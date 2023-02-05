import React from 'react'
import PageContent from '../components/PageContent'
import { useRouteError } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'

const Error = () => {
	const error = useRouteError()

	let title = 'An error occured'
	let message = 'Something went wrong'

	if (error.status === 500) {
		// message = JSON.parse(error.data).message
		message = error.data.message
	}
	if (error.status === 404) {
		title = 'not found'
		message = 'Could not find rosource of page'
	}

	return (
		<>
			<MainNavigation />
			<PageContent title={title}>
				<p>{message}</p>
			</PageContent>
		</>
	)
}

export default Error
