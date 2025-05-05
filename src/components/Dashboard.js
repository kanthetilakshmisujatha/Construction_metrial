
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Your Dashboard</h1>
      <button style={styles.button} onClick={() => navigate('/view-queries')}>
        View Queries
      </button>
      <button style={styles.button} onClick={() => navigate('/settings')}>
        Settings
      </button>
            <button style={styles.buttonStyle} onClick={() => navigate('/add-material')}>Add Material</button>

      <button style={styles.logout} onClick={() => navigate('/admin-login')}>
        Logout
      </button>
    </div>
  );
};


const styles = {
  container: {
    textAlign: 'center',
    marginTop: '100px',
  },
  buttonStyle: {
    margin: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: 'tomato',
    color: 'white',
    border: 'none',
    borderRadius: '5px'
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  button: {
    margin: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: 'tomato',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
  },
  logout: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
  },
};

export default Dashboard;
