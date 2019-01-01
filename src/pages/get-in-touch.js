import React from 'react';
import { Heading, Box, Input, Textarea } from 'rebass';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Triangle from '../components/Triangle';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['35vh', '80vh']}
      width={['95vw', '60vw']}
    />

    <Triangle
      color="primary"
      height={['25vh', '35vh']}
      width={['75vw', '60vw']}
      invertX
    />

    <Triangle
      color="secondaryLight"
      height={['10vh', '20vh']}
      width={['50vw', '50vw']}
      invertX
      invertY
    />
  </div>
);

const GetInTouch = () => (
  <Layout>
    <Section.Container id="get-in-touch" Background={Background} css={{ padding: 0 }}>
      <Box w={[160, 200, 300]} m="auto">
        <Heading color="primaryDark" fontSize={['2rem', '4rem', '6rem']}>
          Contact me
        </Heading>
      </Box>
      <Box w={[400, 500, 700]} m="auto" fontSize={['.3rem', '.9rem', '1.6rem']}>
        <form
          style={{
            backgroundColor: '#C8A1E0',
            padding: '.6rem',
            borderRadius: '10px'
          }}
          action="/success"
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <div style={{ marginTop: '.6rem', marginBottom: '.6rem' }}>
            <label htmlFor="name">Who are you?</label>
            <Input type="text" name="name" placeholder="Your name" id="name" />
          </div>
          <div style={{ marginTop: '.6rem', marginBottom: '.6rem' }}>
            <Input type="text" name="email" id="email" placeholder="Your email" />
          </div>
          <div style={{ marginTop: '.6rem', marginBottom: '.6rem' }}>
            <label htmlFor="message">What would you like to tell me?</label>
            <Textarea name="message" id="message" rows="6" />
          </div>
          <ul className="actions">
            <li style={{ listStyle: 'none' }}>
              <Input
                css={{
                  transition: 'background-color .1s ease-out',
                  '&:hover': {
                    backgroundColor: '#A071CE',
                    cursor: 'pointer'
                  }
                }}
                style={{ marginTop: '.6rem', marginBottom: '.6rem' }}
                type="submit"
                value="Send Message"
                className="special"
              />
            </li>
            <li style={{ listStyle: 'none' }}>
              <Input
                css={{
                  transition: 'background-color .6s ease-out',
                  '&:hover': {
                    backgroundColor: '#A071CE',
                    cursor: 'pointer'
                  }
                }}
                style={{ marginTop: '.6rem', marginBottom: '.6rem' }}
                type="reset"
                value="Clear"
              />
            </li>
          </ul>
        </form>
      </Box>
    </Section.Container>
  </Layout>
);

export default GetInTouch;
