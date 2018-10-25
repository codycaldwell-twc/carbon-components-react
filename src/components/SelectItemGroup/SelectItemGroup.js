import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import styles from '../../../.storybook/_container.scss';

const SelectItemGroup = ({
  children,
  className,
  disabled,
  label,
  ...other
}) => {
  const classNames = classnames(styles['bx--select-optgroup'], className);
  return (
    <optgroup
      className={classNames}
      label={label}
      disabled={disabled}
      {...other}>
      {children}
    </optgroup>
  );
};

SelectItemGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
};

SelectItemGroup.defaultProps = {
  disabled: false,
  label: 'Provide label',
};

export default SelectItemGroup;
