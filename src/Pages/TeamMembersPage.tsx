// TeamMembersPage.tsx
import { Box, Typography, Card, CardContent, Avatar, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';

// Dados fictícios dos membros por time
const teamMembersByTeam: { [key: number]: { id: number, name: string, role: string, avatarUrl: string }[] } = {
  1: [
    { id: 1, name: "João Silva", role: "Desenvolvedor Frontend", avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg" },
    { id: 2, name: "Ana Costa", role: "UX/UI Designer", avatarUrl: "https://randomuser.me/api/portraits/women/1.jpg" },
  ],
  2: [
    { id: 3, name: "Maria Oliveira", role: "Desenvolvedora Backend", avatarUrl: "https://randomuser.me/api/portraits/women/2.jpg" },
    { id: 4, name: "Carlos Silva", role: "DevOps Engineer", avatarUrl: "https://randomuser.me/api/portraits/men/2.jpg" },
  ],
  3: [
    { id: 5, name: "Marcos Souza", role: "Gerente de Produto", avatarUrl: "https://randomuser.me/api/portraits/men/3.jpg" },
    { id: 6, name: "Paula Pereira", role: "Designer de Produto", avatarUrl: "https://randomuser.me/api/portraits/women/3.jpg" },
  ],
  4: [
    { id: 7, name: "Lucas Oliveira", role: "Engenheiro DevOps", avatarUrl: "https://randomuser.me/api/portraits/men/4.jpg" },
    { id: 8, name: "Fernanda Lima", role: "Infraestrutura", avatarUrl: "https://randomuser.me/api/portraits/women/4.jpg" },
  ],
};

export const TeamMembersPage = () => {
  const { teamId } = useParams<{ teamId: string }>(); // Pegando o id do time da URL
  const teamIdNumber = parseInt(teamId || '0', 10); // Convertendo para número

  // Verificando se o time existe e pegando os membros
  const teamMembers = teamMembersByTeam[teamIdNumber] || [];

  return (
    <Box sx={{ padding: '40px', marginLeft: '250px', height: '100vh', backgroundColor: '#f9f9f9' }}>
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '40px', fontWeight: 'bold', color: '#333' }}>
        Membros do Time
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {teamMembers.length > 0 ? (
          teamMembers.map((member) => (
            <Grid item key={member.id} xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  textAlign: 'center',
                  padding: '20px',
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 6px 30px rgba(0, 0, 0, 0.2)',
                  },
                  backgroundColor: '#ffffff',
                }}
              >
                <Avatar
                  alt={member.name}
                  src={member.avatarUrl}
                  sx={{ width: 100, height: 100, margin: '0 auto 15px auto' }}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {member.role}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="body1" color="textSecondary">
            Nenhum membro encontrado para este time.
          </Typography>
        )}
      </Grid>
    </Box>
  );
};
