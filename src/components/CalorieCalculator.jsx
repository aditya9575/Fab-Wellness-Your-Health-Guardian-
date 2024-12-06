import { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { FaFire, FaRunning, FaUser, FaRuler, FaWeight, FaBirthdayCake, FaVenusMars } from 'react-icons/fa';
import { calculateCalories } from '../utils/calculations';

function CalorieCalculator() {
  const [formData, setFormData] = useState({
    age: '',
    gender: 'male',
    height: '',
    weight: '',
    activityLevel: 'sedentary'
  });
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const calories = calculateCalories(formData);
    setResult(calories);
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
        <Card.Title><FaFire /> Calorie Calculator</Card.Title>
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

          <Form.Group className="mb-3">
            <Form.Label><FaRunning /> Activity Level</Form.Label>
            <Form.Select
              name="activityLevel"
              value={formData.activityLevel}
              onChange={handleChange}
            >
              <option value="sedentary">Sedentary (little or no exercise)</option>
              <option value="light">Light (exercise 1-3 times/week)</option>
              <option value="moderate">Moderate (exercise 4-5 times/week)</option>
              <option value="active">Active (daily exercise)</option>
              <option value="veryActive">Very Active (intense exercise daily)</option>
            </Form.Select>
          </Form.Group>

          <Button className="btn-calculate" type="submit">
            <FaFire /> Calculate Calories
          </Button>
        </Form>

        {result && (
          <div className="result-section">
            <h4>Daily Calorie Needs</h4>
            <p><FaFire /> Maintenance: <span className="result-value">{Math.round(result)} calories/day</span></p>
            <p><FaWeight /> Weight Loss: <span className="result-value">{Math.round(result - 500)} calories/day</span></p>
            <p><FaWeight /> Weight Gain: <span className="result-value">{Math.round(result + 500)} calories/day</span></p>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default CalorieCalculator;