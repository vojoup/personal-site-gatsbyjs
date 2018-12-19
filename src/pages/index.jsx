import React from 'react';
import Layout from '../components/Layout';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Projects from '../sections/Projects';

const IndexPage = () => (
  <Layout>
    <Landing />
    <About />
    <Projects />
  </Layout>
);

export default IndexPage;
