import React from 'react';
import { View } from 'react-native';
// Components
import DataFormToolbar from './DataFormToolbar';
import DataFormContent from './DataFormContent';
// Styles
import styles from '../styleJS';

const DataForm = ({ itemId, children }) => {
  return (
    <View style={styles.dataFormBox}>
      <View style={styles.dataFormWrapper}>
        <DataFormToolbar itemId={itemId} />
        {children}
      </View>
    </View>);
};

export default DataForm;
