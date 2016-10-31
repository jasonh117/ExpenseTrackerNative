import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { addExpense } from '../actions'
import { connect } from 'react-redux';

const styles = {
  container: {
    flex: 1,
    height: 150,
    margin: 5,
    padding: 2,
    backgroundColor: '#cccccc'
  },
  input: {
    flex: 1,
    margin: 2,
    backgroundColor: '#eeeeee',
    justifyContent: 'center'
  }
}

const initState = {
  service: "",
  renewal: "",
  cost: ""
}

class AddExpense extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    if(this.state.service.trim() === "") return;
    if(this.state.renewal.trim() === "") return;
    if(this.state.cost.trim() === "") return;

    const expense = Object.assign({}, this.state, {
      id: Date.now()
    });
    this.props.dispatch(addExpense(expense));
    this.setState(initState);
  }

  render() {
    return (<View style={styles.container}>
      <Text style={{alignSelf: 'center', fontWeight: 'bold'}}>Add Expense</Text>
      <TextInput type="text" style={styles.input} value={this.state.service} onChangeText={service => this.setState({service})}></TextInput>
      <TextInput type="text" style={styles.input} value={this.state.renewal} onChangeText={renewal => this.setState({renewal})}></TextInput>
      <TextInput type="text" style={styles.input} value={this.state.cost} onChangeText={cost => this.setState({cost})}></TextInput>
      <TouchableOpacity style={[styles.input, {width: 100, alignSelf: 'center'}]} onPress={this.handleSubmit}>
        <Text style={{alignSelf: 'center'}}>
          Add
        </Text>
      </TouchableOpacity>
    </View>)
  }
}

export default connect()(AddExpense)
