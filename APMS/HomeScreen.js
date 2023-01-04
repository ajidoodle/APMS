import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';
// import {styles} from './styles'
// image

const images = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3nyCIRxRtvhgRHx-OC_toGkQ60F3xYM0eXQ&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMBUzLbbCebNi-PJGIfvxdkNFJkAuZLu_4dg&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2pMz-yAAosybh5jSKbWPsSam398y4ILmEtQ&usqp=CAU',
];
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

//image

const HomeScreen = () => {
  // image
  const [imgActive, setimgActive] = useState(0);
  onchange = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide != imgActive) {
        setimgActive(slide);
      }
    }
  };
  //image
  return (
    <SafeAreaView style={[styles.body]}>
      {/* <ScrollView> */}
      <View style={[styles.container, {backgroundColor: '#614CEA'}]}>
        <View style={{flexDirection: 'row', margin: 10}}>
          <Image
            style={{width: 40, height: 40}}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/681/681582.png',
            }}
          />
          <Text
            style={{
              fontFamily: 'Allura-Regular',
              fontSize: 15,
              fontWeight: 'bold',
              color: '#fff',
              marginLeft: 15,
              marginTop: 10,
            }}>
            Master Strokes
          </Text>
          <View style={{marginLeft: 80, flexDirection: 'row'}}>
            <Image
              style={[styles.img1, {width: 30, height: 30}]}
              source={{
                uri: 'https://www.freepnglogos.com/uploads/translate-logo-png/line-icon-logos-alteration-translate-language-21.png',
              }}
            />
            <Image
              style={[styles.img1, {width: 30, height: 30, marginLeft: 30}]}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/3602/3602145.png',
              }}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', margin: 10, marginTop: -2}}>
          <Text
            style={{
              color: '#fff',
              maxWidth: '40%',
              lineHeight: 30,
              fontSize: 20,
            }}>
            PROD TEST CONTACTOR
          </Text>

          <Image
            style={[
              styles.img1,
              {width: 40, height: 40, borderRadius: 40, marginLeft: '35%'},
            ]}
            source={{
              uri: 'https://www.pngarts.com/files/5/Cartoon-Avatar-PNG-Transparent-Image.png',
            }}
          />
          <Image
            style={[
              styles.img1,
              {
                width: 30,
                height: 30,
                borderRadius: 40,
                marginLeft: 15,
                marginTop: 5,
              },
            ]}
            source={{
              uri: 'https://icons.veryicon.com/png/o/miscellaneous/big-data-regular-monochrome-icon/sidebar-4.png',
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            right: 30,
            bottom: 30,
          }}>
          <Text style={{fontSize: 14, color: '#fff'}}>
            -292746.00Pts to Gold
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 15,
            marginTop: -3,
            marginTop: 20,
            marginVertical: 20,
          }}>
          <Image
            style={[styles.img1, {width: 20, height: 30, bottom: 26}]}
            source={{
              uri: 'http://cdn.onlinewebfonts.com/svg/img_552537.png',
            }}
          />
          <Text
            style={{fontSize: 20, color: '#fff', marginLeft: 10, bottom: 26}}>
            332747.00 <Text style={{fontSize: 10, color: '#fff'}}>Pts</Text>
          </Text>

          {/* <Text style={{fontSize:14,color: '#fff',}}>
            -292746.00Pts to Gold
          </Text> */}
          <Text
            style={{
              width: '44%',
              height: 8,
              backgroundColor: '#fff',
              borderRadius: 10,
              bottom: 45,
              left: 35,
            }}></Text>
          <View style={{right: '30%', bottom: 35, flexDirection: 'row'}}>
            <Text style={{color: '#fff'}}>SILVER</Text>
            <Text style={{color: '#fff', left: 60}}>GOLD</Text>
          </View>
        </View>
      </View>
      {/* </ScrollView> */}
      <View
        style={{
          backgroundColor: '#fff',
          borderRadius: 20,
          marginVertical: -30,
        }}>
        {/* image */}

        <View style={styles.wrap}>
          <ScrollView
            onScroll={({nativeEvent}) => onchange(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            //   autoplayInterval={1000}

            style={[
              styles.wrap,
              {left: 15, marginLeft: -15, top: 50, marginVertical: -40},
            ]}>
            {/* image call---> map */}
            {images.map((e, index) => (
              <Image
                key={e}
                resizeMode="stretch"
                style={styles.wrap}
                source={{uri: e}}
              />
            ))}
          </ScrollView>
        </View>
        {/* image */}
        <View style={{}}></View>
        <ScrollView style={{margin: 10}}>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 20,
              justifyContent: 'space-evenly',
              //   borderWidth: 1,
            }}>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignSelf: 'center',
                margin: 10,
              }}>
              <Image
                style={[styles.img1, {width: 50, height: 60, marginLeft: 10}]}
                source={{
                  uri: 'https://static.vecteezy.com/system/resources/thumbnails/005/196/584/small/waterdrop-water-droplet-liquid-line-icon-illustration-logo-template-suitable-for-many-purposes-free-vector.jpg',
                }}
              />
              <View
                style={{
                  flexDirection: 'column',
                  alignContent: 'flex-start',
                  alignSelf: 'center',
                }}>
                <Text style={{fontSize: 15, maxWidth: '50%', left: 20}}>
                  Color
                </Text>
                <Text style={{}}>Visualization</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignSelf: 'center',
                margin: 10,
              }}>
              <Image
                style={[
                  styles.img1,
                  {width: 40, height: 40, marginLeft: 16, bottom: 2},
                ]}
                source={{
                  uri: 'https://www.iconpacks.net/icons/2/free-guarantee-icon-3598-thumb.png',
                }}
              />
              <View
                style={{
                  flexDirection: 'column',
                  alignContent: 'flex-start',
                  alignSelf: 'center',
                  top: 8,
                }}>
                <Text style={{fontSize: 15, maxWidth: '80%', left: 10}}>
                  Warranty
                </Text>
                <Text style={{}}>Registration</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignSelf: 'center',
                margin: 10,
                bottom: 10,
              }}>
              <Image
                style={[
                  styles.img1,
                  {width: 40, height: 40, marginLeft: 10, left: 5},
                ]}
                source={{
                  uri: 'https://www.pngmart.com/files/20/Youtube-Logo-PNG-Background-Image.png',
                }}
              />
              <View
                style={{
                  flexDirection: 'column',
                  alignContent: 'flex-start',
                  alignSelf: 'center',
                }}>
                <Text style={{fontSize: 15, top: 8}}>Promotion</Text>
              </View>
            </View>
          </View>

          {/* 2nd column----------- */}

          <View
            style={{
              flexDirection: 'row',
              marginVertical: 20,
              justifyContent: 'space-evenly',
              //   borderWidth: 1,
              bottom: 58,
            }}>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignSelf: 'center',
                margin: 10,
              }}>
              <Image
                style={[
                  styles.img1,
                  {width: 50, height: 60, marginLeft: 10, left: -10},
                ]}
                source={{
                  uri: 'https://static.vecteezy.com/system/resources/thumbnails/005/196/584/small/waterdrop-water-droplet-liquid-line-icon-illustration-logo-template-suitable-for-many-purposes-free-vector.jpg',
                }}
              />
              <View
                style={{
                  flexDirection: 'column',
                  alignContent: 'flex-start',
                  alignSelf: 'center',
                }}>
                <Text style={{fontSize: 15, left: -5}}>Scheme</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignSelf: 'center',
                margin: 10,
              }}>
              <Image
                style={[
                  styles.img1,
                  {width: 40, height: 40, marginLeft: 16, bottom: -8, left: 6},
                ]}
                source={{
                  uri: 'https://www.iconpacks.net/icons/2/free-guarantee-icon-3598-thumb.png',
                }}
              />
              <View
                style={{
                  flexDirection: 'column',
                  alignContent: 'flex-start',
                  alignSelf: 'center',
                  top: 15,
                  left: 6,
                }}>
                <Text style={{fontSize: 15, maxWidth: '80%', left: 10}}>
                  Product
                </Text>
                <Text style={{}}>Information</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignSelf: 'center',
                margin: 10,
                bottom: 10,
              }}>
              <Image
                style={[
                  styles.img1,
                  {width: 40, height: 40, marginLeft: 10, top: 16},
                ]}
                source={{
                  uri: 'https://www.pngmart.com/files/20/Youtube-Logo-PNG-Background-Image.png',
                }}
              />
              <View
                style={{
                  flexDirection: 'column',
                  alignContent: 'flex-start',
                  alignSelf: 'center',
                  top: 22,
                }}>
                <Text style={{fontSize: 15, maxWidth: '100%', left: 5}}>
                  Redeem
                </Text>
                <Text style={{left: 10}}>History</Text>
              </View>
            </View>
          </View>

          {/* 3rd Column------------ */}

          <View
            style={{
              flexDirection: 'row',
              marginVertical: 20,
              justifyContent: 'space-evenly',
              //   borderWidth: 1,
              top: -90,
            }}>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignSelf: 'center',
                margin: 10,
              }}>
              <Image
                style={[
                  styles.img1,
                  {width: 50, height: 60, marginLeft: 10, left: -10},
                ]}
                source={{
                  uri: 'https://static.vecteezy.com/system/resources/thumbnails/005/196/584/small/waterdrop-water-droplet-liquid-line-icon-illustration-logo-template-suitable-for-many-purposes-free-vector.jpg',
                }}
              />
              <View
                style={{
                  flexDirection: 'column',
                  alignContent: 'flex-start',
                  alignSelf: 'center',
                }}>
                <Text style={{fontSize: 15, left: -5}}>Scheme</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignSelf: 'center',
                margin: 10,
              }}>
              <Image
                style={[
                  styles.img1,
                  {width: 40, height: 40, marginLeft: 16, bottom: -8, left: 6},
                ]}
                source={{
                  uri: 'https://www.iconpacks.net/icons/2/free-guarantee-icon-3598-thumb.png',
                }}
              />
              <View
                style={{
                  flexDirection: 'column',
                  alignContent: 'flex-start',
                  alignSelf: 'center',
                  top: 15,
                  left: 6,
                }}>
                <Text style={{fontSize: 15, maxWidth: '80%', left: 10}}>
                  Product
                </Text>
                <Text style={{}}>Information</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignSelf: 'center',
                margin: 10,
                bottom: 10,
              }}>
              <Image
                style={[
                  styles.img1,
                  {width: 40, height: 40, marginLeft: 10, top: 16},
                ]}
                source={{
                  uri: 'https://www.pngmart.com/files/20/Youtube-Logo-PNG-Background-Image.png',
                }}
              />
              <View
                style={{
                  flexDirection: 'column',
                  alignContent: 'flex-start',
                  alignSelf: 'center',
                  top: 22,
                }}>
                <Text style={{fontSize: 15, maxWidth: '100%', left: 5}}>
                  Redeem
                </Text>
                <Text style={{left: 10}}>History</Text>
              </View>
            </View>
          </View>

          {/* 4th Column------------- */}

          <View
            style={{
              flexDirection: 'row',
              // marginVertical: 20,
              marginTop: '-20%',
              justifyContent: 'space-evenly',
              //   borderWidth: 1,
              top: -480,
              left: -30,
            }}>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignSelf: 'center',
                margin: 10,
              }}>
              <Image
                style={[
                  styles.img1,
                  {width: 50, height: 60, marginLeft: 10, left: -10},
                ]}
                source={{
                  uri: 'https://static.vecteezy.com/system/resources/thumbnails/005/196/584/small/waterdrop-water-droplet-liquid-line-icon-illustration-logo-template-suitable-for-many-purposes-free-vector.jpg',
                }}
              />
              <View
                style={{
                  flexDirection: 'column',
                  alignContent: 'flex-start',
                  alignSelf: 'center',
                }}>
                <Text style={{fontSize: 15, left: -5}}>Scheme</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignSelf: 'center',
                margin: 10,
              }}>
              <Image
                style={[
                  styles.img1,
                  {width: 40, height: 40, marginLeft: 16, bottom: -8, left: 6},
                ]}
                source={{
                  uri: 'https://www.iconpacks.net/icons/2/free-guarantee-icon-3598-thumb.png',
                }}
              />
              <View
                style={{
                  flexDirection: 'column',
                  alignContent: 'flex-start',
                  alignSelf: 'center',
                  top: 15,
                  left: 6,
                }}>
                <Text style={{fontSize: 15, maxWidth: '80%', left: 10}}>
                  Product
                </Text>
                <Text style={{}}>Information</Text>
              </View>
            </View>
            <View style={{marginVertical: '150%'}}></View>

            {/* <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignSelf: 'center',
                margin: 10,
                bottom: 10,
              }}>
              <Image
                style={[styles.img1, {width: 40, height: 40, marginLeft: 10,top:16,}]}
                source={{
                  uri: 'https://www.pngmart.com/files/20/Youtube-Logo-PNG-Background-Image.png',
                }}
              />
              <View
                style={{
                  flexDirection: 'column',
                  alignContent: 'flex-start',
                  alignSelf: 'center',
                  top:22,
                }}>
                <Text style={{fontSize: 15, maxWidth: '100%', left: 5}}>
                  Redeem
                </Text>
                <Text style={{left:10}}>History</Text>
              </View>
            </View> */}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#614CEA',
  },
  body: {
    backgroundColor: 'black',
  },

  // img start
  wrap: {
    width: WIDTH * 1.0,
    height: HEIGHT * 0.1,
    borderRadius: 10,
    marginLeft: 25,
    maxWidth: '90%',
    width: 400,
  },
  wrapDot: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotActive: {
    margin: 3,
    color: 'white',
  },
  dot: {
    margin: 3,
    color: 'grey',
  },
  //img end
});
