import { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import Button from '../ui/Button';
import Colors from '../../css/color/Colors';

function ExpenseForm({ onSubmit, onCancel, submitButtonLabel, defaultValues }) {
   const [inputs, setInputs] = useState({
      amount: defaultValues?.amount?.toString() || '',
      date: defaultValues?.date?.toISOString().slice(0, 10) || '',
      description: defaultValues?.description || '',
   });

   function inputChangedHandler(inputIdentifier, enteredValue) {
      setInputs((curInputs) => {
         return {
            ...curInputs,
            [inputIdentifier]: enteredValue,
         };
      });
   }

   function submitHandler() {
      const expenseData = {
         amount: +inputs.amount,
         date: new Date(inputs.date),
         description: inputs.description,
      };

      onSubmit(expenseData);
   }

   return (
      <View style={styles.form}>
         <Text style={styles.label}>Amount</Text>
         <TextInput
            style={styles.input}
            keyboardType="decimal-pad"
            value={inputs.amount}
            onChangeText={inputChangedHandler.bind(this, 'amount')}
         />

         <Text style={styles.label}>Date</Text>
         <TextInput
            style={styles.input}
            placeholder="YYYY-MM-DD"
            value={inputs.date}
            onChangeText={inputChangedHandler.bind(this, 'date')}
         />

         <Text style={styles.label}>Description</Text>
         <TextInput
            style={[styles.input, styles.multiline]}
            multiline
            value={inputs.description}
            onChangeText={inputChangedHandler.bind(this, 'description')}
         />

         <View style={styles.buttons}>
            <Button style={{backgroundColor: "red"}} onPress={onCancel}>
               Cancel
            </Button>
            <Button onPress={submitHandler} style={{backgroundColor: "green"}}>
               {submitButtonLabel}
            </Button>
         </View>
      </View>
   );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 16,
  },
  label: {
    color: Colors.black,
    marginBottom: 4,
  },
  input: {
    backgroundColor: Colors.white,
    padding: 6,
    borderRadius: 6,
    marginBottom: 12,
  },
  multiline: {
    minHeight: 60,
    textAlignVertical: 'top',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
