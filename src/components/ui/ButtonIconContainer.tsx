import { Button, type ButtonProps } from '@chakra-ui/react'

export function ButtonIconContainer({ children, ...restProps }: ButtonProps) {
  return (
    <>
      <Button variant='ghost' width={{ base: '65px' }} {...restProps}>
        {children}
      </Button>
    </>
  )
}
