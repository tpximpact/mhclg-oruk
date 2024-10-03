import { NavigationItem } from '@/components/LandmarkNav'

export const DynamicSectionNavLink = ({ activePath, urlPath, label }) => (
	<NavigationItem
		selected={activePath.startsWith(urlPath)}
		activePath={activePath}
		label={label}
		urlPath={urlPath}
	/>
)
