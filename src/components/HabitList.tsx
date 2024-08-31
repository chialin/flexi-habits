import React from 'react';

const habits = [
  '每天閱讀30分鐘',
  '晨間運動15分鐘',
  '每日喝8杯水',
  '冥想10分鐘',
  '寫日記',
];

const HabitList: React.FC = () => (
  <section style={styles.section}>
    <h2 style={styles.heading}>熱門習慣列表</h2>
    <ul style={styles.list}>
      {habits.map((habit, index) => (
        <li key={index} style={styles.item}>
          <input
            type="checkbox"
            id={`habit${index + 1}`}
            style={styles.checkbox}
          />
          <label htmlFor={`habit${index + 1}`} style={styles.label}>
            {habit}
          </label>
          <button style={styles.addButton}>v</button>
        </li>
      ))}
    </ul>
  </section>
);

const styles = {
  section: {
    marginTop: '40px',
    marginBottom: '40px',
  },
  heading: {
    fontSize: '1.8rem',
    marginBottom: '20px',
    color: 'var(--text-color)',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  item: {
    backgroundColor: 'var(--item-bg-color)',
    border: '1px solid var(--item-border-color)',
    borderRadius: '10px',
    marginBottom: '10px',
    padding: '15px',
    display: 'flex',
    alignItems: 'center',
  },
  checkbox: {
    marginRight: '10px',
  },
  label: {
    marginLeft: '10px',
    flex: 1,
  },
  addButton: {
    backgroundColor: 'var(--button-bg-color)',
    color: 'var(--button-text-color)',
    border: 'none',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    fontSize: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    marginLeft: '10px',
  },
};

export default HabitList;
