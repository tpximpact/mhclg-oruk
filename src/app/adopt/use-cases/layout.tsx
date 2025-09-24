import { PageMargin } from '@/components/PageMargin'
import { ReactNode } from 'react'

export default function CatalogueLayout({ children }: { children: ReactNode }) {
	return <PageMargin>{children}</PageMargin>
}