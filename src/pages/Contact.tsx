import React from 'react';
import { Title, Meta } from 'react-head';
import { Box, Container, Typography, Button } from '@mui/material';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  return (
    <>
      <Title>Contattaci - Officina 2 Ruote</Title>
      <Meta
        name="description"
        content="Hai bisogno di assistenza per la tua bici o motorino? Contattaci tramite email, telefono o vieni a trovarci in officina!"
      />

      {/* Hero */}
      <Hero
        imageUrl="/hero.webp"
        title="Siamo qui per aiutarti"
        description="Hai bisogno di informazioni o vuoi prenotare un intervento? Contattaci subito."
        buttonText="Scrivici ora"
        buttonLink="mailto:info@officina2ruote.it"
      />

      {/* Sezione Informazioni */}
      <Box sx={{ py: 6 }}>
        <Container maxWidth="md">
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
            Come Contattarci
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            📍 <strong>Indirizzo:</strong> Via Milano 123, 20100 Milano (MI)
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            📧 <strong>Email:</strong>{' '}
            <a href="mailto:info@officina2ruote.it">info@officina2ruote.it</a>
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            ☎️ <strong>Telefono:</strong> 02 12345678
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            🕒 <strong>Orari di apertura:</strong>
            <br />
            Lun–Ven: 9:00–13:00 / 14:30–18:30 <br />
            Sabato: 9:00–13:00 <br />
            Domenica: chiuso
          </Typography>
        </Container>
      </Box>

      {/* CTA Finale */}
      <Box sx={{ textAlign: 'center', py: 6, backgroundColor: '#f7f7f7' }}>
        <Container maxWidth="sm">
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
            Hai dubbi o vuoi prenotare?
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Scrivici subito o passa a trovarci, il nostro team è a tua disposizione.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/"
            sx={{ fontSize: '1rem' }}
          >
            Torna alla Home
          </Button>
        </Container>
      </Box>
    </>
  );
};

export default Contact;
