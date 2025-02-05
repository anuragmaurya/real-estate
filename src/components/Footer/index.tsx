'use client'
import { Anchor, Divider, Grid, Text, Title } from '@mantine/core'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <footer className=''>
            <Grid p={"20px 10px"}>
                <Grid.Col span={3}>
                    <Image
                        src="/assets/home/footer-logo.svg"
                        alt="PollPe Form Logo"
                        className="w-32 h-auto"
                        width={32}
                        height={20}
                    />
                </Grid.Col>
                <Grid.Col span={3}>
                    <Title order={2} fw={500} >About Us</Title>
                    <Text>At Real Estate, we pride ourselves on being a trusted and reputable name in the real estate industry with years of experience.</Text>
                </Grid.Col>
                <Grid.Col span={3}>
                    <Title>Contact Info</Title>
                    <Anchor href="https://www.google.com/maps/place/Satya+The+Hive/@28.4707914,76.9600602,17z/data=!3m1!4b1!4m6!3m5!1s0x390d19b52a7c4b77:0xd0f05709e7e96940!8m2!3d28.4707914!4d76.9626351!16s%2Fg%2F11dfgszppl?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D">
                        Satya The Hive, Dwarka Expy, Sector 102, Gurugram, Haryana 122505
                    </Anchor>

                </Grid.Col>
                <Grid.Col span={3}>
                    <Title> Property Search</Title>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quae eligendi asperiores! Totam voluptatem facilis ad eligendi nesciunt fuga eum atque dolore minus eos possimus molestiae iste nam, dolorem commodi.</Text>
                    </Grid.Col>
            </Grid>
            <Divider my={"md"}/>

            <p>Copyright &copy; {new Date().getFullYear()} Real Estate Company</p>
        </footer>
    )
}

export default Footer