import * as WebBrowser from 'expo-web-browser';
import React, {useState} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Alert,
  CheckBox,
  TextInput,
  Picker,
  ActivityIndicator
} from 'react-native';
import { Formik } from 'formik';

import { MonoText } from '../components/StyledText';

export default function DiagnosisForm() {

  var [step, setStep]   = useState(1);
  var [back, setBackView]   = useState(false);
  var [next, setNextView]   = useState(true);
  var [submit, setSubView]  = useState(false);

  return (
    <View style = {styles.root}>
      <View style = {styles.formContainer}>
      <Formik
        initialValues={{name: '', age: 0, gender: '',}}
        onSubmit={(values, actions) => {
          console.log(JSON.stringify(values));
          setTimeout(() => {
            actions.setSubmitting(false);
          }, 1000)
          actions.setSubmitting(false);
        }}
      >
      {formikProps => (
        <React.Fragment>
          {step == 1 &&
            <View>
              <Text style = {styles.formHeading}>Personal Info</Text>
                <Text>Name</Text>
                <TextInput
                  style={styles.inputBox}
                  onChangeText={formikProps.handleChange("name")}
                  required
                />

                <Text>Age</Text>
                <TextInput
                  style={styles.inputBox}
                  onChangeText={formikProps.handleChange("age")}
                  required
                />

                <Text>Gender</Text>
                <Picker
                  style={styles.inputBox}
                  onValueChange = {formikProps.handleChange("gender")}
                  required
                >
                  <Picker.Item label = 'Male' value = 'male' />
                  <Picker.Item label = 'Female' value = 'Female' />
                </Picker>
            </View>
          }

          {step == 2 &&
            <View>
              <Text style = {styles.formHeading}>Situation</Text>

            </View>
          }

          {step == 3 &&
            <View>
            <Text style = {styles.formHeading}>Symptoms</Text>

            </View>
          }


          <View style = {styles.buttonContainer}>
            <View style = {styles.styleLBut}>
              {back && step > 1 &&
                <Button
                  style = {styles.styleBut}
                  title = 'Back'
                  onPress = {() => {
                      if(step >= 2) {
                        setStep(--step);
                      }
                    }
                  }
                />
              }
            </View>

            <View style = {styles.styleRBut}>
              {formikProps.isSubmitting ? (
                <ActivityIndicator />
                ) : ( submit && step == 3 &&
                <Button
                  style={styles.formButton}
                  title="Submit"
                  onPress={ formikProps.handleSubmit}
                />
              )}

              {next && step < 3 &&
                <Button
                  style = {styles.styleButton}
                  title = 'Next'
                  onPress = {() => {
                    setStep(++step);
                    if(back == false && step > 1) {
                      setBackView(back = true);
                    }
                    if(step == 3) {
                      setSubView(submit = true);
                    }
                  }
                }
                />
              }

            </View>
          </View>
        </React.Fragment>
          )}
      </Formik>
      </View>
    </View>
  );
}

DiagnosisForm.navigationOptions = {
  title: 'Diagnosis Form',
};

const styles = StyleSheet.create({
  root: {
    height: '100%',
    width: '100%',
  },

  formContainer: {
    width: '100%',
    height: '100%',
    paddingBottom: 45,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },

  formHeading: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
  },

  inputBox: {
    borderWidth: 1,
    borderColor: '#DDD',
    marginBottom: 15,
  },

  buttonContainer: {
    width: '100%',
    height: 35,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    bottom: 10,
    position: 'absolute',
  },

  styleLBut: {
    display: 'flex',
    width: '49%',
    height: 35,
    marginRight: '1%'
  },

  styleRBut: {
    display: 'flex',
    width: '49%',
    height: 35,
    marginLeft: '1%'
  },
});
