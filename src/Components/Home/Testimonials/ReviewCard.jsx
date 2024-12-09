import PropTypes from 'prop-types';

const ReviewCard = ({ review }) => {
      return (
            <div>
                  {review?.name}
            </div>
      );
};

ReviewCard.propTypes = {
      review: PropTypes.object,
};

export default ReviewCard;