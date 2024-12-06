import { useState } from 'react';
import { Container, Nav, Tab } from 'react-bootstrap';
import { FaWeight, FaFire, FaRuler } from 'react-icons/fa';
import BMICalculator from './components/BMICalculator';
import CalorieCalculator from './components/CalorieCalculator';
import IdealCalculator from './components/IdealCalculator';
import './App.css';

function App() {
  const [key, setKey] = useState('bmi');

  return (
    <Container className="app-container">
      <h1 className="app-title">Fab Wellness</h1>
      <Tab.Container activeKey={key} onSelect={(k) => setKey(k)}>
        <Nav variant="pills" className="nav-tabs-custom">
          <Nav.Item>
            <Nav.Link eventKey="bmi">
              <FaWeight /> BMI Calculator
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="calorie">
              <FaFire /> Calorie Calculator
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="ideal">
              <FaRuler /> Ideal Weight Calculator
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="bmi">
            <BMICalculator />
          </Tab.Pane>
          <Tab.Pane eventKey="calorie">
            <CalorieCalculator />
          </Tab.Pane>
          <Tab.Pane eventKey="ideal">
            <IdealCalculator />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
}

export default App;