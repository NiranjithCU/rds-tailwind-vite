import { rdsWidth, rdsHeight, rdsTextColor } from '../../utils/tailwindClasses'

export interface IconProps {
  icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>
  color?: 'black' | 'white' | 'red' | 'grey' | 'dark-grey' | 'green' | 'yellow'
  size?: '4' | '5' | '6' | '7' | '8' | '12' | '16' | '20'
}

export const Icon = ({ icon, color, size = '8' }: IconProps) => {
  const Iconic = icon
  const hasColor = color ? rdsTextColor[color] : ''

  return <Iconic className={`${hasColor} ${rdsWidth[size]} ${rdsHeight[size]} `} aria-hidden={true} />
}

Icon.displayName = 'Icon'
