import { PATHS } from '@/util/paths'

export const NAVIGATION_ITEMS = [
	{
		target: '',
		text: 'Home'
	},
	{
		target: PATHS.about,
		text: 'About Open Referral UK'
	},
	{
		target: PATHS.how,
		text: 'How it works'
	},
	{
		target: PATHS.community,
		text: 'Community'
	},
	{
		target: PATHS.developer,
		text: 'For developers'
	},
	{
		target: 'https://forum.openreferral.org',
		text: 'Forum',
		offsite: true
	},
	{
		target: PATHS.contact,
		text: 'Contact us'
	}
]
