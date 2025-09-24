import { PageMargin } from '@/components/PageMargin'
import { CSSProperties, ReactNode } from 'react'

export default function CatalogueLayout({ children }: { children: ReactNode }) {
	return <PageMargin>{children}</PageMargin>
}

export const headerStyle: CSSProperties = {
	fontSize: '1.4rem'
}