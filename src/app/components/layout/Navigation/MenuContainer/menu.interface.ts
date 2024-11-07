import { MaterialIconsName } from '@/app/shared/types/icon.types'

export interface IMenuItem {
	icon: MaterialIconsName
	title: string
	link: string
}

export interface IMenu {
	title: string
	items: IMenuItem[]
}
