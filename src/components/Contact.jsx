import React, { useRef, useState } from 'react';
import styled from 'styled-components'
import styles from '../style';
import Button from "./Button"
import { bill } from "../assets";


const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
`
const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: space-between;
gap: 50px;

`
const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
@media only screen and (max-width: 768px){
  justify-content: center;
}
`
const Title = styled.h1`
font-weight: 200;

`
const Form = styled.form`
width: 500px;
display: flex;
flex-direction: column;
gap: 25px;

@media only screen and (max-width: 768px){
  width:300px;
}

`
const Input = styled.input`
padding: 20px;
backgound-color: #e8e6e6;
border: none;
border-radius: 5px;


`
const TextArea = styled.textarea`
padding: 20px;
border: none;
border-radius: 5px;
backgound-color: #e8e6e6

`

const Right = styled.div`
flex: 1;
@media only screen and (max-width: 768px){
  display:none;
}
`
 
const Contact = () => {
  const ref = useRef()
const [success, setSuccess] = useState(null)
  return (
    <Section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding}
    sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow
    `}>
      <Container>
        <Left>
          <Form id="contact" className=" flex flex-1 sm:mr-8 ml-20 w-[20px]" >
            <Title className={`${styles.heading2}`}>CONTACT US</Title>
            <Input placeholder='Name' name="name" />
            <Input placeholder='Email' name='email' />
            <TextArea placeholder='What Your Message!'name='message' rows={10}/>
            <Button/>
            {success && "Your Message has been Sent. Dont Worry I'll Contact You :)"}
          </Form>
        </Left>
        <div class="w-full md:w-1/2 mt-8 md:mt-0 sm:hidden ">
    <img class="w-full h-auto my-50" src={bill} alt="About Us Image"/>
  </div>
      </Container>
    </Section>
  )
}

export default Contact