// Stylesheet for Preview

import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({

  previewContentBox: {
    position: 'relative',
    flexGrow: 1
  },

  previewContentWrapper: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },

  previewEditorBox: {
    position: 'relative',
    width: 400
  },

  previewEditorWrapper: {
    position: 'absolute',
    paddingTop: 20,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'column',

  },

  previewEditorGroupBox: {
    position: 'relative',
    //flexGrow: 1
  },

  previewEditorGroupWrapper: {
    //position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },

  previewEditorGroupRowBox: {
    position: 'relative',
    flexGrow: 1,
  },

  previewEditorGroupRowWrapper: {
    //position:'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    paddingLeft: 20,
    paddingRight: 20
  },

  previewScreenBox: {
    position: 'relative',
    flexGrow: 1,
    borderLeftWidth: 1,
    backgroundColor: 'grey'
  },

  previewScreenWrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 10
  },

  previewImage: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
    //position: 'absolute',
  },

  previewScreenImageBox: {
    height: 200,
    //display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  previewScreenGroupImageBox: {
    position: 'relative'
  },

  previewScreenGroupImageWrapper: {
    //position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },

  previewScreenGroupRowBox: {
    position: 'relative',
    flexGrow: 1
  },

  previewScreenGroupRowWrapper: {
    //position:'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },

  iPhone5: {
    width: 320,
    height: 568,
    justifyContent: 'center',
    backgroundColor: 'white'
  },

  iPhone6: {
    width: 414,
    height: 736,
    justifyContent: 'center',
    backgroundColor: 'white'
  },

  card: {
    justifyContent: 'center',
    //borderWidth: 1
  },

  title: {
    fontSize: '1.25rem',
    fontWeight: 'bold'
  },

  image: {
    justifyContent: 'center',
  }

})
export default styles;
