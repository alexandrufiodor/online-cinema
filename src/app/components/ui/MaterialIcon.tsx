import { FC } from 'react'
import * as MaterialIcons from 'react-icons/md'
import { MaterialIconsName } from '@/app/shared/types/icon.types'

const MaterialIcon: FC<{ name: MaterialIconsName }> = ({ name }) => {
	const IconComponent = MaterialIcons[name]
	// return <IconComponent /> || <MaterialIcons.MdDragIndicator />
	return <IconComponent />
}

export default MaterialIcon
