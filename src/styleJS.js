import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({

  applicationContentBox: {
    position: 'relative',
    flexGrow: 1
  },

  applicationContentWrapper: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },

  dataListBox: {
    position: 'relative',
    width: 400
  },

  dataListWrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'column'
  },

  DataListToolbarBox:{
    position: 'relative'
  },

  DataListToolbarWrapper:{
    //position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },

  dataListContentBox: {
    position: 'relative',
    flexGrow: 1
  },

  dataListContentWrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },

  dataFormBox: {
    position: 'relative',
    flexGrow: 1,
    borderLeftWidth: 1
  },

  dataFormWrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'column'
  },

  dataFormGroupBox: {
    position: 'relative',
    padding:5,
    flexGrow: 1
  },

  dataFormGroupWrapper: {
    //position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },

  dataFormGroupRowBox: {
    top: 16,
    position: 'relative',
    flexGrow: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: 'white'
  },

  dataFormGroupRowWrapper: {
    //position:'absolute',
    flexDirection:'row',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },

  dataFormGroupColBox: {
    position:'relative',
    flexGrow: 1,
    borderWidth: 1,
    borderColor: '#f7423b',
  },

  dataFormGroupColWrapper: {
    //position: 'absolute',
    flexDirection: 'row',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },

  dataFormGroupLabelBox: {
    position: 'relative',
    width: 90,
    marginRight: 6,
    justifyContent: 'center',
    backgroundColor: '#f7423b'
    //alignItems: 'center',
  },

  dataFormGroupLabelWrapper: {
    // position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },

  dataFormGroupFieldBox: {
    position: 'relative',
    flexGrow: 1,
    marginRight: 10
  },

  dataFormGroupFieldWrapper: {
    //position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },

  formImage: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
    //position: 'absolute',
  },

  dataFormImageBox: {
    margin: 1,
    //display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  dataFormGroupImageBox: {
    position: 'relative',
    flexGrow: 1,
  },

  dataFormGroupImageWrapper: {
    //position: 'absolute',
    flexDirection: 'row',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
});

export default styles;
