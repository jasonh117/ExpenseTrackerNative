import React, { PropTypes } from 'react'
import { ScrollView } from 'react-native';
import Expense from './Expense.jsx'
import AddExpense from './AddExpense.jsx'
import { connect } from 'react-redux';

const styles = {
  container: {
    backgroundColor: '#444444',
    marginTop: 20,
    padding: 5
  }
}

const ExpenseList = ({ expenses }) => (
  <ScrollView style={styles.container}>
    {expenses.map(data => {
      return <Expense key={data.id} expense={data} />
    })}
    <AddExpense />
  </ScrollView>
)

ExpenseList.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    service: PropTypes.string.isRequired,
    renewal: PropTypes.string.isRequired,
    cost: PropTypes.string.isRequired
  }).isRequired).isRequired
}

const mapStateToProps = state => ({
  expenses: state.expenses
})

export default connect(mapStateToProps)(ExpenseList);
