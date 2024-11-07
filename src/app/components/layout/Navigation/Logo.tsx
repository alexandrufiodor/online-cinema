import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logoImage from '@/app/assets/images/logo.svg'
const Logo: FC = () => {
	return (
		<Link href="/">
			<div className="px-layout mb-10 block">
				<Image
					src={logoImage}
					width={247}
					height={34}
					alt="Online Cinema"
					draggable={false}
				/>
			</div>
		</Link>
	)
}

export default Logo
