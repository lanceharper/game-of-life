import React, {
  StyleSheet,
  Component,
  View
} from 'react-native';

import Cell from './Cell';

const BOARD_PADDING = 3;

export default class Board extends Component {
  render() {
    const { matrix } = this.props;
    return (
      <View style={ styles.board }>
        {matrix.map((row, i) =>
          <View key={i} style={ styles.row }>
            {row.map((alive, j) =>
              <Cell
                key={`${i}-${j}`}
                alive={ alive }
              />
            )}
          </View>
        )}
      </View>
    );
  }
}

Board.propTypes = {
  matrix: React.PropTypes.array.isRequired
}

var styles = StyleSheet.create({
  board: {
    padding: BOARD_PADDING,
    backgroundColor: '#bbaaaa',
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
  }
});
