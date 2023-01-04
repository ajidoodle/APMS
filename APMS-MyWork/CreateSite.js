import React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  TextInput,
} from 'react-native';
import CreateStyle from './CreateStyle';
const CreateSite = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={CreateStyle.Index}>
        <View style={CreateStyle.Icon}>
          <View style={CreateStyle.first}>
            <Image
              style={CreateStyle.imgHeader}
              source={require('../assets/images/leftArrow.png')}
            />
            <Text style={CreateStyle.text1}>Create Site</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            borderTopStartRadius: 20,
            borderTopEndRadius: 20,
            marginTop: 15,
            // flex:1,
          }}>
          <ScrollView>
            <View style={{padding: 10}}>
              <View style={[CreateStyle.headerTop]}>
                <View style={[CreateStyle.headerInputBox]}>
                  <Text style={[CreateStyle.nameText]}>
                    Customer Name <Text style={{color: 'red'}}>*</Text>
                  </Text>
                  <View style={[CreateStyle.inputBox]}>
                    <TextInput style={[CreateStyle.textInputBox]} 
                    />
                  </View>
                </View>
                <View style={[CreateStyle.headerInputBox]}>
                  <Text style={[CreateStyle.nameText]}>
                  Customer Mobile
                  </Text>
                  <View style={[CreateStyle.inputBox]}>
                    <TextInput style={[CreateStyle.textInputBox]} 
                    />
                  </View>
                </View>
                <View style={[CreateStyle.headerInputBox]}>
                  <Text style={[CreateStyle.commonText]}>
                  Address Line1
                  </Text>
                  <View style={[CreateStyle.inputBox]}>
                    <TextInput style={[CreateStyle.textInputBox]} 
                    />
                  </View>
                </View>
                <View style={[CreateStyle.headerInputBox]}>
                  <Text style={[CreateStyle.commonText]}>
                  Address Line2
                  </Text>
                  <View style={[CreateStyle.inputBox]}>
                    <TextInput style={[CreateStyle.textInputBox]} 
                    />
                  </View>
                </View>
                <View style={[CreateStyle.headerInputBox]}>
                  <Text style={[CreateStyle.commonText]}>
                  Pincode
                  </Text>
                  <View style={[CreateStyle.inputBox]}>
                    <TextInput style={[CreateStyle.textInputBox]} 
                    />
                  </View>
                </View>
                <View style={[CreateStyle.headerInputBox]}>
                  <Text style={[CreateStyle.commonText]}>
                  City
                  </Text>
                  <View style={[CreateStyle.inputBox]}>
                    <TextInput style={[CreateStyle.textInputBox]} 
                    />
                  </View>
                </View>
                <View style={[CreateStyle.headerInputBox]}>
                  <Text style={[CreateStyle.commonText]}>
                  State
                  </Text>
                  <View style={[CreateStyle.inputBox]}>
                    <TextInput style={[CreateStyle.textInputBox]} 
                    />
                  </View>
                </View>
                <View style={[CreateStyle.headerInputBox]}>
                  <Text style={[CreateStyle.commonText]}>
                  Customer Age
                  </Text>
                  <View style={[CreateStyle.inputBox]}>
                    <TextInput style={[CreateStyle.textInputBox]} 
                    />
                  </View>
                </View>
                <View style={[CreateStyle.headerInputBox]}>
                  <Text style={[CreateStyle.nameText]}>
                  Customer Father's Name 
                  </Text>
                  <View style={[CreateStyle.inputBox]}>
                    <TextInput style={[CreateStyle.textInputBox]} 
                    />
                  </View>
                </View>
                <View style={[CreateStyle.headerInputBox]}>
                  <Text style={[CreateStyle.nameText]}>
                  Owning/Residing Since
                  </Text>
                  <View style={[CreateStyle.inputBox]}>
                    <TextInput style={[CreateStyle.textInputBox]} 
                    />
                  </View>
                </View>

                <View style={[CreateStyle.logoutHeader,]}>
                <Text style={[CreateStyle.logoutText]}>NEXT</Text>
              </View>
                <View style={[CreateStyle.empytFooter]}></View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateSite;
