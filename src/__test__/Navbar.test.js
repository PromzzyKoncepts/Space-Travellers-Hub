import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';

it('renders Component correctly', () => {
  const tree = renderer.create(
    <Router>
      <Navbar />
    </Router>,
  );
  expect(tree).toMatchSnapshot();
});
