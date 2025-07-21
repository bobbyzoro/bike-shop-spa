// src/components/TeamMemberCard.tsx
import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

interface TeamMemberCardProps {
  name: string;
  role: string;
  description: string;
  image: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, role, description, image }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 'auto', boxShadow: 3 }}>
      <CardMedia component="img" height="280" image={`${import.meta.env.BASE_URL}${image}`} alt={name} />
      <CardContent>
        <Typography variant="h6" fontWeight="bold">
          {name}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          {role}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default TeamMemberCard;
