import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  TextInput,
} from 'react-native';
import SiteImageStyle from './SiteImageStyle';
// import { details } from './Details';
const SiteImage = () => {
  const [details, setDetails] = useState([
    {
      id: '1',
      customerName: 'test',
      customerMobile: 9788898999,
      addressLine: 1,
      addressLine: 2,
      pincode: '',
      city: '',
      state: '',
      customerAge: 0,
      customerFatherName: '',
      owning: '',
      creationDate: '',
      status: 'Not TRIGGERED',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRWTBeX5wowkab5SQvCH4nno2GTCrJu3SXMA&usqp=CAU',
    },
  ]);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={SiteImageStyle.Index}>
        <View style={SiteImageStyle.Icon}>
          <View style={SiteImageStyle.first}>
            <Image
              style={SiteImageStyle.imgHeader}
              source={require('../assets/images/leftArrow.png')}
            />
            <Text style={SiteImageStyle.text1}>SITE IMAGE</Text>
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
              {/* <View style={[SiteImageStyle.detailsHeader]}>
                    <Text style={[SiteImageStyle.detailsText]}>
                       ID: {details}
                    </Text>
                </View> */}
              {details.map(d => {
                return (
                  <View key={d.id} style={[SiteImageStyle.headerId]}>
                    <View style={[SiteImageStyle.editSiteDetails]}>
                      <Text style={[SiteImageStyle.editSiteDetailsText]}>
                        Edit Site Details
                      </Text>
                    </View>
                    <Text>SiteID:{d.id}</Text>
                    <Text>Customer Name: {d.customerName} </Text>
                    <Text>Customer Mobile: {d.customerMobile} </Text>
                    <Text>Address Line1: {d.addressLine} </Text>
                    <Text>Address Line2: {d.addressLine} </Text>
                    <Text>Pincode: {d.pincode} </Text>
                    <Text>City: {d.city} </Text>
                    <Text>State: {d.state} </Text>
                    <Text>Customer Age: {d.customerAge} </Text>
                    <Text>
                      Customer Father's Name : {d.customerFatherName}{' '}
                    </Text>
                    <Text>Owning/Residing Since: {d.owning} </Text>
                    <Text>Creation Date: {d.creationDate} </Text>
                    <Text>Customer Consent: {d.status} </Text>

                    <View>
                      {/* <TouchableOpacity>
                        <Image
                          style={{width: '30%', height:130, borderRadius:10,}}
                          source={{
                            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRWTBeX5wowkab5SQvCH4nno2GTCrJu3SXMA&usqp=CAU',
                          }}
                        />
                        </TouchableOpacity> */}
                    </View>
                  </View>
                );
              })}
              <View style={[SiteImageStyle.imgFooter]}>
                <View
                  style={{
                    borderWidth: 1,
                    width: '40%',
                    height: 130,
                    borderRadius: 10,
                  }}>
                  <Image
                    style={{width: '100%', height: 120, borderRadius: 10}}
                    source={{
                      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRWTBeX5wowkab5SQvCH4nno2GTCrJu3SXMA&usqp=CAU',
                    }}
                  />
                </View>
                <View
                  style={{
                    borderWidth: 1,
                    width: '40%',
                    height: 130,
                    borderRadius: 10,
                  }}>
                  <Image
                    style={{width: '100%', height: 120, borderRadius: 10}}
                    source={{
                      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRWTBeX5wowkab5SQvCH4nno2GTCrJu3SXMA&usqp=CAU',
                    }}
                  />
                </View>
                </View>
                <View style={[SiteImageStyle.imgFooter2]}>
                <View
                  style={{
                    borderWidth: 1,
                    width: '40%',
                    height: 130,
                    borderRadius: 10,
                  }}>
                  <Image
                    style={{width: '100%', height: 120, borderRadius: 10}}
                    source={{
                      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRWTBeX5wowkab5SQvCH4nno2GTCrJu3SXMA&usqp=CAU',
                    }}
                  />
                </View>
                <View
                  style={{
                    borderWidth: 1,
                    width: '40%',
                    height: 130,
                    borderRadius: 10,
                  }}>
                  <Image
                    style={{width: '100%', height: 120, borderRadius: 10}}
                    source={{
                      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRWTBeX5wowkab5SQvCH4nno2GTCrJu3SXMA&usqp=CAU',
                    }}
                  />
                </View>
                </View>
                <View style={[SiteImageStyle.logoutHeader,]}>
                <Text style={[SiteImageStyle.logoutText]}>TRIGGER CUSTOMER CONSENT</Text>
              </View>
                <View style={{marginVertical: '18%'}}></View>
              
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SiteImage;
