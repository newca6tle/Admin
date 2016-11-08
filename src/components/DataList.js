import React from 'react';
import { View } from 'react-native';
// Styles
import styles from '../styleJS';
import DataListToolbar from './DataListToolbar';
import DataListContent from './DataListContent';

const DataList = () => {
  return (
    <View style={styles.dataListBox}>
      <View style={styles.dataListWrapper}>
        <DataListToolbar/>
        <DataListContent/>
      </View>
    </View>
  );
};

export default DataList;
