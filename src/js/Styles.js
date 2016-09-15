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
    width: 300
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

  dataFormBox: {
    position: 'relative',
    flexGrow: 1,
    //borderLeftColor: grey400,
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

  DataFormToolbarBox: {
    position: 'relative',
  },

  DataFormToolbarWrapper: {
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

  dataFormGroupBox: {
    position: 'relative',
    padding:5,
    borderWidth: 1,
    borderColor: 'pink',
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
    position: 'relative',
    flexGrow: 1,
    padding:2,
    borderWidth: 1,
    borderColor: 'yellow'

  },

  dataFormGroupRowWrapper: {
    //position:'absolute',
    flexDirection:'row',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },

  dataFormGroupColLabelBox: {
    position: 'relative',
    flexGrow: 1
  },

  dataFormGroupColLabelWrapper: {
    position: 'absolute',
    flexDirection:'row',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },

  dataFormGroupFieldBox: {
    position: 'relative',
    flexGrow: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: 'green'
  },

  dataFormGroupFieldWrapper: {
    //position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },

  dataFormGroupColBox: {
    position:'relative',
    flexGrow: 1,
    borderWidth: 1,
    borderColor: 'red',
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
    width: 75,
    marginRight: 10,
    borderWidth: 1,
    borderColor: 'blue',
    justifyContent: 'center',
    //alignItems: 'center',
  },

  dataFormGroupLabelWrapper: {
    // position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },

//For image thumbnail component
  dataFormGroupImageBox: {
    position: 'relative',
    flexGrow: 1,
    //borderWidth: 1,
    //borderColor: 'blue',
    height: '200'
  },

  dataFormGroupImageWrapper: {
    position: 'absolute',
    flexDirection: 'row',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },

  dataFormGroupAddBox: {
    position: 'relative',
    width: 200,
    margin: 5,
    borderWidth: 1,
    borderColor: 'orange'
  },

  dataFormGroupAddWrapper: {
    // position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },

  dataFormGroupImageListBox: {
    position: 'relative',
    flexGrow: 1,
    borderWidth: 1,
    borderColor: 'purple'
  },

  dataFormGroupImageListWrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },

  roImageBox: {
    flexGrow: 1,
    position: 'relative',
    borderWidth: 1,
    borderColor: 'red'
  },

  roImageWrapper: {
    position: 'absolute',
    //flexDirection: 'column',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },

  formImage: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'red',
    resizeMode: 'contain'
  },

  roImage: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
    borderWidth: 1,
    //borderColor: 'black',
    //position: 'absolute',
  },

  dataFormImageBox: {
    width: 200,
    minWidth: 200,
    margin: 1,
    //display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  test: {
    position: 'absolute',
    backgroundColor: 'transparent'
  }
});

export default styles;
