import { GenericPage, metadata } from '@/components/GenericPage'

const pageNameParam = 'l3section'

export default async function Page(props) {
    const params = await props.params;
    return <GenericPage name={params[pageNameParam]} />
}

export const generateMetadata = async props => {
    const params = await props.params;
    return metadata(params[pageNameParam]);
}
