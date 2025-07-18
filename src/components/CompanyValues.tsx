// src/components/CompanyValues.tsx
import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import HandshakeIcon from '@mui/icons-material/Handshake';
import BuildIcon from '@mui/icons-material/Build';

interface ValueItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const values: ValueItem[] = [
  {
    icon: <BuildIcon fontSize="large" color="primary" />,
    title: 'Competenza',
    description: 'Esperienza e formazione costante per offrire sempre la migliore qualità.',
  },
  {
    icon: <HandshakeIcon fontSize="large" color="primary" />,
    title: 'Affidabilità',
    description: 'Siamo trasparenti, puntuali e sempre al fianco del cliente.',
  },
  {
    icon: <EmojiObjectsIcon fontSize="large" color="primary" />,
    title: 'Innovazione',
    description: 'Utilizziamo strumenti e tecniche moderne per diagnosi e riparazioni efficienti.',
  },
];

const CompanyValues: React.FC = () => {
  return (
    <Box sx={{ mt: 10, textAlign: 'center' }}>
      <Typography variant="h5" fontWeight="bold" mb={4}>
        I nostri valori
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 4,
          justifyContent: 'center',
          alignItems: 'stretch',
          flexWrap: 'wrap',
        }}
      >
        {values.map((value) => (
          <Paper
            key={value.title}
            elevation={3}
            sx={{
              p: 4,
              flex: { xs: '1 1 100%', sm: '1 1 30%' },
              minWidth: '260px',
              maxWidth: '350px',
              mx: 'auto',
            }}
          >
            <Box mb={2}>{value.icon}</Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              {value.title}
            </Typography>
            <Typography variant="body2">{value.description}</Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default CompanyValues;
