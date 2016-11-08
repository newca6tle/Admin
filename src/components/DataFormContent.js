import React from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, Image } from 'react-native';
// Material UI
import TextField from 'material-ui/TextField';
import Chip from 'material-ui/Chip';
import Divider from 'material-ui/Divider';
import Toggle from 'material-ui/Toggle';
// Styles
import styles from '../styleJS';

const mapStateToProps = ( state , { params: { itemId } }) => ({
  itemId,
  selectedItem: state.resource.filter(c => c.id.toString() === itemId),

});

const DataFormContent = ({ selectedItem, itemId, children}) => {
  var _scrollView: ScrollView;
  //console.log(selectedItem);
  return (
    <ScrollView ref={(scrollView) => { _scrollView = scrollView; }}
      scrollEventThrottle={200}>
      {children}
      <View style={styles.dataFormGroupBox}>
        <View style={styles.dataFormGroupWrapper}>
          <View style={styles.dataFormGroupRowBox}>
            <View style={styles.dataFormGroupRowWrapper}>
              <View style={styles.dataFormGroupImageBox}>
                <View style = {styles.dataFormGroupImageWrapper}>
                  <ScrollView ref={(scrollView) => { _scrollView = scrollView; }}
                  scrollEventThrottle={200} horizontal={true}>
                    <View style = {styles.dataFormImageBox}>
                      <Image style={styles.formImage} source={selectedItem[0].image}/>
                    </View>
                  </ScrollView>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.dataFormGroupRowBox}>
            <View style={styles.dataFormGroupRowWrapper}>
              <View style={styles.dataFormGroupColBox}>
                <View style={styles.dataFormGroupColWrapper}>
                  <View style={styles.dataFormGroupLabelBox}>
                    <View style={styles.dataFormGroupLabelWrapper}>
                      <View style={styles.label}>
                      Name
                      </View>
                    </View>
                  </View>
                  <View style={styles.dataFormGroupFieldBox}>
                    <View style={styles.dataFormGroupFieldWrapper}>
                      {selectedItem[0].name}
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.dataFormGroupColBox}>
                <View style={styles.dataFormGroupColWrapper}>
                  <View style={styles.dataFormGroupLabelBox}>
                    <View style={styles.dataFormGroupLabelWrapper}>
                      <View style={styles.label}>
                      Description
                      </View>
                    </View>
                  </View>
                  <View style={styles.dataFormGroupFieldBox}>
                    <View style={styles.dataFormGroupFieldWrapper}>
                      {selectedItem[0].description}
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
)};

export default connect(mapStateToProps)(DataFormContent);
