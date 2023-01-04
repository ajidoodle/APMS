import React from 'react';
import {Text, View, Image, ScrollView, SafeAreaView} from 'react-native';
import styles from './styles';

const SideBar = () => {
  return (
    <SafeAreaView>
      <View style={styles.Index}>
        <View style={styles.Icon}>
          <View style={styles.first}>
            <Image
              style={styles.imgHeader}
              // source={require('./assets/images/leftArrow.png ')}
              source={require('../assets/images/leftArrow.png')}
            />
            <Text style={styles.text1}>Profile</Text>
          </View>
          <View style={styles.second}>
            <Image
              style={styles.img2}
              source={{
                uri: 'https://www.iconpacks.net/icons/1/free-phone-icon-1-thumb.png',
              }}
            />
            <Text style={styles.text2}>Call</Text>
          </View>
        </View>
        {/* step2 */}
        <View
          style={{
            backgroundColor: 'white',
            borderTopStartRadius: 20,
            borderTopEndRadius: 20,
          }}>
          <ScrollView>
            <View style={{padding: 10, margin: 10}}>
              <View style={styles.userinput}>
                <Image
                  style={styles.img3}
                  source={require('../assets/images/profile.png')}
                />

                <Text
                  style={{
                    color: 'black',
                    left: 20,
                    fontSize: 17,
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  PROD TEST CONTRACTOR {'\n'}{' '}
                  <Text style={{fontSize: 12, color: 'gray'}}>
                    988230909389 | +99474957785
                  </Text>
                </Text>
                <Text style={{color: 'black', fontSize: 12}}></Text>
              </View>
              <View style={[styles.uploadTextMain]}>
                <Text style={[styles.uploadText]}>UPLOAD PHOTO</Text>
              </View>
              <View style={[styles.emptyLine]}></View>
              <Text style={[styles.ptsText]}>-292746.00 Pts to Gold</Text>
              <View style={[styles.ptsHeader]}>
                <Image
                  style={[styles.img1, {width: 20, height: 30, bottom: 26}]}
                  source={{
                    uri: 'http://cdn.onlinewebfonts.com/svg/img_552537.png',
                  }}
                />

                <View style={[styles.emptyLinePts]}></View>
                <Image
                  style={[styles.img1, {width: 20, height: 30, bottom: 26}]}
                  source={{
                    uri: 'http://cdn.onlinewebfonts.com/svg/img_552537.png',
                  }}
                />
              </View>
              <View style={[styles.footerPtsText]}>
                <Text style={{fontSize: 15, right: 5}}>Silver</Text>
                <Text style={{fontSize: 15, left: 5}}>Gold</Text>
              </View>
              <View style={[styles.loyalityMargin]}>
                <View style={[styles.loyaltyHeader]}>
                  <Text style={[styles.loyaltyText]}>Loyalty Points</Text>
                  <View style={[styles.loyaltyHeaderMain]}>
                    <Text style={[styles.loyaltyText2]}>REDEEM POINTS</Text>
                  </View>
                </View>
                <View style={[styles.loyaltyHeader, {marginTop: 15}]}>
                  <Text style={[styles.totalText]}>Total Earned</Text>
                  <Text style={[styles.totalText2]}>332747 LP</Text>
                </View>
                <View style={[styles.loyaltyHeader, {marginTop: 15}]}>
                  <Text style={[styles.usedText]}>Used</Text>
                  <Text style={[styles.usedText2]}>28000 LP</Text>
                </View>
                <View style={[styles.loyaltyHeader, {marginTop: 15}]}>
                  <Text style={[styles.availableText]}>Available</Text>
                  <Text style={[styles.availableText2]}>304747 LP</Text>
                </View>
              </View>
              <View style={[styles.emptyLineFooter]}></View>
              <View style={[styles.myWorkHeader]}>
                <Image
                  style={[styles.img1, {width: 25, height: 25}]}
                  source={{
                    uri: 'https://static.thenounproject.com/png/6075-200.png',
                  }}
                />
                <Text style={[styles.myWorkText]}>My Work</Text>
                <Image
                  style={[styles.img1, {width: 20, height: 20}]}
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/32/32213.png',
                  }}
                />
              </View>
              <View style={[styles.myWorkHeader2]}>
                <Image
                  style={[styles.img1, {width: 25, height: 25}]}
                  source={{
                    uri: 'https://img.freepik.com/free-icon/like-hand-symbol_318-31846.jpg?w=2000',
                  }}
                />
                <Text style={[styles.myWorkText2]}>Benefits</Text>
                <Image
                  style={[styles.img1, {width: 20, height: 20}]}
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/32/32213.png',
                  }}
                />
              </View>
              <View style={[styles.myWorkHeader3]}>
                <Image
                  style={[styles.img1, {width: 33, height: 21}]}
                  source={{
                    uri: 'https://uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/gift-voucher-icon.png',
                  }}
                />
                <Text style={[styles.myWorkText3]}>Activate Gift Card</Text>
                <Image
                  style={[styles.img1, {width: 20, height: 20}]}
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/32/32213.png',
                  }}
                />
              </View>
              <View style={[styles.myWorkHeader4]}>
                <Image
                  style={[styles.helpLogo, {width: 25, height: 25}]}
                  source={{
                    uri: 'https://www.iconpacks.net/icons/1/free-phone-icon-1-thumb.png',
                  }}
                />
                <Text style={[styles.myWorkText4]}>Help</Text>
                <Image
                  style={[styles.img1, {width: 20, height: 20}]}
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/32/32213.png',
                  }}
                />
              </View>
              <View style={[styles.myWorkHeader5, {opacity: 0.2}]}>
                <Image
                  style={[styles.img1, {width: 25, height: 25}]}
                  source={require('../assets/images/lock.png')}
                />
                <Text style={[styles.myWorkText5]}>Change Password</Text>
                <Image
                  style={[styles.img1, {width: 20, height: 20}]}
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/32/32213.png',
                  }}
                />
              </View>
              <View style={[styles.logoutHeader]}>
                <Text style={[styles.logoutText]}>LOGOUT</Text>
              </View>
            </View>
            <View style={[styles.empytFooter]}></View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SideBar;
