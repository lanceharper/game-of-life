import React, {
  StyleSheet,
  Component,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import Board from './Board';

export const Game = ({ one, reset,start, stop, state }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <View>
      <Text>
        Generations: { state.generations }
      </Text>
    </View>
    <Board matrix={ state.matrix }/>
    <TouchableOpacity onPress={ one } style={ styles.button }>
      <Text>one</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={ reset } style={ styles.button }>
      <Text>reset</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={ start } style={ styles.button }>
      <Text>start</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={ stop } style={ styles.button }>
      <Text>stop</Text>
    </TouchableOpacity>
  </View>
);

Game.propTypes = {
  one: React.PropTypes.func.isRequired,
  reset: React.PropTypes.func.isRequired,
  start: React.PropTypes.func.isRequired,
  stop: React.PropTypes.func.isRequired,
  state: React.PropTypes.object.isRequired
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
