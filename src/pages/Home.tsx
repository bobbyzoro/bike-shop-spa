// src/pages/Home.tsx
import React from 'react';
import { Title, Meta } from 'react-head';
import Hero from '../components/Hero';
import ContentSection from '../components/ContentSection';

const Home: React.FC = () => {
  return (
    <>
      <Title>Home - Officina 2 Ruote</Title>
      <Meta
        name="description"
        content="Benvenuti nell'Officina 2 Ruote, specializzati in riparazioni di biciclette e motorini a Milano."
      />

      <Hero
        imageUrl="/hero-home-min.png"
        title="La tua officina di fiducia"
        description="Riparazioni rapide e professionali per biciclette e motorini a Milano."
        buttonText="Prenota una Riparazione"
        buttonLink="/contatti"
      />

      <ContentSection
        imageUrl="/team-min.png"
        title="Il nostro team"
        description="Un team di esperti per ogni tua esigenza, sempre pronto ad aiutarti con professionalità e passione."
        ctaLabel="Scopri il Team"
        ctaUrl="/chi-siamo"
        imgPosition="right"
      />

      <ContentSection
        imageUrl="/services-min.png"
        title="I nostri servizi"
        description="Offriamo riparazioni, check-up e assistenza personalizzata per mantenere la tua due ruote sempre al top."
        ctaLabel="Scopri i Servizi"
        ctaUrl="/servizi"
        imgPosition="left"
      />

      <ContentSection
        imageUrl="/contact.jpg"
        title="Hai bisogno di aiuto?"
        description="Per domande o richieste, contattaci subito. Siamo qui per supportarti in ogni momento."
        ctaLabel="Contattaci"
        ctaUrl="/contatti"
        imgPosition="right"
      />
    </>
  );
};

export default Home;
