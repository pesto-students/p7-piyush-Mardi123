import React from 'react';

const Pricing = () => {
  return (
    <div>
      <h2>Pricing</h2>
      <div>
        <h3>Basic Plan</h3>
        <p>Price: $9.99/month</p>
        <p>Features:</p>
        <ul>
          <li>10,000 shortened URLs</li>
          <li>Analytics dashboard</li>
          <li>Email support</li>
        </ul>
      </div>
      <div>
        <h3>Premium Plan</h3>
        <p>Price: $19.99/month</p>
        <p>Features:</p>
        <ul>
          <li>Unlimited shortened URLs</li>
          <li>Advanced analytics dashboard</li>
          <li>Priority email support</li>
          <li>Custom domain support</li>
        </ul>
      </div>
    </div>
  );
};

export default Pricing;
