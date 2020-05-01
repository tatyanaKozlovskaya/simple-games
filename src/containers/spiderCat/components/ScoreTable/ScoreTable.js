import React from 'react';
import './ScoreTable.sass';
import PropTypes from 'prop-types';

const ScoreTable = ({ score }) => (
  <div className="spider-cat-score-table">{score}</div>
);

export default ScoreTable;

ScoreTable.displayName = 'ScoreTable';

ScoreTable.defaultProps = { score: '0' };

ScoreTable.propTypes = {
  score: PropTypes.string.isRequired,
};
