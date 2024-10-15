// TeamPage.tsx
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Array de times
const teams = [
  { id: 1, name: "FrontEnd", description: "Equipe responsável pelo desenvolvimento de interfaces de usuário." },
  { id: 2, name: "BackEnd", description: "Equipe que gerencia a lógica do servidor e banco de dados." },
  { id: 3, name: "Produto", description: "Equipe de design e gestão de produtos." },
  { id: 4, name: "DevOps", description: "Equipe que cuida da infraestrutura e deployment." },
];

export const TeamPage = () => {
  const navigate = useNavigate();

  // Navega para a página de membros ao clicar em um time
  const handleTeamClick = (teamId: number) => {
    navigate(`/Team/${teamId}`);
  };

  return (
    <Box sx={{ padding: '40px', marginLeft: '250px', height: '100vh', backgroundColor: '#f5f5f5' }}>
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '40px', fontWeight: 'bold', color: '#333' }}>
        Times da Empresa
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {teams.map((team) => (
          <Grid item key={team.id} xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                textAlign: 'center',
                padding: '30px',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 6px 30px rgba(0, 0, 0, 0.2)',
                },
                backgroundColor: '#ffffff',
              }}
              onClick={() => handleTeamClick(team.id)}
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                  {team.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ marginTop: '10px' }}>
                  {team.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
