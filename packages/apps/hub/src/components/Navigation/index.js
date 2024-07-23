import style from './Navigation.module.css'

export const Navigation = () => {
	return (
		<nav role='navigation'>
			<div className={style.toggle}>
				<input type='checkbox' />

				<span></span>
				<span></span>
				<span></span>

				<ul className={style.menu}>
					<li>
						<a href='#'>Home</a>
					</li>

					<li>
						<a href='#'>About</a>
					</li>

					<li>
						<a href='#'>How it works</a>
					</li>

					<li>
						<a href='#'>Community</a>
					</li>
					<li>
						<a href='#'>Forum</a>
					</li>
					<li>
						<a href='#'>For Developers</a>
					</li>
					<li>
						<a href='#'>Contact us</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}
