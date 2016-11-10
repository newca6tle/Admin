import React from 'react';
import { connect } from 'react-redux';
import { ScrollView, Image, StyleSheet, Text, View } from 'react-native';
// Components
const Card = ({ children }) => <View style={styles.card}>{children}</View>;
const Title = ({ children }) => <Text style={styles.title}>{children}</Text>;
const Photo = ({ uri }) => <Image source={{ uri }} style={styles.image} />;
// Material UI
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import purpleBaseTheme from 'material-ui/styles/baseThemes/purpleBaseTheme';
import redBaseTheme from 'material-ui/styles/baseThemes/redBaseTheme';
import blueBaseTheme from 'material-ui/styles/baseThemes/blueBaseTheme';
import greenBaseTheme from 'material-ui/styles/baseThemes/greenBaseTheme';
import {Tabs, Tab} from 'material-ui/Tabs';
// Styles
import styles from '../stylePV';

const mapStateToProps = (state) => ({
  resource: state.resource,
  featured: state.resource.filter(c => c.featured == true),
  screen: state.previewFirstSlider,
  theme: state.previewSecondSlider
});

const Preview = React.createClass({
  render() {
    let title = (
        <span className="appLabel">
          LollipopLab
        </span>
    );

    let resource = this.props.resource;
    let featured = this.props.featured;
    let screen = this.props.screen;
    let theme = this.props.theme;
    var _scrollView: ScrollView;

    var listImage = featured.map((item) => {
      return (
        <View key={item.id.toString()} style = {styles.previewScreenImageBox}>
          <Image style={styles.previewImage} source={item.image}/>
        </View>
      );
    });

    return (
    <MuiThemeProvider muiTheme={getTheme(theme)}>
      <View style={styles.previewScreenBox}>
        <View style={styles.previewScreenWrapper}>
          <ScrollView ref={(scrollView) => { _scrollView = scrollView; }}
          scrollEventThrottle={100} horizontal={false}>
            <View style={getScreen(screen)}>
              <AppBar title={title}/>
              <View style={styles.previewScreenGroupImageBox}>
                <View style = {styles.previewScreenGroupImageWrapper}>
                  <ScrollView ref={(scrollView) => { _scrollView = scrollView; }}
                  scrollEventThrottle={100} horizontal={true}>
                    {listImage}
                  </ScrollView>
                </View>
              </View>
              <View style={styles.previewScreenGroupRowBox}>
                <View style = {styles.previewScreenGroupRowWrapper}>
                  <Tabs>
                    <Tab label="Latest" />
                    <Tab label="Featured" />
                  </Tabs>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </MuiThemeProvider>
    );
  }
});

function getScreen(screen) {
  if ( screen === 'iPhone5' ) {
    return styles.iPhone5
  } else if (screen === 'iPhone6') {
    return styles.iPhone6
  }
}

function getTheme(theme) {
  if ( theme === 'Red' ) {
    return getMuiTheme(redBaseTheme)
  } else if ( theme === 'Blue' ) {
      return getMuiTheme(blueBaseTheme)
  } else if ( theme === 'Green' ) {
      return getMuiTheme(greenBaseTheme)
  } else { return getMuiTheme(purpleBaseTheme) }
}

export default connect(mapStateToProps)(Preview);
