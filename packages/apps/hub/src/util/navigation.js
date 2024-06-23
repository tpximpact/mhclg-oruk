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
		target: PATHS.developers,
		text: 'For developers'
	},
	{
		target: 'https://forum.openreferral.org',
		text: 'forum',
		offsite: true
	},
	{
		target: PATHS.contact,
		text: 'Contact us'
	}
]
