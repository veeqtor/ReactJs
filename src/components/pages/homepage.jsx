import React from 'react';
import { Link } from 'react-router-dom';
/* eslint no-unused-expressions: 0 */

const Homepage = () => (
  <div>
    <h1>
      Homepage
    </h1>
    <Link to="/login">
      Login page
    </Link>
  </div>
);

export default Homepage;
