import { FC } from 'react'
import styles from './Navigation.module.scss'
import Logo from '@/app/components/layout/Navigation/Logo'
import MenuContainer from '@/app/components/layout/Navigation/MenuContainer/MenuContainer'

const Navigation: FC = () => {
	return (
		<div className={styles.navigation}>
			<Logo />
			<MenuContainer />
		</div>
	)
}

export default Navigation
