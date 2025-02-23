import React from 'react';
import { AppBar, Toolbar, Typography, Container, Button, Box } from '@mui/material';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Personal Site
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Bem-vindo ao Meu Site Pessoal
          </Typography>
          <Typography variant="body1">
            Esta é a página inicial do meu site pessoal, utilizando Vite, React e Material-UI.
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default App;
