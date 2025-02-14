import { render } from '@testing-library/react'
import Page from '../app/page'

/*
it('renders homepage unchanged', () => {
  const { container } = render(<Page />)
  expect(container).toMatchSnapshot()
})
  */

it('renders an async component', async () => {
	render(await Page())
})
it('renders an async component with searchParams', async () => {
	render(await Page({ searchParams: { test: 'test' } }))
})
