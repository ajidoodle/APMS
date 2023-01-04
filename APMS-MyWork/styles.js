import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  footerSort: {
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  sort: {
    color: 'black',
    fontSize: 23,
    fontWeight: 'bold',
  },
  sortDate: {
    fontSize: 15,
    fontWeight: '100',
  },
  line: {
    fontSize: 40,
  },
  filterHeader:{
    marginTop:20
  },
  filter: {
    color: 'black',
    fontSize: 23,
    fontWeight: 'bold',
  },
  filterDate: {
    fontSize: 15,
    fontWeight: '100',
  },
  emptyLineFooter: {
    borderWidth: 1,
    borderColor: '#DBDBDB',
    width: '100%',
    height: 1,
    marginTop: 10,
  },
  logoutHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#4584F3',
    width: '100%',
    height: '3%',
    borderRadius: 5,
    marginTop: 10,
  },
  logoutText: {
    flexDirection: 'column',
    alignSelf: 'center',
    alignContent: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  headerId: {
    // marginBottom:10,
    borderWidth: 1,
    margin: 8,
    padding: 25,
    borderRadius: 10,
  },
  headerTop: {
    bottom: 15,
  },
  img3: {
    width: '20%',
    height: '120%',
  },
  Index: {
    backgroundColor: '#4584F3',
  },
  Icon: {
    margin: 10,
  },
  first: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    top: '5%',
  },
  secondContent: {
    backgroundColor: '#fff',
    borderRadius: 5,
    width: '55%',
    bottom: 10,
  },
  second: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },

  img1: {
    height: '90%',
    width: '6%',
  },
  imgHeader: {
    height: '100%',
    width: '4%',
  },
  img2: {
    height: 20,
    width: 28,
    right: 45,
    marginLeft: 50,
    top: 12,
    bottom: 8,
  },
  text1: {
    marginLeft: 20,
    fontSize: 18,
    color: '#fff',
  },
  text2: {
    fontSize: 16,
    bottom: 10,
    fontWeight: 'bold',
    marginLeft: 40,
    color: '#4584F3',
  },
  log: {
    marginBottom: 2,
    marginLeft: 2,
    marginEnd: 2,
    marginTop: 2,
  },
  userinput: {
    flexDirection: 'row',
  },
  userinput2: {
    flexDirection: 'row',
    padding: 40,
    bottom: 75,
    left: 45,
  },
  empytFooter: {
    // marginVertical: '30%',
  },
});
export default styles;
