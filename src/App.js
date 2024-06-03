import { Container, Typography } from '@mui/material';
import './index.css';

function App() {
  return (
    <div className="App">
      <Container sx = {{ bgcolor: "gray",height: '100vh'}}>
        <Typography variant= 'h2'>Hello World!</Typography>
      </Container>
    </div>
  );
}

export default App;
