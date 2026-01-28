import { Logo } from './Logo'

export default {
  title: 'Hub/Logo',
  component: Logo
}

export const Basic = () => <Logo />

export const ColourLiteralRed = () => <Logo colour='#f00' />

export const ColourVariableMint = () => <Logo colour='var(--colour-mint)' />
