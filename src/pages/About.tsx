// src/pages/About.tsx
import React from 'react';
import { Box, Container } from '@mui/material';
import TeamMemberCard from '../components/TeamMemberCard';
import CompanyValues from '../components/CompanyValues';
import { Title, Meta } from 'react-head';
import Hero from '../components/Hero';
import SectionIntro from '../components/SectionIntro';

const teamMembers = [
  {
    name: 'Luca Bianchi',
    role: 'Meccanico esperto',
    description: '20 anni di esperienza in riparazioni di motorini e biciclette da corsa.',
    image: '/team/luca.webp',
  },
  {
    name: 'Sara Verdi',
    role: 'Accettazione & Ricambi',
    description: 'Gestisce l’accoglienza clienti e il magazzino ricambi con grande precisione.',
    image: '/team/sara.webp',
  },
  {
    name: 'Mario Rossi',
    role: 'Tecnico Elettrico',
    description: 'Specializzato in impianti elettrici e diagnosi elettroniche.',
    image: '/team/mario.webp',
  },
];

const About: React.FC = () => {
  return (
    <>
      <Title>Chi Siamo - Officina 2 Ruote</Title>
      <Meta name="description" content="Scopri chi siamo e come l'Officina 2 Ruote può aiutarti con la riparazione di biciclette e motorini." />

      {/* Sezione Hero */}
      <Hero
        imageUrl="/hero.webp" // URL dell'immagine di sfondo o path relativo
        title="Esperti al tuo servizio"
        description="Un team dedito nel portare soluzioni per ogni tua esigenza."
      />

      <SectionIntro
        title="Il nostro team"
        text="Una squadra affiatata, con anni di esperienza e una vera passione per le due ruote."
      />

      <Box>
        <Container maxWidth="lg">
          {/* Team */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 4,
              justifyContent: 'center',
              mt: 4,
            }}
          >
            {teamMembers.map((member) => (
              <Box
                key={member.name}
                sx={{
                  flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 32px)', md: '1 1 calc(33.33% - 32px)' },
                  maxWidth: 360,
                }}
              >
                <TeamMemberCard {...member} />
              </Box>
            ))}
          </Box>

          {/* Valori aziendali */}
          <CompanyValues />
        </Container>
      </Box>
    </>
  );
};

export default About;
