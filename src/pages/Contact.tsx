import { Box, Container, Typography } from '@mui/material';
import SectionIntro from '../components/SectionIntro';
import Hero from '../components/Hero';
import { Meta, Title } from 'react-head';

const Contatti = () => {
  return (
    <>
      <Title>Contatti - Officina 2 Ruote</Title>
      <Meta
        name="description"
        content="Contatta Officina 2 Ruote a Milano per assistenza, prenotazioni e informazioni. Siamo sempre pronti ad aiutarti con la tua bici o motorino."
      />

      {/* Hero */}
      <Hero
        imageUrl="/hero.webp"
        title="Contattaci"
        description="Scopri come raggiungerci e metterti in contatto con noi."
      />

      {/* Intro */}
      <SectionIntro
        text="Hai bisogno di assistenza o vuoi prenotare un intervento? Puoi chiamarci, scriverci o venirci a trovare direttamente in officina. Ecco tutte le informazioni utili."
      />

      {/* Sezione principale con Box impilati */}
      <Container maxWidth="md" sx={{ py: 6 }}>
        {/* Info e orari */}
        <Box
          sx={{
            mb: 6,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Typography variant="h6" gutterBottom>
            Officina 2 Ruote
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            Via Roma 123, 00100 Roma
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            Telefono: <a href="tel:+390612345678">06 123 45678</a>
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            Email: <a href="mailto:info@officina2ruote.it">info@officina2ruote.it</a>
          </Typography>

          <Box mt={4}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
              Orari di apertura
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Lunedì – Venerdì: 9:00 - 13:00 / 14:30 - 18:30
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Sabato: 9:00 - 13:00
            </Typography>
            <Typography variant="body2" color="textSecondary" paragraph>
              Domenica: chiuso
            </Typography>
          </Box>
        </Box>

        {/* Mappa con titolo */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Typography variant="h6" gutterBottom>
            Dove ci trovi
          </Typography>
          <Box
            component="iframe"
            title="Mappa Officina 2 Ruote"
            width="100%"
            height="400"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.1872089146724!2d12.492373315375379!3d41.89025157922154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61a6aa2fc66f%3A0x2624a6dc4c409c93!2sVia%20Roma%2C%20123%2C%2000100%20Roma%20RM!5e0!3m2!1sit!2sit!4v1625606935042!5m2!1sit!2sit"
            sx={{ border: 0, borderRadius: 2 }}
            loading="lazy"
            allowFullScreen
          />
        </Box>
      </Container>
    </>
  );
};

export default Contatti;
