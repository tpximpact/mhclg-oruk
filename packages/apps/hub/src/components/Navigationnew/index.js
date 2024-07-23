import style from './Navigation.module.css'

export const Navigation = () => {
	return (
		<nav role='navigation'>
			<div className={style.toggle}>
				<label for='cb'>Menu</label>
				<input id='cb' type='checkbox' />

				<span></span>
				<span></span>
				<span></span>

				<ul className={style.menu}>
					<li>
						<a href='#'>Home</a>
					</li>

					<li>About</li>

					<li>How it works</li>

					<li>Community</li>
					<li>
						<a href='#'>Forum</a>
					</li>
					<li>
						<a href='#'>For Developers</a>
					</li>
					<li>Contact us</li>
				</ul>
			</div>
		</nav>
	)
}
