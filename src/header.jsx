import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class header extends React.Component
{
  render()
  {
    return (
      <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
      <h1>Logo</h1>
      <ul class="navbar-nav" style={{ marginLeft: '657px' }}>
          <li class="nav-item active">
              <a class="nav-link" href="#">Active</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="/login">Login</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="#">Support</a>
          </li>
      </ul>
  </nav>
      
    )
  }
}
export default header;