import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  FlatList,
  Modal,
  TouchableOpacity
} from 'react-native';
import styles from './styles';
import {details} from './Details';
// import { FlatList } from 'react-native-gesture-handler';

const MyWork = () => {
  const [visible, setVisible] = useState(false);
  return (
    <SafeAreaView style={{flex: 2}}>
      <View style={[styles.Index]}>
        <View style={styles.Icon}>
          <View style={styles.first}>
            <Image
              style={styles.imgHeader}
              source={require('../assets/images/leftArrow.png')}
            />
            <Text style={styles.text1}>My Work</Text>
          </View>
          <View style={styles.second}>
            <View style={[styles.secondContent]}>
              <Image
                style={styles.img2}
                source={{
                  uri: 'https://companieslogo.com/img/orig/ASIANPAINT.NS-6124f67e.png?t=1596837431',
                }}
              />
              <Text style={styles.text2}>Share on Website</Text>
            </View>
          </View>
        </View>
        {/* step2 */}
        <View
          style={{
            backgroundColor: 'white',
            borderTopStartRadius: 20,
            borderTopEndRadius: 20,
            // flex: 0.8,
            // backgroundColor:'red',
          }}>
          {/* <FlatList
            data={details}
            renderItem={({item})=>{
                return(
                    <View key={item.id} style={[styles.headerId,]}>
                    <Text>SiteID:{item.id}</Text>
                    <Text>Customer Name: {item.customerName} </Text>
                    <Text>Creation Date: {item.creationDate} </Text>
                    <Text>Customer Consent: {item.status} </Text>
                    </View>
                )
            }}
            /> */}
          <ScrollView>
            <View style={{padding: 10}}>
              <View style={[styles.headerTop]}>
                {details.map(d => {
                  return (
                    <View key={d.id} style={[styles.headerId]}>
                      <Text>SiteID:{d.id}</Text>
                      <Text>Customer Name: {d.customerName} </Text>
                      <Text>Creation Date: {d.creationDate} </Text>
                      <Text>Customer Consent: {d.status} </Text>
                      <View>
                        <TouchableOpacity>
                        <Image
                          style={{width: '30%', height:130, borderRadius:10,}}
                          source={{
                            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRWTBeX5wowkab5SQvCH4nno2GTCrJu3SXMA&usqp=CAU',
                          }}
                        />
                        </TouchableOpacity>
                      </View>
                    </View>
                  );
                })}
                <View style={[styles.logoutHeader, {}]}>
                  <Text style={[styles.logoutText]}>ADD NEW SITE</Text>
                </View>
                <View style={[styles.emptyLineFooter]}></View>
                <View style={[styles.footerSort]}>
                  <Text style={[styles.sort]}>
                    {' '}
                    Sort:
                    <Text style={[styles.sortDate]}>
                      {' '}
                      Date: Descending<Text style={[styles.line]}>|</Text>
                    </Text>
                  </Text>
                  <View style={[styles.filterHeader]}>
                  <Text style={[styles.filter]}>
                    Filter: <Text style={[styles.filterDate]}>Date Range</Text>{' '}
                  </Text>
                  </View>
                </View>
                <View style={{marginVertical: '27%'}}></View>
              </View>
            </View>
          </ScrollView>
          {/* <View style={[styles.empytFooter]}></View> */}
        </View>
      </View>
      <Modal animationType="slide" visible={visible}></Modal>
    </SafeAreaView>
  );
};

export default MyWork;

// import {Text, View, Image, ScrollView, SafeAreaView,FlatList} from 'react-native';
// import styles from './styles';
// import {details} from './Details';
// const MyWork = () => {
//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View style={styles.Index}>
//         <View style={styles.Icon}>
//           <View style={styles.first}>
//             <Image
//               style={styles.imgHeader}
//               source={require('../assets/images/leftArrow.png')}
//             />
//             <Text style={styles.text1}>Create Site</Text>
//           </View>
//         </View>
//         <View
//           style={{
//             backgroundColor: 'red',
//             borderTopStartRadius: 20,
//             borderTopEndRadius: 20,
//             marginTop: 15,
//             // flex:1,
//           }}>
//           {/* <ScrollView> */}
//           <View style={{padding: 10}}>
//             {/* <FlatList
//               data={details}
//               renderItem={({item}) => {
//                 return (
//                   <View key={item.id} style={[styles.headerId]}>
//                     <Text>SiteID:{item.id}</Text>
//                     <Text>Customer Name: {item.customerName} </Text>
//                     <Text>Creation Date: {item.creationDate} </Text>
//                     <Text>Customer Consent: {item.status} </Text>
//                   </View>
//                 );
//               }}
//             /> */}

//             <View style={[styles.headerTop]}>
//               <View style={[styles.headerInputBox]}>
//                 <Text style={[styles.nameText]}>
//                   Customer Name <Text style={{color: 'red'}}>*</Text>
//                 </Text>
//                 <View style={[styles.inputBox]}>

//                 </View>
//               </View>

//               <View style={[styles.logoutHeader,]}>
//                 <Text style={[styles.logoutText]}>NEXT</Text>
//               </View>
//               <View style={[styles.empytFooter]}></View>
//             </View>
//           </View>
//           {/* </ScrollView> */}
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default MyWork;
