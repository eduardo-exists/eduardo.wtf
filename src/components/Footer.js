import React from 'react'
import styled from 'styled-components'

import { Icon, Link } from 'src/components'

const Wrapper = styled.footer`
	color: var(--dark);
`

const Text = styled.p`
	margin: 20rem;
	text-align: center;
	a {
		color: inherit !important;
		text-decoration: none;
	}
`

const year = new Date().getFullYear()

const Footer = () => (
	<Wrapper>
		<Text>
			Copyright {year} Eduardo Escoto •{' '}
			<Link to="https://github.com/eduardo-exists/eduardo.wtf">
				View source code <Icon name="GitHub" />
			</Link>
		</Text>
	</Wrapper>
)

export default Footer
