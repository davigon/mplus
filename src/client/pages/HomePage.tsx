import React, { useEffect, useState } from "react"
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
  Grid,
  SimpleGrid,
} from "@chakra-ui/react"

export const HomePage = () => {
  const epg = [
    {
      title: "3 días sin comprimir",
      url: "/api/epg/mepg3.xml",
    },
    {
      title: "3 días comprimido",
      url: "/api/epg/mepg3.xml.gz",
    },
  ]

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
              <SimpleGrid columns={{base: 1, md: 2}} gap={6}>
                {epg.map((e) => {
                  return (
                    <EpgCard key={e.title} title={e.title} url={e.url} />
                  )
                })}
              </SimpleGrid>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Box>
  )
}

const EpgCard = ({ title, url }: { title: string; url: string }) => {
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
      onClick={() => handleOnClickEpg(url)}
    >
      <VStack>
        <Heading fontSize={"xl"} textAlign={"center"}>
          {title}
        </Heading>
        <Code>{url}</Code>
      </VStack>
    </Box>
  )
}
