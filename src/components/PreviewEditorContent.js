import React from 'react';
import { connect } from 'react-redux';
import { handleFirstPreviewSlider, handleSecondPreviewSlider } from '../actions';
import { ScrollView, Image, StyleSheet, Text, View } from 'react-native';
// Material UI
import Slider from 'material-ui/Slider';
// Styles
import styles from '../stylePV';

const mapStateToProps = (state) => ({
  screen: state.previewFirstSlider,
  theme: state.previewSecondSlider
});

const mapDispatchToProps = dispatch => ({
  handleFirstPreviewSlider: value => dispatch(handleFirstPreviewSlider(value)),
  handleSecondPreviewSlider: value => dispatch(handleSecondPreviewSlider(value))
});

const Preview = React.createClass({

  getInitialState: function() {
    return {
      firstSlider: 0.3,
      secondSlider: 0.1
    };
  },

  _handleFirstSliderChange: function(event, value) {
    this.setState({ firstSlider: value });
    this.props.handleFirstPreviewSlider(value);
  },

  _handleSecondSliderChange: function(event, value) {
    this.setState({ secondSlider: value });
    this.props.handleSecondPreviewSlider(value);
  },

  render() {
    let props = this.props;
    console.log(props.screen)
    return (
      <View style={styles.previewEditorBox}>
        <View style={styles.previewEditorWrapper}>
          <View style={styles.previewEditorGroupBox}>
            <View style={styles.previewEditorGroupWrapper}>
              <View style={styles.previewEditorGroupRowBox}>
                <View style={styles.previewEditorGroupRowWrapper}>
                  Screen Size : {props.screen}
                </View>
              </View>
              <View style={styles.previewEditorGroupRowBox}>
                <View style={styles.previewEditorGroupRowWrapper}>
                  <Slider min={0} max={1} value={this.state.firstSlider} onChange={this._handleFirstSliderChange} />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.previewEditorGroupBox}>
            <View style={styles.previewEditorGroupWrapper}>
              <View style={styles.previewEditorGroupRowBox}>
                <View style={styles.previewEditorGroupRowWrapper}>
                  Theme : {props.theme}
                </View>
              </View>
              <View style={styles.previewEditorGroupRowBox}>
                <View style={styles.previewEditorGroupRowWrapper}>
                  <Slider min={0} max={1} value={this.state.secondSlider} onChange={this._handleSecondSliderChange} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Preview);
