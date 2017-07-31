import React from 'react'
import { render } from 'react-dom'
import { CodingDayCount } from './components/CodingDayCount'

window.React = React

render(
	<CodingDayCount total={50}
									home={20}
									out={10}
									goal={100}/>,
	document.getElementById('react-container')
)
