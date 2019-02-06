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
import logo from '../images/bwk-logo.jpg';

const IndexPage = () => (
  <Layout>

    <section className="bg-dark text-light p-5">
      <div className="container">
        <div className="row">
          <div className="col-8">
              <h1 className="text-center mt-5">Udogodnienia biurowca w prestiżowej kamienicy w centrum miasta</h1>
              <p className="lead text-center text-secondary">Biuro nie jest oderwane od wizerunku firmy</p>
          </div>
          <div className="col">
            <img src={logo} className="img-fluid"/>
          </div>
        </div>
      </div>
    </section>

   <section className="p-3">
      <div className="container">
        <div className="row mb-4">
          <div className="col">
             <Feature
              title="Prestiżowa lokalizacja"
              text=""
             />
          </div>
          <div className="col">
              <Feature
                title="Klimatyzacja"
                text={`
                  Wszędzie, gdzie istnieje taka możliwość techniczna, 
                  każdy baginet posiada dedykowaną klimatyzację
                `}
              />
          </div>
        </div>
        <div className="row">
          <div className="col">
              
              <Feature
                title="Kącik socjalny"
                text="Każde biuro posiada osobną przestrzeń socialną, z ekspresem, minilodówką"
              />
          </div>
          <div className="col">
              <Feature
                title="Szybki internet"
                text="WIFI w całym biurze, prywatne wirtualne sieci. Dodatkowe okablowanie(*) "
              />
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
