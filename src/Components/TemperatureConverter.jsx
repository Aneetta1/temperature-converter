import React, { useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';

function TemperatureConverter() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const handleCelsiusChange = (value) => {
    const converted = (value * 9 / 5) + 32;
    setFahrenheit(converted || '');
  };
 const handleFahrenheitChange = (value) => {
    const converted = (value - 32) * 5 / 9;
    setCelsius(converted || '');
  };
 const handleClear = () => {
    setCelsius('');
    setFahrenheit('');
  };
 return (
    <Container className="mt-5">
      <h2>Temperature Converter</h2>
      <Form>
        <Form.Group>
          <Form.Label>Celsius</Form.Label>
          <Form.Control
            type="number"
            value={celsius}
            onChange={(e) => setCelsius(e.target.value)}
            onBlur={(e) => handleCelsiusChange(e.target.value)}
           
          />
           </Form.Group>
        <Form.Group>
          <Form.Label>Fahrenheit</Form.Label>
          <Form.Control
            type="number"
            value={fahrenheit}
            onChange={(e) => setFahrenheit(e.target.value)}
            onBlur={(e) => handleFahrenheitChange(e.target.value)}
           
          />
        </Form.Group>
        <Button variant="primary" onClick={handleClear} className="mt-3">
          Clear
        </Button>
      </Form>
    </Container>
  );
}

export default TemperatureConverter;
