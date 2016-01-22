import React, {
  Animated,
  StyleSheet,
  Component,
  View
} from 'react-native';

const CELL_MARGIN = 1;
const CELL_SIZE = 8;

export default class Cell extends Component {

  componentWillMount() {
    this._aliveColor = new Animated.Value(this.props.alive ? 1 : 0);
  }

  componentWillReceiveProps(nextProps) {
    Animated.timing(this._aliveColor, {
      toValue: nextProps.alive ? 1 : 0,
      duration: 500,
      extrapolate: 'clamp',
    }).start();
  }

  shouldComponentUpdate(nextProps) {
    return this.props.alive !== nextProps.alive;
  }

  render() {
    // TODO: swap background color with interpolated values once colors are more consistent. Hack with opacity for now.
    // const backgroundColor = this._aliveColor.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: ['rgba(255,255,255,1)', 'rgba(0, 128, 0, 1)']
    // });

    const opacity = this._aliveColor.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    });

    const backgroundColor = 'rgba(0, 128, 0, 1)';

    return (
      <View style={[styles.cell, { backgroundColor: 'white' }]}>
        <Animated.View style={[styles.cell, { backgroundColor, opacity }]} />
      </View>
    );
  }
}

Cell.propTypes = {
  alive: React.PropTypes.bool.isRequired
}

var styles = StyleSheet.create({
  cell: {
    width: CELL_SIZE,
    height: CELL_SIZE,
    borderRadius: 3,
    margin: CELL_MARGIN,
  }
});
