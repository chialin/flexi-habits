import React from 'react';
import Header from './components/Header';
import HabitList from './components/HabitList';

const App: React.FC = () => {
  return (
    <div style={styles.container}>
      <Header />
      <main>
        <HabitList />
      </main>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'微軟正黑體', 'Microsoft JhengHei', sans-serif",
    lineHeight: 1.6,
    color: '#333',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
};

export default App;
