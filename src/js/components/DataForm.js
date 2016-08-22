import React from 'react';
import {View, ScrollView, Image} from 'react-native';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import Toggle from 'material-ui/Toggle';
import Chip from 'material-ui/Chip';
import Slider from 'material-ui/Slider';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';

import styles from '../Styles';

// Everything down here is DataFormToolbar
let DataFormToolbar = () => {
  return (
    <View style={styles.DataFormToolbarBox}>
      <View style={styles.DataFormToolbarWrapper}>
        <Toolbar>
          <ToolbarGroup/>
          <ToolbarGroup>
            <IconButton iconClassName="material-icons">visibility</IconButton>
            <IconButton iconClassName="material-icons">save</IconButton>
            <IconButton iconClassName="material-icons">delete</IconButton>
          </ToolbarGroup>
        </Toolbar>
      </View>
    </View>
  )
}

// Everything below here is for the ApplicationContentFormList
let DataForm = () => {
  var _scrollView: ScrollView;
  return (
    <View style={styles.dataFormBox}>
      <View style={styles.dataFormWrapper}>
        <DataFormToolbar/>
        <ScrollView ref={(scrollView) => { _scrollView = scrollView; }}
          scrollEventThrottle={200}>
          <View style={styles.dataFormGroupBox}>
            <View style={styles.dataFormGroupWrapper}>
              <View style={styles.dataFormGroupRowBox}>
                <View style={styles.dataFormGroupRowWrapper}>
                  <View style={styles.formImage}>
                    <Image source={'../images/furniture.jpg'}/>
                  </View>
                </View>
              </View>
              <View style={styles.dataFormGroupRowBox}>
                <View style={styles.dataFormGroupRowWrapper}>
                  <View style={styles.dataFormGroupColBox}>
                    <View style={styles.dataFormGroupColWrapper}>
                      <View style={styles.dataFormGroupLabelBox}>
                        <View style={styles.dataFormGroupLabelWrapper}>
                          Name
                        </View>
                      </View>
                      <View style={styles.dataFormGroupFieldBox}>
                        <View style={styles.dataFormGroupFieldWrapper}>
                          <TextField id="test01" fullWidth={true}/>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.dataFormGroupColBox}>
                    <View style={styles.dataFormGroupColWrapper}>
                      <View style={styles.dataFormGroupLabelBox}>
                        <View style={styles.dataFormGroupLabelWrapper}>
                          Date
                        </View>
                      </View>
                      <View style={styles.dataFormGroupFieldBox}>
                        <View style={styles.dataFormGroupFieldWrapper}>
                          <DatePicker fullWidth={true} hintText="Click to select date"/>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.dataFormGroupRowBox}>
                <View style={styles.dataFormGroupRowWrapper}>
                  <View style={styles.dataFormGroupLabelBox}>
                    <View style={styles.dataFormGroupLabelWrapper}>
                      Description
                    </View>
                  </View>
                  <View style={styles.dataFormGroupFieldBox}>
                    <View style={styles.dataFormGroupFieldWrapper}>
                      <TextField id="test01" fullWidth={true}/>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.dataFormGroupRowBox}>
                <View style={styles.dataFormGroupRowWrapper}>
                  <Chip>Gadget</Chip>
                </View>
              </View>
            </View>
          </View>
          <Divider />
          <View style={styles.dataFormGroupBox}>
            <View style={styles.dataFormGroupWrapper}>
              <View style={styles.dataFormGroupRowBox}>
                <View style={styles.dataFormGroupRowWrapper}>
                  <View style={styles.dataFormGroupColBox}>
                    <View style={styles.dataFormGroupColWrapper}>
                      <View style={styles.dataFormGroupFieldBox}>
                        <View style={styles.dataFormGroupFieldWrapper}>
                          <Slider defaultValue={0.5} description="Rating"/>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.dataFormGroupColBox}>
                    <View style={styles.dataFormGroupColWrapper}>
                      <View style={styles.dataFormGroupLabelBox}>
                        <View style={styles.dataFormGroupLabelWrapper}>
                          Hidden
                        </View>
                      </View>
                      <View style={styles.dataFormGroupFieldBox}>
                        <View style={styles.dataFormGroupFieldWrapper}>
                          <Toggle/>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default DataForm;
