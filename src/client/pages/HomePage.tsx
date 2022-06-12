import React from "react"
import {
  Box,
  Text,
  Flex,
  Heading,
  HStack,
  Stack,
  useColorModeValue,
  VStack,
  Code,
  useToast,
} from "@chakra-ui/react"

export const HomePage = () => {
  const toast = useToast()
  
  const handleOnClickEpg = (url: string) => {
    toast.closeAll()
    navigator.clipboard.writeText(url)
    toast({
      title: "Enlace copiado",
      description: `Se ha copiado el enlace al portapapeles`,
      status: "info",
      duration: 3000,
      isClosable: true,
      position: "bottom-right",
    })
  }

  return (
    <Box className="Home" bg={useColorModeValue("gray.50", "gray.900")}>
      <Flex h={"calc(100vh - 8rem)"} align={"center"} justify={"center"}>
        <Stack spacing={8} mx={"auto"} maxW={"xxl"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Programación
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              toda la programación de mplus 📺
            </Text>
          </Stack>
          <Box p={8}>
            <Stack spacing={4}>
              <HStack spacing={4}>
                <Box
                  rounded={"lg"}
                  bg={useColorModeValue("white", "gray.800")}
                  _hover={{
                    bg: useColorModeValue("gray.100", "gray.700"),
                    cursor: "pointer",
                    transitionProperty: "common",
                    transitionDuration: "normal",
                  }}
                  boxShadow={"base"}
                  p={6}
                  onClick={() =>
                    handleOnClickEpg(
                      "https://mplus.up.railway.app/api/epg/mepg3.xml"
                    )
                  }
                >
                  <VStack>
                    <Heading fontSize={"xl"} textAlign={"center"}>
                      3 días sin comprimir
                    </Heading>
                    <Code>https://mplus.up.railway.app/api/epg/mepg3.xml</Code>
                  </VStack>
                </Box>
                <Box
                  rounded={"lg"}
                  bg={useColorModeValue("white", "gray.800")}
                  _hover={{
                    bg: useColorModeValue("gray.100", "gray.700"),
                    cursor: "pointer",
                    transitionProperty: "common",
                    transitionDuration: "normal",
                  }}
                  boxShadow={"base"}
                  p={6}
                  onClick={() =>
                    handleOnClickEpg(
                      "https://mplus.up.railway.app/api/epg/mepg3.xml.gz"
                    )
                  }
                >
                  <VStack>
                    <Heading fontSize={"xl"} textAlign={"center"}>
                      3 días comprimido
                    </Heading>
                    <Code>
                      https://mplus.up.railway.app/api/epg/mepg3.xml.gz
                    </Code>
                  </VStack>
                </Box>
              </HStack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Box>
  )
}
