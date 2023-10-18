import React from 'react';
import './style.css';

function Card() {
  return (
    <div className="card">
      <div className="card-content">
        {/* Add content here!! */}
      </div>
    </div>
  );
}

function Layout() {
  return (
    <div className="layout">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Layout;
