// src/components/ContentSection.tsx
import React from 'react';
import { Box, Button, Typography } from '@mui/material';

interface ContentSectionProps {
  imageUrl: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaUrl: string;
  imgPosition?: 'left' | 'right';
}

const ContentSection: React.FC<ContentSectionProps> = ({
  imageUrl,
  title,
  description,
  ctaLabel,
  ctaUrl,
  imgPosition = 'right',
}) => {
  const isImageLeft = imgPosition === 'left';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: isImageLeft ? 'row' : 'row-reverse' },
        alignItems: 'center',
        gap: 4,
        my: 6,
        px: { xs: 2, md: 6 },
      }}
    >
      {/* Immagine */}
      <Box
        component="img"
        src={imageUrl}
        alt={title}
        sx={{
          width: { xs: '100%', md: '50%' },
          borderRadius: 2,
          boxShadow: 3,
          objectFit: 'cover',
        }}
      />

      {/* Testo e bottone */}
      <Box sx={{ maxWidth: { xs: '100%', md: '50%' } }}>
        <Typography variant="h4" fontWeight="bold" mb={2}>
          {title}
        </Typography>
        <Typography variant="body1" mb={4} color="text.secondary">
          {description}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href={ctaUrl}
          size="large"
        >
          {ctaLabel}
        </Button>
      </Box>
    </Box>
  );
};

export default ContentSection;
