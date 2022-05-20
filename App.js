import React, {useState} from 'react';
import {Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const Numeric_Key = props => (
  <View
    style={{
      width: width * 0.21,
      height: width * 0.21,
      padding: 6,
    }}>
    <TouchableOpacity
      style={{
        backgroundColor: '#272B33',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        flex: 1,
      }}
      onPress={props.onPress}>
      <Text
        style={{
          fontSize: props.fontSize,
          color: props.color,
        }}>
        {props.text}
      </Text>
    </TouchableOpacity>
  </View>
);

const App = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');

  const setValidOperator = op => {
    if (num1 != '') setOperator(op);
  };

  const setValidNumber = num => {
    if (operator == '') setNum1(num1 + num);
    else setNum2(num2 + num);
  };

  const reset = () => {
    setNum1('');
    setNum2('');
    setOperator('');
    setResult('');
  };

  const calculate = () => {
    if (num1 != '' && num2 != '' && operator != '') {
      if (operator == '+') setResult(Number(num1) + Number(num2));
      else if (operator == '-') setResult(Number(num1) - Number(num2));
      else if (operator == '*') setResult(Number(num1) * Number(num2));
      else if (operator == '/') setResult(Number(num1) / Number(num2));
    }
  };

  return (
    <SafeAreaView style={{backgroundColor: '#22252d', flex: 1}}>
      <View
        style={{
          height: height * 0.35,
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          padding: 15,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              color: 'white',
              fontSize: 22,
            }}>
            {num1}
          </Text>
          <View
            style={{
              width: 10,
            }}></View>
          <Text
            style={{
              color: '#F37A7A',
              fontSize: 22,
            }}>
            {operator}
          </Text>
          <View
            style={{
              width: 10,
            }}></View>
          <Text
            style={{
              color: 'white',
              fontSize: 22,
            }}>
            {num2}
          </Text>
        </View>
        <Text style={{color: 'white', fontSize: 40}}>{result}</Text>
      </View>
      <View
        style={{
          height: height * 0.65,
          backgroundColor: '#292D36',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          padding: width * 0.08,
          justifyContent: 'center',
        }}>
        <View style={styles.keyRows}>
          <Numeric_Key
            text="AC"
            color="#26E3C1"
            fontSize={20}
            onPress={reset}></Numeric_Key>
          <Numeric_Key
            text="+"
            color="#F37A7A"
            fontSize={35}
            onPress={() => setValidOperator('+')}></Numeric_Key>
        </View>
        <View style={styles.keyRows}>
          <Numeric_Key
            text="7"
            color="white"
            fontSize={20}
            onPress={() => setValidNumber('7')}></Numeric_Key>
          <Numeric_Key
            text="8"
            color="white"
            fontSize={20}
            onPress={() => setValidNumber('8')}></Numeric_Key>
          <Numeric_Key
            text="9"
            color="white"
            fontSize={20}
            onPress={() => setValidNumber('9')}></Numeric_Key>
          <Numeric_Key
            text="-"
            color="#F37A7A"
            fontSize={35}
            onPress={() => setValidOperator('-')}></Numeric_Key>
        </View>
        <View style={styles.keyRows}>
          <Numeric_Key
            text="4"
            color="white"
            fontSize={20}
            onPress={() => setValidNumber('4')}></Numeric_Key>
          <Numeric_Key
            text="5"
            color="white"
            fontSize={20}
            onPress={() => setValidNumber('5')}></Numeric_Key>
          <Numeric_Key
            text="6"
            color="white"
            fontSize={20}
            onPress={() => setValidNumber('6')}></Numeric_Key>
          <Numeric_Key
            text="*"
            color="#F37A7A"
            fontSize={35}
            onPress={() => setValidOperator('*')}></Numeric_Key>
        </View>
        <View style={styles.keyRows}>
          <Numeric_Key
            text="1"
            color="white"
            fontSize={20}
            onPress={() => setValidNumber('1')}></Numeric_Key>
          <Numeric_Key
            text="2"
            color="white"
            fontSize={20}
            onPress={() => setValidNumber('2')}></Numeric_Key>
          <Numeric_Key
            text="3"
            color="white"
            fontSize={20}
            onPress={() => setValidNumber('3')}></Numeric_Key>
          <Numeric_Key
            text="/"
            color="#F37A7A"
            fontSize={35}
            onPress={() => setValidOperator('/')}></Numeric_Key>
        </View>
        <View style={styles.keyRows}>
          <Numeric_Key
            text="0"
            color="white"
            fontSize={20}
            onPress={() => setValidNumber('0')}></Numeric_Key>
          <Numeric_Key
            text="="
            color="#00B0FF"
            fontSize={35}
            onPress={calculate}></Numeric_Key>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  keyRows: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default App;
