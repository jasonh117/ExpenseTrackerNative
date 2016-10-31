import React, { PropTypes } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { removeExpense } from '../actions';
import { connect } from 'react-redux';

const styles = {
  container: {
    margin: 5,
    padding: 2,
    backgroundColor: '#cccccc'
  },
  button: {
    margin: 2,
    width: 100,
    height: 30,
    backgroundColor: '#eeeeee',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  text: {
    margin: 4,
    alignSelf: 'center'
  }
}

const Expense = ({ expense, dispatch }) => (
  <View style={styles.container}>
    <Text style={[styles.text,{fontWeight: 'bold'}]}>{expense.service}</Text>
    <Text style={styles.text}>{expense.renewal}</Text>
    <Text style={styles.text}>{expense.cost}</Text>
    <TouchableOpacity style={styles.button} onPress={() => dispatch(removeExpense(expense.id))}>
      <Text style={{alignSelf: 'center'}}>
        Delete
      </Text>
    </TouchableOpacity>
  </View>
)

Expense.propTypes = {
  expense: PropTypes.shape({
    id: PropTypes.number.isRequired,
    service: PropTypes.string.isRequired,
    renewal: PropTypes.string.isRequired,
    cost: PropTypes.string.isRequired
  }).isRequired
}

export default connect()(Expense)
