import React from 'react'
import Icon, { CircledIcon, ICON_TYPE } from './index'

export default {
	title: 'Components/Icon',
	component: Icon
}

const Template = args => <Icon {...args} />

export const Default = Template.bind({})
Default.args = {
	size: 24,
	colour: 'black',
	weight: 2,
	icon: ICON_TYPE.ADD
}

export const Circled = args => <CircledIcon {...args} />
Circled.args = {
	size: 24,
	colour: 'black',
	weight: 2,
	icon: ICON_TYPE.ADD,
	bg: 'lightgray',
	border: '1px solid black'
}
