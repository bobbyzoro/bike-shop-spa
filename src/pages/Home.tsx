// src/pages/Home.tsx
import React from 'react';
import { Title, Meta } from 'react-head';
import Hero from '../components/Hero';
import ContentSection from '../components/ContentSection';
import { Container, Typography, Box } from '@mui/material';

const Home: React.FC = () => {
  return (
    <>
      <Title>Home - Officina 2 Ruote</Title>
      <Meta
        name="description"
        content="Benvenuti nell'Officina 2 Ruote, specializzati in riparazioni di biciclette e motorini a Milano."
      />

      <Hero
        imageUrl="/hero.webp"
        title="La tua officina di fiducia"
        description="Riparazioni rapide e professionali per biciclette e motorini a Milano."
        buttonText="Prenota una Riparazione"
        buttonLink="contatti"
      />

      <Container maxWidth="md">
        <Box py={6} textAlign="center">
          <Typography variant="h6" component="p" color="textSecondary" sx={{ lineHeight: 1.8 }}>
            Officina 2 Ruote è più di una semplice officina: è un punto di riferimento per chi vuole
            prendersi cura del proprio mezzo con attenzione e competenza. Ogni intervento è eseguito con
            passione, perché sappiamo quanto sia importante potersi muovere in sicurezza e libertà.
          </Typography>
        </Box>
      </Container>

      <ContentSection
        imageUrl="/home/team.webp"
        title="Il nostro team"
        description="Un team di esperti per ogni tua esigenza, sempre pronto ad aiutarti con professionalità e passione."
        ctaLabel="Scopri il Team"
        ctaUrl="chi-siamo"
        imgPosition="right"
      />

      <ContentSection
        imageUrl="/home/servizi.webp"
        title="I nostri servizi"
        description="Offriamo riparazioni, check-up e assistenza personalizzata per mantenere la tua due ruote sempre al top."
        ctaLabel="Scopri i Servizi"
        ctaUrl="servizi"
        imgPosition="left"
      />

      <ContentSection
        imageUrl="/home/contatti.webp"
        title="Hai bisogno di aiuto?"
        description="Per domande o richieste, contattaci subito. Siamo qui per supportarti in ogni momento."
        ctaLabel="Contattaci"
        ctaUrl="contatti"
        imgPosition="right"
      />
    </>
  );
};

export default Home;
