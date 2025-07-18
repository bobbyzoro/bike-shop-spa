import React from 'react';
import { Title, Meta } from 'react-head';
import { Container, Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';

const services = [
    {
        title: 'Riparazione Biciclette',
        description:
            'Sostituzione camere d’aria, freni, regolazione cambio, centratura ruote e altro ancora. Servizio rapido e professionale.',
        imageUrl: '/services/bike-repair.jpg',
    },
    {
        title: 'Riparazione Motorini',
        description:
            'Diagnostica elettronica, cambio olio, sostituzione freni e molto altro per il tuo scooter o motorino.',
        imageUrl: '/services/scooter-repair.jpg',
    },
    {
        title: 'Manutenzione Periodica',
        description:
            'Offriamo piani di manutenzione preventiva per garantire affidabilità e durata nel tempo del tuo mezzo.',
        imageUrl: '/services/maintenance.jpg',
    },
    {
        title: 'Montaggio Accessori',
        description:
            'Installiamo portapacchi, luci, cavalletti, antifurti e altri accessori per bici e scooter.',
        imageUrl: '/services/accessories.jpg',
    },
    {
        title: 'Consulenza tecnica',
        description:
            'Non sai che pezzo ti serve? Ti aiutiamo a scegliere e ordinare il componente giusto per le tue esigenze.',
        imageUrl: '/services/consulting.jpg',
    },
];

const Services: React.FC = () => {
    return (
        <>
            <Title>I Nostri Servizi - Officina 2 Ruote</Title>
            <Meta
                name="description"
                content="Scopri tutti i servizi di Officina 2 Ruote: riparazioni, manutenzione, accessori e supporto tecnico per biciclette e motorini."
            />

            {/* Hero */}
            <Hero
                imageUrl="/hero-home-min.png"
                title="I nostri servizi"
                description="Offriamo riparazioni, manutenzione e consulenza per biciclette e motorini."
                buttonText="Prenota una Riparazione"
                buttonLink="/contatti"
            />

            {/* Servizi */}
            <Box sx={{ py: 6 }}>
                <Container maxWidth="lg">
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            gap: 4,
                        }}
                    >
                        {services.map((service) => (
                            <Box
                                key={service.title}
                                sx={{
                                    width: {
                                        xs: '100%',       // 1 per riga su mobile
                                        sm: 'calc(50% - 16px)', // 2 per riga su tablet
                                        md: 'calc(33.33% - 16px)', // 3 per riga su desktop
                                    },
                                }}
                            >
                                <ServiceCard {...service} />
                            </Box>
                        ))}
                    </Box>
                </Container>
            </Box>


            {/* CTA finale */}
            <Box sx={{ py: 6, textAlign: 'center', backgroundColor: 'grey.100' }}>
                <Container>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                        Hai bisogno di aiuto?
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                        Contattaci per ricevere assistenza o prenotare il tuo intervento.
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to="/contatti"
                        sx={{ fontSize: '1rem', px: 4, py: 1 }}
                    >
                        Contattaci Ora
                    </Button>
                </Container>
            </Box>
        </>
    );
};

export default Services;
