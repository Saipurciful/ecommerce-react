import React from 'react'

const Rating = (props) => {
    const { rating, numReviews, color } = props;
    return (
        <div className="rating">
            <span><i style={{ color }}
                className={
                    rating >= 1
                        ? "fa fa-star"
                        : rating >= 0.5
                            ? 'fa fa-star-half-o'
                            : 'fa fa-start-o'}></i>
            </span >
            <span><i style={{ color }}
                className={
                    rating >= 2
                        ? "fa fa-star"
                        : rating >= 1.5
                            ? 'fa fa-star-half-o'
                            : 'fa fa-start-o'}></i></span>
            <span><i style={{ color }}
                className={
                    rating >= 3
                        ? "fa fa-star"
                        : rating >= 2.5
                            ? 'fa fa-star-half-o'
                            : 'fa fa-start-o'}></i></span>
            <span><i style={{ color }}
                className={
                    rating >= 4
                        ? "fa fa-star"
                        : rating >= 3.5
                            ? 'fa fa-star-half-o'
                            : 'fa fa-start-o'}></i></span>
            <span><i style={{ color }}
                className={
                    rating >= 5
                        ? "fa fa-star"
                        : rating >= 4.5
                            ? 'fa fa-star-half-o'
                            : 'fa fa-start-o'}></i></span>
            <span>{numReviews + 'reviews'}</span>

        </div >
    )
}
Rating.defaultProps = {
    color: '#f8e825',
}

export default Rating
