import React from 'react';
import { Link } from 'gatsby';
import 'scss/bwk.scss'
import Layout from 'components/Layout';
import Feature from 'components/Feature';
import OfficeGallery from 'components/OfficeGallery';
import OfficeDetails from 'components/OfficeDetails';
import Footer from 'components/Footer';
import ButtonBar from 'components/ButtonBar';
import {Placeholder} from 'components/UI';

const IndexPage = () => (
  <Layout>

    <section className="bg-dark text-light p-5">
      <div className="container">
        <div className="row">
          <div className="col-8">
              <h1 className="text-center">Udogodnienia biurowca w prestiżowej kamienicy w centrum miasta</h1>
          </div>
          <div className="col">
            <Placeholder/>
          </div>
        </div>
      </div>
    </section>

   <section className="p-3">
      <div className="container">
        <div className="row mb-4">
          <div className="col">
              <Feature/>
          </div>
          <div className="col">
              <Feature/>
          </div>
        </div>
        <div className="row">
          <div className="col">
              <Feature/>
          </div>
          <div className="col">
              <Feature/>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-dark text-light p-5">
      <div className="container">
        <div className="row">
          <div className="col-8">
            <OfficeGallery/>
          </div>
          <div className="col d-flex flex-column">
            <OfficeDetails/>
          </div>
        </div>
      </div>
    </section>

    <section className="p-3">
      <div className="container">
        ...
      </div>
    </section>

    <section className="bg-dark text-light">
      <div className="container">
        <Footer/>
      </div>
      <ButtonBar/>
    </section>

  </Layout>
);
export default IndexPage
