import { NavigationItem } from './_components/NavigationItem'

interface DynamicSectionNavLinkProps {
  activePath: string
  urlPath: string
  label: string
}

export const DynamicSectionNavLink = ({
  activePath,
  urlPath,
  label
}: DynamicSectionNavLinkProps) => (
  <NavigationItem selected={activePath.startsWith(urlPath)} label={label} urlPath={urlPath} />
)
