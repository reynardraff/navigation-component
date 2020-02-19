import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './styles.module.scss'
import IconBell from '../../assets/images/icon-bell.svg'
import BellBig from './../../assets/images/bell-big.svg'

const EmptyNotifications = ({ onClose, emptyTitle, emptyText }) => (
  <>
    <div className={styles['noti-header']}>
      <div className={styles['noti-title']}>
        <IconBell />
        <span className={styles['noti-title-text']}>Notifications</span>
      </div>
    </div>
    <div className={cn(styles['noti-body'], styles.center)}>
      <BellBig className={cn(styles.icons, styles['icon-bell'])} />
      <h4 className={styles.titles}>{emptyTitle}</h4>
      <div className={cn(styles.txt, styles['center-txt'])}>{emptyText}</div>
    </div>
    <div className={styles['noti-footer']}>
      <span className={cn(styles.btn, styles['btn-green-outlined'], styles['text-uppercase'])} role='button'>
        Notification Settings
      </span>
    </div>
  </>
)

EmptyNotifications.defaultProps = {
  emptyTitle: 'Good job! You’re all caught up',
  emptyText: (
    <div>
      Join challenges and check your notification settings if
      you don’t receive notifications. We’re actively adding
      new notifications. Read our <a href='/' className={styles.blueLink}>blog post</a> for more info
    </div>
  )
}

EmptyNotifications.propTypes = {
  onClose: PropTypes.func,
  emptyTitle: PropTypes.node,
  emptyText: PropTypes.node
}

export default EmptyNotifications
