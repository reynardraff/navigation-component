import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import IconBell from '../../assets/images/icon-bell.svg'
import styles from './styles.module.scss'

const NotificationButton = ({ className, state, onClick, notificationsPopupOpen }) => (
  <button
    className={cn(styles.notificationButton, styles[state], notificationsPopupOpen && styles.isNotificationsPopupOpen, className)}
    onClick={onClick}
  >
    <IconBell />
  </button>
)

NotificationButton.propTypes = {
  className: PropTypes.string,
  state: PropTypes.oneOf(['none', 'new', 'seen']),
  onClick: PropTypes.func,
  notificationsPopupOpen: PropTypes.bool
}

export default NotificationButton
