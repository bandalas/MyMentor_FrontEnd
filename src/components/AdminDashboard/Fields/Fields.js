import React from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';

const FullNameField = ({ record = {} }) => <span>{record.firstName} {record.lastName}</span>;
FullNameField.defaultProps = { label: 'Nombre' };

const ReviewCommentField = ({ record = {} }) => <span>{record.comment}</span>;
ReviewCommentField.defaultProps = { label: 'Reseña' };

const NameField = ({ record = {} }) => <span>{record.name}</span>;

const StarField = ({ record = {} }) => {
    return (
          <StarRatings
            rating={record.stars}
            starSpacing={0}
            starHoverColor='rgb(135,206,250)'
            starRatedColor='rgb(255,223,0)'
            starDimension="20px"
            numberOfStars={5}/>
          );
};

StarField.propTypes = {
    label: PropTypes.string,
    record: PropTypes.object,
    source: PropTypes.string.isRequired,
};



export { FullNameField, NameField, ReviewCommentField, StarField };