import { Box, Typography, Switch, FormControlLabel, TextField, Button, Divider } from '@mui/material';
import { useState } from 'react';

export const SettingsPage = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [username, setUsername] = useState('Usuario');

  const handleNotificationsChange = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const handleDarkModeChange = () => {
    setDarkModeEnabled(!darkModeEnabled);
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  return (
    <Box sx={{ padding: '40px', marginLeft: '250px', height: '100vh', backgroundColor: '#f9f9f9' }}>
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '40px', fontWeight: 'bold', color: '#333' }}>
        Configurações
      </Typography>

      <Box sx={{ maxWidth: '600px', margin: '0 auto' }}>
        {/* Configurações de Perfil */}
        <Typography variant="h6" sx={{ marginBottom: '20px', fontWeight: 'bold' }}>
          Perfil
        </Typography>
        <TextField
          fullWidth
          label="Nome de Usuário"
          value={username}
          onChange={handleUsernameChange}
          sx={{ marginBottom: '20px' }}
        />
        <Divider sx={{ marginBottom: '20px' }} />

        {/* Configurações de Notificações */}
        <Typography variant="h6" sx={{ marginBottom: '20px', fontWeight: 'bold' }}>
          Preferências de Notificação
        </Typography>
        <FormControlLabel
          control={<Switch checked={notificationsEnabled} onChange={handleNotificationsChange} />}
          label="Habilitar notificações"
          sx={{ marginBottom: '20px' }}
        />
        <Divider sx={{ marginBottom: '20px' }} />

        {/* Configurações de Tema */}
        <Typography variant="h6" sx={{ marginBottom: '20px', fontWeight: 'bold' }}>
          Aparência
        </Typography>
        <FormControlLabel
          control={<Switch checked={darkModeEnabled} onChange={handleDarkModeChange} />}
          label="Modo escuro"
        />

        {/* Botão de Salvar */}
        <Box sx={{ textAlign: 'center', marginTop: '40px' }}>
          <Button variant="contained" color="primary" sx={{ padding: '10px 20px' }}>
            Salvar Alterações
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
