import React, { useState } from 'react'
import './styles.css'


import { FaGoogle, FaGithub } from "react-icons/fa"
import { HiLockClosed } from "react-icons/hi"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import { MdEmail } from "react-icons/md"

import {
    ChakraProvider,
    Grid,
    Box,
    Text,
    VStack,
    Input,
    InputLeftElement,
    InputRightElement,
    InputGroup,
    Button,
    Divider,
    Icon,
    useToast
} from '@chakra-ui/react'

import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth"

import { auth } from "../firebase-config"

const CYAN = "#45f3ff"
const DARK_BLUE = "#001623"

function Login() {

    const toast = useToast()
    const navigate = useNavigate()
    
    const [show, setShow] = useState(false)
    const [error, setError] = useState("")

    const [submitDisable, setSubmitDisable] = useState(false)

    const [values, setValues] = useState({
        email: "",
        password: "",
    })

    const handleClick = () => setShow(!show)

    const handleLogin = async () => {
        if (!values.email || !values.password) {
            setError("CS-Bot: Kindly fill all the fields in the form.")
            toast({
                title: "Error",
                description: error,
                status: "error",
                isClosable: true,
                duration: 3500
            })
        }
        // setError("")
        setSubmitDisable(true)
        await signInWithEmailAndPassword(auth, values.email, values.password).then((res) => {
            setSubmitDisable(false)

            toast({
                title: "Success",
                description: `A CS account for ${values.username} has been activated.`,
                status: "loading",
                isClosable: true,
                duration: 3500
            })
            
            navigate("/")
            

        }).catch((err) => {
            console.log(err)
            setSubmitDisable(false)
            setError(`${err.message}`)
            toast({
                title: "Error",
                description: error,
                status: "error",
                isClosable: true,
                duration: 3500
            })
        })
    }

    return (
        <ChakraProvider>
            <Box className='container'>
                <Box textAlign="center" fontSize="xl">
                    <div className='bubbles'>
                        <span style={{ "--i": 11 }}></span>
                        <span style={{ "--i": 12 }}></span>
                        <span style={{ "--i": 24 }}></span>
                        <span style={{ "--i": 10 }}></span>
                        <span style={{ "--i": 14 }}></span>
                        <span style={{ "--i": 23 }}></span>
                        <span style={{ "--i": 18 }}></span>
                        <span style={{ "--i": 16 }}></span>
                        <span style={{ "--i": 19 }}></span>
                        <span style={{ "--i": 20 }}></span>
                        <span style={{ "--i": 22 }}></span>
                        <span style={{ "--i": 25 }}></span>
                        <span style={{ "--i": 18 }}></span>
                        <span style={{ "--i": 21 }}></span>
                        <span style={{ "--i": 15 }}></span>
                        <span style={{ "--i": 13 }}></span>
                        <span style={{ "--i": 26 }}></span>
                        <span style={{ "--i": 17 }}></span>
                        <span style={{ "--i": 13 }}></span>
                        <span style={{ "--i": 28 }}></span>
                        <span style={{ "--i": 11 }}></span>
                        <span style={{ "--i": 12 }}></span>
                        <span style={{ "--i": 24 }}></span>
                        <span style={{ "--i": 10 }}></span>
                        <span style={{ "--i": 14 }}></span>
                        <span style={{ "--i": 23 }}></span>
                        <span style={{ "--i": 18 }}></span>
                        <span style={{ "--i": 16 }}></span>
                        <span style={{ "--i": 19 }}></span>
                        <span style={{ "--i": 20 }}></span>
                        <span style={{ "--i": 22 }}></span>
                        <span style={{ "--i": 25 }}></span>
                        <span style={{ "--i": 18 }}></span>
                        <span style={{ "--i": 21 }}></span>
                        <span style={{ "--i": 15 }}></span>
                        <span style={{ "--i": 13 }}></span>
                        <span style={{ "--i": 26 }}></span>
                        <span style={{ "--i": 17 }}></span>
                        <span style={{ "--i": 13 }}></span>
                        <span style={{ "--i": 28 }}></span>

                    </div>
                    <Grid minH="100vh" justifyContent="center" alignItems="center">
                        <Text bgGradient="linear(to-b, #001623, teal.50, #001632)" bgClip="text" fontSize={100} fontFamily="Rubik" fontWeight={700}>Code Simplified</Text>
                        <VStack spacing={8}>
                            <div className="box">
                                <div className="form">
                                    <div className="title">Login</div>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents='none'
                                            children={<Icon as={MdEmail} boxSize={6} color="gray.500" />}
                                        />
                                        <Input
                                            className='input'
                                            variant='flushed'
                                            placeholder='Email'
                                            focusBorderColor={CYAN}
                                            onChange={(e) => setValues((prev) => ({...prev, email: e.target.value}))}
                                        />
                                    </InputGroup>
                                    <InputGroup size='md'>
                                        <InputLeftElement
                                            pointerEvents='none'
                                            children={<Icon as={HiLockClosed} boxSize={6} color="gray.500" />}
                                        />
                                        <Input
                                            pr='4.5rem'
                                            type={show ? 'text' : 'password'}
                                            placeholder='Password'
                                            variant='flushed'
                                            className='input'
                                            focusBorderColor={CYAN}
                                            onChange={(e) => setValues((prev) => ({...prev, password: e.target.value}))}
                                        />
                                        <InputRightElement width='4.5rem'>
                                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                                                {show ? <Icon as={AiFillEyeInvisible} boxSize={5} color="gray.500" /> : <Icon as={AiFillEye} boxSize={5} color="gray.500" />}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                    <Button disabled={submitDisable} onClick={handleLogin} className='button' padding={4} bgColor={CYAN} color={DARK_BLUE} size='lg'>
                                        Login
                                    </Button>
                                    <div className="link">Dont have an account?
                                        <span>
                                            <Link to="/register">
                                                Register now
                                            </Link>
                                        </span>
                                    </div>
                                    <Divider />
                                    <div className="link">or via social media</div>
                                    <Button
                                        padding={4}
                                        marginBottom={4}
                                        color="green.200"
                                        borderColor="green.400"
                                        variant="outline"
                                    >
                                        <Icon as={FaGoogle} boxSize={6} />&nbsp;
                                        Login using Google
                                    </Button>
                                    <Button
                                        padding={4}
                                        marginBottom={4}
                                        color="purple.200"
                                        borderColor="purple.500"
                                        variant="outline"

                                    >
                                        <Icon as={FaGithub} boxSize={6} />&nbsp;
                                        Login using Github
                                    </Button>
                                </div>
                            </div>
                        </VStack>
                    </Grid>
                </Box>
            </Box>
        </ChakraProvider>
    )
}

export default Login