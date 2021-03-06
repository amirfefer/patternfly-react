import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * ListViewInfoItem renders contents of individual Info item
 */
const ListViewInfoItem = ({ children, className, stacked, ...rest }) => {
  const classes = cx(
    { 'list-view-pf-additional-info-item-stacked': stacked },
    'list-view-pf-additional-info-item',
    className,
  );
  return (
    <div className={classes} onClick={e => e.stopPropagation()} {...rest}>
      {children}
    </div>
  );
};
ListViewInfoItem.propTypes = {
  /** Child node - contents of the additional info item */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** Toggle the InfoItem contents stacking */
  stacked: PropTypes.bool.isRequired,
};
ListViewInfoItem.defaultProps = {
  stacked: false,
};
export default ListViewInfoItem;
