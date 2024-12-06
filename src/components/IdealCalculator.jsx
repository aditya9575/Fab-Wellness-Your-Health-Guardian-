import { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { FaRuler, FaUser, FaBirthdayCake, FaVenusMars, FaWeight } from 'react-icons/fa';
import { calculateIdealWeight } from '../utils/calculations';

function IdealCalculator() {
  const [formData, setFormData] = useState({
    age: '',
    gender: 'male',
    height: ''
  });
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const idealWeight = calculateIdealWeight(formData);
    setResult(idealWeight);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Card className="calculator-card">
      <Card.Body>
        <Card.Title><FaWeight /> Ideal Weight Calculator</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label><FaBirthdayCake /> Age</Form.Label>
            <Form.Control
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              placeholder="Enter your age"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label><FaVenusMars /> Gender</Form.Label>
            <Form.Select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label><FaRuler /> Height (cm)</Form.Label>
            <Form.Control
              type="number"
              name="height"
              value={formData.height}
              onChange={handleChange}
              required
              placeholder="Enter your height"
            />
          </Form.Group>

          <Button className="btn-calculate" type="submit">
            <FaWeight /> Calculate Ideal Weight
          </Button>
        </Form>

        {result && (
          <div className="result-section">
            <h4>Your Ideal Weight Range</h4>
            <p>
              <FaWeight /> 
              <span className="result-value">
                {result.min.toFixed(1)} - {result.max.toFixed(1)} kg
              </span>
            </p>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default IdealCalculator;