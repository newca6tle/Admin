import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
// Components
import PreviewEditorContent from './PreviewEditorContent';
import PreviewScreenContent from './PreviewScreenContent';
// Styles
import styles from '../stylePV';

const mapStateToProps = (state) => ({
  state
});

let Preview = ({ state, children }) => {
  return (
    <View style={styles.previewContentBox}>
      <View style={styles.previewContentWrapper}>
        <PreviewEditorContent />
        <PreviewScreenContent />
      </View>
    </View>
  )
}

export default connect(mapStateToProps)(Preview);
