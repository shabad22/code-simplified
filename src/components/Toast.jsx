import { useToast } from '@chakra-ui/react'

export function Toast({ title, desc, type }) {
    const toast = useToast()
    return (
        toast({
            title: title,
            description: desc,
            status: type,
            duration: 9000,
            isClosable: true,
        })
    )
}