import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header style={styles.header}>
      <h1 style={styles.heading}>習慣追蹤器</h1>
      <p style={styles.subheading}>建立更好的生活習慣，實現個人成長</p>
      <button onClick={toggleTheme} style={styles.themeToggle}>
        切換到{theme === 'light' ? '深色' : '淺色'}主題
      </button>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: 'var(--header-bg-color)',
    color: 'var(--header-text-color)',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '10px',
    color: 'inherit',
  },
  subheading: {
    fontSize: '1.2rem',
    marginBottom: '15px',
  },
  themeToggle: {
    padding: '10px 15px',
    backgroundColor: 'var(--button-bg-color)',
    color: 'var(--button-text-color)',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
};

export default Header;
