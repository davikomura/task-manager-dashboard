import { Box, Typography, Select, MenuItem, Avatar, Button, IconButton } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import AddIcon from '@mui/icons-material/Add';

export const FilterBas = () => {
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  const formattedDate = today.toLocaleDateString('pt-BR', options);
  
  const month = today.toLocaleString('pt-BR', { month: 'long' });
  const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        p: 2, 
        bgcolor: '#fff', 
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
        borderRadius: 2 
      }}
    >
      {/* Seção esquerda */}
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ mr: 3 }}>
          <Typography variant="h6" fontWeight="bold">{capitalizedMonth}</Typography>
          <Typography variant="body2" color="textSecondary">Hoje é {formattedDate}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body1" sx={{ mr: 1 }}>Board -</Typography>
          <Select
            defaultValue="Daily Tasks"
            sx={{ minWidth: 150, bgcolor: '#f8f8f8', borderRadius: 1, padding: '5px 10px' }}
          >
            <MenuItem value="Daily Tasks">Daily Tasks</MenuItem>
            <MenuItem value="Weekly Tasks">Weekly Tasks</MenuItem>
            <MenuItem value="Monthly Tasks">Monthly Tasks</MenuItem>
          </Select>
        </Box>
      </Box>

      {/* Seção central - Avatares */}
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {[1, 2, 3, 4, 5].map((_, index) => (
          <Avatar
            key={index}
            src={`https://via.placeholder.com/32`}
            alt={`Avatar ${index + 1}`}
            sx={{
              width: 32,
              height: 32,
              ml: index !== 0 ? '-10px' : 0,
              border: '2px solid #fff',
              boxShadow: 1,
            }}
          />
        ))}
      </Box>

      {/* Seção direita - Botões */}
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton 
          sx={{ 
            border: '1px solid #ddd', 
            borderRadius: 1, 
            mr: 2, 
            padding: '10px 20px', 
            '&:hover': { bgcolor: '#f0f0f0' } 
          }}
        >
          <FilterListIcon /> 
          <Typography variant="body1" sx={{ ml: 1 }}>Filters</Typography>
        </IconButton>
        <Button
          variant="outlined"
          startIcon={<AddIcon />}
          sx={{ borderRadius: 1, padding: '10px 20px' }}
        >
          Create Task
        </Button>
      </Box>
    </Box>
  );
};
