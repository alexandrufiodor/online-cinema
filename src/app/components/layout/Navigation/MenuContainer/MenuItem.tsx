'use client'
import { FC } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import styles from './Menu.module.scss'
import { IMenuItem } from '@/app/components/layout/Navigation/MenuContainer/menu.interface'
import MaterialIcon from '@/app/components/ui/MaterialIcon'
import { usePathname } from 'next/navigation'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const pathname = usePathname()
	return (
		<li
			className={cn({
				[styles.active]: pathname === item.link,
			})}
		>
			<Link href={item.link} legacyBehavior>
				<a>
					<MaterialIcon name={item.icon} />
					<span>{item.title}</span>
				</a>
			</Link>
		</li>
	)
}

export default MenuItem
