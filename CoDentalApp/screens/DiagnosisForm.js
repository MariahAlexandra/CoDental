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
  ActivityIndicator,
  Switch
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
        initialValues={{name: '', age: 0, gender: '', medications: false, bleeding: false, insurance: false,
          clicking: false, jointPain: false, toothPain: false, diffOpening: false, diffChewing: false}}
        onSubmit={(values, actions) => {
          console.log(values);
          console.log(values['medications'])
          setTimeout(() => {
            actions.setSubmitting(false);
          }, 1000)
          actions.setSubmitting(false);

          var formData = new FormData();
          /*formData.append('name', values['name']);
          formData.append('age', values['age']);
          formData.append('gender', values['gender']);*/
          formData.append('meds', values['medications']);
          formData.append('bleeding', values['bleeding']);
          formData.append('insurance', values['insurance']);
          formData.append('pain', values['toothPain']);

          // var meds = values['medications']
          /*formData.append('dataDictionary','');
          formData.append('dataDictionary',);
          formData.append('dataDictionary',);
          formData.append('dataDictionary',);*/

          var request = new XMLHttpRequest();
          console.log(formData);
          var link = "http://tiffkwin.pythonanywhere.com/send_data?meds={values['medications']}&bleeding={values['bleeding']}&pain={values['toothPain']}&insurance={values['insurance']}";
          console.log('link: ', link);

          request.open('POST', link);
          request.send({});
          console.log('response request', request)
          //console.log('response1',request['response']);
          //console.log('response2',request[response]);
          //console.log('response3',request.response);

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
                <TextInput
                  style={styles.inputBox}
                  onChangeText={formikProps.handleChange("gender")}
                  required
                />
            </View>
          }

          {step == 2 &&
            <View>
              <Text style = {styles.formHeading}>Medications and Diet</Text>
                <View style={{width: '100%', flexDirection: 'row', paddingLeft: 5, paddingRight: 5}}>
                  <Text style={{flex: 1, alignSelf: 'flex-start'}}>Are you taking any medicine(s) including non-prescription medicine?</Text>
                  <Switch style={{flex: 1, alignSelf: 'flex-end'}} onValueChange = {value => formikProps.setFieldValue("medications", value)} value = {formikProps.values.medications} />
                </View>
            </View>
          }

          {step == 3 &&
            <View>
            <Text style = {styles.formHeading}>Habits</Text>
                <View style={{width: '100%', flexDirection: 'row', paddingLeft: 5, paddingRight: 5}}>
                  <Text style={{flex: 1, alignSelf: 'flex-start'}}>Do your gums bleed while brushing or flossing?</Text>
                  <Switch style={{flex: 1, alignSelf: 'flex-end'}} onValueChange = {value => formikProps.setFieldValue("bleeding", value)} value = {formikProps.values.bleeding} />
                </View>

            </View>
          }


          {step == 4 &&
            <View>
            <Text style = {styles.formHeading}>Dental Insurance</Text>
                <View style={{width: '100%', flexDirection: 'row', paddingLeft: 5, paddingRight: 5}}>
                  <Text style={{flex: 1, alignSelf: 'flex-start'}}>Do you have dental insurance?</Text>
                  <Switch style={{flex: 1, alignSelf: 'flex-end'}} onValueChange = {value => formikProps.setFieldValue("insurance", value)} value = {formikProps.values.insurance} />
                </View>

            </View>
          }


          {step == 5 &&
            <View>
            <Text style = {styles.formHeading}>Do you experience any of the following symptoms?</Text>
                <View style={{width: '100%', flexDirection: 'row', paddingLeft: 5, paddingRight: 5, marginTop: 10}}>
                  <Text style={{flex: 1, alignSelf: 'flex-start'}}>Jaw clicking</Text>
                  <Switch style={{flex: 1, alignSelf: 'flex-end'}} onValueChange = {value => formikProps.setFieldValue("clicking", value)} value = {formikProps.values.clicking} />
                </View>
                <View style={{width: '100%', flexDirection: 'row', paddingLeft: 5, paddingRight: 5, marginTop: 10}}>
                  <Text style={{flex: 1, alignSelf: 'flex-start'}}>Pain in joints, ears, or side of face</Text>
                  <Switch style={{flex: 1, alignSelf: 'flex-end'}} onValueChange = {value => formikProps.setFieldValue("jointPain", value)} value = {formikProps.values.jointPain} />
                </View>
                <View style={{width: '100%', flexDirection: 'row', paddingLeft: 5, paddingRight: 5, marginTop: 10}}>
                  <Text style={{flex: 1, alignSelf: 'flex-start'}}>Pain in teeth</Text>
                  <Switch style={{flex: 1, alignSelf: 'flex-end'}} onValueChange = {value => formikProps.setFieldValue("toothPain", value)} value = {formikProps.values.toothPain} />
                </View>
                <View style={{width: '100%', flexDirection: 'row', paddingLeft: 5, paddingRight: 5, marginTop: 10}}>
                  <Text style={{flex: 1, alignSelf: 'flex-start'}}>Difficulty opening or closing your mouth</Text>
                  <Switch style={{flex: 1, alignSelf: 'flex-end'}} onValueChange = {value => formikProps.setFieldValue("diffOpening", value)} value = {formikProps.values.diffOpening} />
                </View>
                <View style={{width: '100%', flexDirection: 'row', paddingLeft: 5, paddingRight: 5, marginTop: 10}}>
                  <Text style={{flex: 1, alignSelf: 'flex-start'}}>Difficulty chewing</Text>
                  <Switch style={{flex: 1, alignSelf: 'flex-end'}} onValueChange = {value => formikProps.setFieldValue("diffChewing", value)} value = {formikProps.values.diffChewing} />
                </View>

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
                ) : ( submit && step == 5 &&
                <Button
                  style={styles.formButton}
                  title="Submit"
                  onPress={ formikProps.handleSubmit}
                />
              )}

              {next && step < 5 && formikProps.values.name != '' && formikProps.values.age != 0 && formikProps.values.gender != '' &&
                <Button
                  style = {styles.styleButton}
                  title = 'Next'
                  onPress = {() => {
                    setStep(++step);
                    if(back == false && step > 1) {
                      setBackView(back = true);
                    }
                    if(step == 5) {
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
