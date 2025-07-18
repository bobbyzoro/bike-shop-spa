// src/theme/theme.ts
import { createTheme } from '@mui/material/styles';

// Definire il tema personalizzato
const theme = createTheme({
  palette: {
    primary: {
      main: '#0d47a1', // Blu scuro per il colore principale
    },
    secondary: {
      main: '#ff4081', // Rosa per il colore secondario
    },
    background: {
      default: '#f4f6f8', // Colore di sfondo per il sito
    },
    text: {
      primary: '#212121', // Testo principale in un grigio scuro
      secondary: '#757575', // Testo secondario in grigio
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Font di default
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.75rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
  },
  shape: {
    borderRadius: 8, // Raggio di bordo per gli elementi
  },
  spacing: 8, // Spaziatura di base (8px)
});

export default theme;
