import {StyleSheet} from 'react-native';
const SiteImageStyle = StyleSheet.create({
    imgFooter:{
        // borderWidth:1,
        height:'14%',
        flexWrap:'wrap',
        marginVertical:20,
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    imgFooter2:{
        // borderWidth:1,
        height:'14%',
        flexWrap:'wrap',
        marginVertical:20,
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
  logoutHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#4584F3',
    width: '100%',
    height: '6%',
    borderRadius: 5,
    marginTop:10,
  },
  logoutText: {
    flexDirection: 'column',
    alignSelf: 'center',
    alignContent: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  editSiteDetails:{
    flexDirection:'row',
    justifyContent:'flex-end',
  },
  editSiteDetailsText:{
    textDecorationLine:'underline',
    fontWeight:'bold',
    color:'#4584F3'
  },
  headerId: {
    // marginBottom:10,
    borderWidth: 1,
    margin: 8,
    padding: 25,
    borderRadius: 10,
  },
 
  Index: {
    backgroundColor: '#4584F3',
  },
  textInputBox: {
    marginLeft:'40%',
  },
  inputBox: {
    width: '65%',
    height:'80%',
    // marginLeft:47,
    borderWidth:1,
    borderRadius:5,
    borderColor:'#4584F3',
  },
  headerInputBox : {
    flexDirection: 'row',
    marginTop:10,
    justifyContent:'space-between'
  },
  Icon: {
    margin: 15,
  },
  first: {
    marginTop: '2%',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    // top: '5%',
  },

  img1: {
    height: '90%',
    width: '6%',
  },
  imgHeader: {
    height: '100%',
    width: '4%',
  },

  text1: {
    marginLeft: 20,
    fontSize: 18,
    color: '#fff',
  },

  log: {
    marginBottom: 2,
    marginLeft: 2,
    marginEnd: 2,
    marginTop: 2,
  },

  empytFooter: {
    // marginVertical: '20%',
  },
});
export default SiteImageStyle;
