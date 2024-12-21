import React from 'react'
import { Logo } from './Logo'

export default {
	title: 'Components/Logo',
	component: Logo
}

const Template = args => <Logo {...args} />

export const Default = Template.bind({})
Default.args = {
	animate: false,
	colour: '#737373',
	height: '80'
}

export const Animated = Template.bind({})
Animated.args = {
	animate: true,
	colour: '#737373',
	height: '80'
}

export const CustomColor = Template.bind({})
CustomColor.args = {
	animate: false,
	colour: '#ff0000',
	height: '80'
}

export const CustomHeight = Template.bind({})
CustomHeight.args = {
	animate: false,
	colour: '#737373',
	height: '100'
}
