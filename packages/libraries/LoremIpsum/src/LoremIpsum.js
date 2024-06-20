import React from 'react'

export const Small = props => (
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla eros, rutrum at justo sed,
		fermentum mattis tortor.
	</p>
)

export const Medium = props => (
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla eros, rutrum at justo sed,
		fermentum mattis tortor. Nulla viverra sit amet neque ut laoreet. Integer vel congue est. Donec
		malesuada tincidunt ante. Suspendisse vel euismod urna. Maecenas nec justo consequat, lobortis
		mauris in, pharetra mauris. Duis varius imperdiet malesuada. Proin mauris justo, sollicitudin
		eget tellus vel, dictum convallis lectus. Suspendisse quis molestie diam. Lorem ipsum dolor sit
		amet, consectetur adipiscing elit. Duis dapibus facilisis ex, ac imperdiet erat tincidunt quis.
		Duis porttitor in est sed finibus. Class aptent taciti sociosqu ad litora torquent per conubia
		nostra, per inceptos himenaeos.
	</p>
)

export const Large = ({ props }) => (
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla eros, rutrum at justo sed,
		fermentum mattis tortor. Nulla viverra sit amet neque ut laoreet. Integer vel congue est. Donec
		malesuada tincidunt ante. Suspendisse vel euismod urna. Maecenas nec justo consequat, lobortis
		mauris in, pharetra mauris. Duis varius imperdiet malesuada. Proin mauris justo, sollicitudin
		eget tellus vel, dictum convallis lectus. Suspendisse quis molestie diam. Lorem ipsum dolor sit
		amet, consectetur adipiscing elit. Duis dapibus facilisis ex, ac imperdiet erat tincidunt quis.
		Duis porttitor in est sed finibus. Class aptent taciti sociosqu ad litora torquent per conubia
		nostra, per inceptos himenaeos. Duis metus elit, volutpat sit amet faucibus ac, tincidunt ut
		arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
		Morbi sagittis ante tempor aliquam fringilla. Nulla id eros vel libero commodo molestie vitae
		sit amet nisl. Nunc vestibulum non turpis et semper. Mauris quis arcu posuere, vehicula felis
		ut, elementum mauris. Pellentesque sed consectetur sapien. Interdum et malesuada fames ac ante
		ipsum primis in faucibus. Etiam eget dictum ligula, sed scelerisque purus. Nullam non mattis
		nisl, a sodales ante. Nullam euismod eget magna id commodo. Vestibulum non risus et purus
		pharetra viverra et ut mauris. Fusce pellentesque, nulla vel tempus imperdiet, risus elit
		rhoncus purus, non laoreet turpis risus eget diam. Pellentesque auctor lorem pulvinar dolor
		sagittis mollis eu sit amet tellus. Sed luctus condimentum semper. Class aptent taciti sociosqu
		ad litora torquent per conubia nostra, per inceptos himenaeos.
	</p>
)

export const LoremIpsum = props => <Medium {...props} />
