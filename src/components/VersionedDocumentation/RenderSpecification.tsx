'use client'
import dynamic from 'next/dynamic'
const JSONLiteral = dynamic(() => import('./_components/JSONLiteral'))

export const RenderSpecification = ({ data }: { data: any }) => <JSONLiteral data={data} />
