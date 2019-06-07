import PropTypes from 'prop-types';

const SidebarLink = PropTypes.shape({
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
});

export const SidebarPropTypes = {
  linksList: PropTypes.arrayOf(
    SidebarLink
  )
}