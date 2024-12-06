import { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { FaWeight, FaRuler, FaUser, FaBirthdayCake, FaVenusMars } from 'react-icons/fa';
import { calculateBMI } from '../utils/calculations';

function BMICalculator() {
  const [formData, setFormData] = useState({
    age: '',
    gender: 'male',
    height: '',
    weight: ''
  });
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const bmi = calculateBMI(formData.weight, formData.height);
    setResult(bmi);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return { text: 'Underweight', color: '#e74c3c' };
    if (bmi < 25) return { text: 'Normal weight', color: '#2ecc71' };
    if (bmi < 30) return { text: 'Overweight', color: '#f1c40f' };
    return { text: 'Obese', color: '#e74c3c' };
  };

  return (
    <Card className="calculator-card">
      <Card.Body>
        <Card.Title><FaWeight /> BMI Calculator</Card.Title>
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

          <Form.Group className="mb-3">
            <Form.Label><FaWeight /> Weight (kg)</Form.Label>
            <Form.Control
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              required
              placeholder="Enter your weight"
            />
          </Form.Group>

          <Button className="btn-calculate" type="submit">
            <FaUser /> Calculate BMI
          </Button>
        </Form>

        {result && (
          <div className="result-section">
            <h4>Your BMI Results</h4>
            <p className="result-value">{result.toFixed(1)}</p>
            <p style={{ color: getBMICategory(result).color }}>
              {getBMICategory(result).text}
            </p>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default BMICalculator;