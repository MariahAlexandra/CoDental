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
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default function DiagnosisForm() {

  var [step, setStep]   = useState(1);
  var [back, setBackView]   = useState(false);
  var [next, setNextView]   = useState(true);
  var [submit, setSubView]  = useState(false);

  return (
    <View style = {styles.root}>
      <View style = {styles.formContainer}>
        </View>
      </View>
      <View style = {styles.buttonContainerContainer}>
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
                    Alert.alert(step.toString());
                  }
                }
              />
            }
          </View>
        </View>

        <View style = {styles.buttonContainer}>
          <View style = {styles.styleRBut}>
            {next && step < 7 &&
              <Button
                style = {styles.styleButton}
                title = 'Next'
                onPress = {() => {
                  setStep(++step);
                  if(back == false && step > 1) {
                    setBackView(back = true);
                  }
                  if(step == 7) {
                    setSubView(submit = true);
                  }
                  Alert.alert(step.toString());
                }
              }
              />
            }
          </View>

          <View style = {styles.styleRBut}>
            {submit && step == 7 &&
              <Button
                title = 'Submit'
                onPress = {() => Alert.alert(step.toString())}
              />
            }
          </View>

        </View>
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
    paddingBottom: 35,
  },

  child: {
    width: '100%',
    height: '100%',
  },

  buttonContainerContainer: {
    width: '100%',
    height: 35,
    display: 'flex',
    flexDirection: 'row',
    bottom: 0,
    position: 'absolute',
  },

  buttonContainer: {
      width: '50%',
      height: 35,
  },

  styleLBut: {
    width: '98%',
    display: 'flex',
    alignSelf: 'center',
    paddingLeft: '1%',
  },

  styleRBut: {
    width: '98%',
    display: 'flex',
    alignSelf: 'center',
    paddingRight: '1%',
  },
});
