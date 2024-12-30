'use client'
import dynamic from 'next/dynamic';
const JSONLiteral = dynamic(() => import('../JSONLiteral'))

export const RenderSpecification =  ({
	data
}) => <JSONLiteral data={data} />
