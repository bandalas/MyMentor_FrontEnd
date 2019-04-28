import React from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';

const StarField = ({ source, record = {} }) => {
    return (
        <div>
          <StarRatings
            rating={record.stars}
            starSpacing={0}
            starHoverColor='rgb(135,206,250)'
            starRatedColor='rgb(255,223,0)'
            starDimension="10px"
            numberOfStars={5}
          />
        </div>);
};

StarField.propTypes = {
    label: PropTypes.string,
    record: PropTypes.object,
    source: PropTypes.string.isRequired,
};

export { StarField };
