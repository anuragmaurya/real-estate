
import { Box, Flex, Text } from '@mantine/core'
import React from 'react'

const Home = () => {


    // const [isActive, setIsActive] = useState<boolean>(false);
    // const [isActiveState, setIsActiveState] = useState<boolean>(false);
    // // const [isScrolled, setIsScrolled] = useState<boolean>(false);

    // const toggleMenu = () => setIsActive((prev) => !prev);

    return (
            <Box className="attach-image bg-black opacity-100 h-[100%]" p={20}>
                <Flex justify={"center"} c={"#fff"} direction={"column"} className='content' pos={"relative"} h={"100%"} styles={{root: {zIndex: 2}}}>
                <Text  fw={500} size='xl' ta={"center"} >Discover Your Dream Home with Us</Text>
                <Text fw={500} size='100px' ta={"center"} mt={50} td={"center"} p={"0 100"}>Find the Perfect Property for Your Lifestyle</Text>

                </Flex>
            </Box>
    )
}

export default Home