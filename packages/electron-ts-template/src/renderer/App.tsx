import React from 'react';
import { Button } from 'antd';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';

const Hello = () => {
  return (
    <div>
      <Button type="primary">Hello World!</Button>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
