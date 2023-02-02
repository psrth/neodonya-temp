import { Flex, Image, Text, Heading, Button } from "@chakra-ui/react";

function Landing() {
  return (
    <>
      <Flex
        flexDir="column"
        background="black"
        height="100vh"
        width="100vw"
        alignItems="center"
        overflow="hidden"
      >
        <Flex
          flexDir="row"
          width="80vw"
          mt="50px"
          justifyContent="space-between"
          alignItems="center"
          zIndex="10"
        >
          <Image
            src="https://i.imgur.com/9K0JKoe.png"
            height={["30px", "30px", "50px", "50px", "50px"]}
          />
        </Flex>

        <Flex
          width="800px"
          height="800px"
          bg="conic-gradient(from 180deg at 50% 50%, #1400FF 0deg, #C215FF 133.12deg, #FF0000 360deg)"
          filter="blur(150px)"
          borderRadius="1000"
          mr="-1200px"
          mt="-300px"
          zIndex="0"
        />

        <Flex flexDir="column" width="80vw" mt="-350px">
          {/* font-family: ethnocentric, sans-serif; font-weight: 700; font-style:
          normal; */}
          <Heading
            fontFamily="Transducer"
            fontWeight="700"
            fontSize={["70px", "70px", "100px", "100px", "100px"]}
            lineHeight="1"
            width={["80vw", "80vw", "800px", "800px", "800px"]}
            color="white"
          >
            neodonya
          </Heading>
          <Text
            fontSize={["16px", "16px", "20px", "20px", "20px"]}
            lineHeight="1.7"
            mt="20px"
            width={["80vw", "80vw", "750px", "750px", "750px"]}
            color="white"
            fontFamily="Manrope"
          >
            Neodonya provides custom metaverse solutions for corporates,
            allowing you to create and maintain your own virtual world.
            Experience state-of-the-art design, cutting-edge technology and
            unbeatable customer service. Unlock the potential of the metaverse
            with Neodonya.
          </Text>
          <Button
            width="150px"
            background="linear-gradient(86.63deg, #BF0AFF 0%, #940BFF 52.43%, #1D26FF 100%)"
            _hover={{
              background:
                "linear-gradient(86.63deg, rgba(191, 10, 255, 0.5) 0%, rgba(148, 11, 255, 0.5) 52.43%, rgba(29, 38, 255, 0.5) 100%)",
            }}
            borderRadius="20px"
            color="white"
            fontSize="16px"
            fontWeight="700"
            mt="30px"
            textTransform="uppercase"
            as="a"
            fontFamily="Manrope"
            href="mailto:narayanan@neodonya.com"
            target="_blank"
            rel="noreferrer"
          >
            Contact Us
          </Button>
        </Flex>
      </Flex>
    </>
  );
}

export default Landing;
