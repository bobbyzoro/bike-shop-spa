// src/components/ServiceCard.tsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imageUrl }) => {
  return (
    <Card sx={{ maxWidth: 345, mx: 'auto', boxShadow: 3 }}>
      <CardMedia component="img" height="180" image={`${import.meta.env.BASE_URL}${imageUrl}`} alt={title} />
      <CardContent>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
