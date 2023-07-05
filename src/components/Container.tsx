type Color = 'purple' | 'white'
type Variant = 'primary' | 'secondary'

type ContainerProps = {
  children: React.ReactNode | React.ReactNode[]
  bg: `${Color}/${Variant}`
  direction: 'row' | 'col'
  justify: 'center' | 'start' | 'end' | 'between' | 'around'
  align: 'center' | 'start' | 'end' | 'between' | 'around'
  gap?: number
  shadow?: 'md' | 'lg' | 'xl' | '2xl'
}

export default function Container({
  children,
  bg,
  direction,
  justify,
  align,
  gap,
  shadow
}: // shadow
ContainerProps) {
  return (
    <div
      className={`bg-${bg} flex flex-${direction} justify-${justify} items-${align} rounded-2xl ${
        gap ? `gap-${gap}` : ''
      } ${shadow ? `drop-shadow-${shadow}` : ''} py-8 px-4 my-4`}>
      {children}
    </div>
  )
}

// ${shadow ? `drop-shadow-${shadow}` : ''}
