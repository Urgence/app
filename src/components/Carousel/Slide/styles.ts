import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  slide: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: 30,
    flexBasis: '100%',
    flex: 1,
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    height: 200,
  },
  slideText: {
    width: '100%',
    textAlign: 'left',
    fontSize: 20,
    display:'flex',
    alignItems: 'center',
    marginTop: '10%'
  },
  text : {
    fontWeight: 'bold',
    color:'#000000'

  }
});

export default styles;
