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
// Used for search
import fuzzysearch from 'fuzzysearch';

const template = {
  "groups": [
    {
      "groupId": 1,
      "label": "Overview",
      "rows":
      [
        {
          "rowId": 1,
          "columns":
          [
            {
              "columnId": 1,
              "field": "image"
            }
          ]
        },
        {
          "rowId": 2,
          "columns":
          [
            {
              "columnId": 1,
              "field": "name"
            },
            {
              "columnId": 2,
              "field": "description"
            }
          ]
        },
        {
          "rowId": 3,
          "columns":
          [
            {
              "columnId": 1,
              "field": "featured"
            }
          ]
        }
      ]
    }
  ],
  "fields": [
    {
      "name": "image",
      "label": "Photos",
      "type": {
        "control": "imagesLib"
    },
      "required": false,
      "readOnly": false,
      "systemOnly": false,
      "remarks": ""
    },
    {
      "name": "name",
      "label": "Name",
      "type": {
        "control": "Text",
        "multiLine": false,
        "minLength": 0,
        "maxLength": 50
      },
      "required": false,
      "readOnly": false,
      "systemOnly": false,
      "remark": ""
    },
    {
      "name": "description",
      "label": "Description",
      "type": {
        "control": "Text",
        "multiLine": false,
        "minLength": 0,
        "maxLength": 50
      },
      "required": false,
      "readOnly": false,
      "systemOnly": false,
      "remark": ""
    },
    {
      "name": "featured",
      "label": "Featured",
      "type": {
        "control": "Text",
        "multiLine": false,
        "minLength": 0,
        "maxLength": 50
      },
      "required": false,
      "readOnly": false,
      "systemOnly": false,
      "remark": ""
    },
  ]
};

const matches = (filter, item) =>
  fuzzysearch(filter, item.name.toString());

// Important Note: We need to simplify this merge function
function merge(selectedItem,fieldName) {
  if (fieldName === "name") {
    return selectedItem[0].name;
  } else if (fieldName === "description") {
    return selectedItem[0].description;
  } else if (fieldName === "featured") {
    return selectedItem[0].featured.toString();
  }
};

const mapStateToProps = ( state , { params: { itemId } }) => ({
  itemId,
  selectedItem: state.resource.filter(c => c.id.toString() === itemId),
});

const DataFormContent = ({ selectedItem, itemId, children}) => {
  var _scrollView: ScrollView;

  var generateColumn = props => {
    var field = template.fields.filter(c => matches(props.field.toString(), c));
    var fieldName = field[0].name;

    if (field[0].name === "image") {
      return (
        <View key={props.columnId.toString()} style={styles.dataFormGroupColBox}>
          <View style={styles.dataFormGroupColWrapper}>
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
      )
    } else {
      return (
        <View key={props.columnId.toString()} style={styles.dataFormGroupColBox}>
          <View style={styles.dataFormGroupColWrapper}>
            <View style={styles.dataFormGroupLabelBox}>
              <View style={styles.dataFormGroupLabelWrapper}>
                <View style={styles.label}>
                  {field[0].label}
                </View>
              </View>
            </View>
            <View style={styles.dataFormGroupFieldBox}>
              <View style={styles.dataFormGroupFieldWrapper}>
                {merge(selectedItem,fieldName)}
              </View>
            </View>
          </View>
        </View>
      )
    }
  };

  var generateRow = props => {
    return (
      <View key={props.rowId.toString()} style={styles.dataFormGroupRowBox}>
        <View style={styles.dataFormGroupRowWrapper}>
          {props.columns.map(col => generateColumn(col))}
        </View>
      </View>
    )
  };

  var generateGroup = template.groups.map((groups) => {
    return (
      <View key={groups.groupId.toString()} style={styles.dataFormGroupBox}>
        <View style={styles.dataFormGroupWrapper}>
          {groups.rows.map(rows => generateRow(rows))}
        </View>
      </View>
    );
  });

  return (
    <ScrollView ref={(scrollView) => { _scrollView = scrollView; }}
      scrollEventThrottle={200}>
      {children}
      {generateGroup}
    </ScrollView>
)};

export default connect(mapStateToProps)(DataFormContent);
