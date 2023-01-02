import React from 'react'
import { RouteObject } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'

import App from '../../components/App'

import HomePage from '../../features/HomePage/HomePage'

export const routes: RouteObject[] = [
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '',
				element: <HomePage />
			}
		]
	}
]
export const router = createBrowserRouter(routes)
