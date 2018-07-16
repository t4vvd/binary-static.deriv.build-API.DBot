import PropTypes      from 'prop-types';
import React          from 'react';
import Popover        from '../../Components/Elements/popover.jsx';
import {
    ToggleFullScreen,
    TogglePortfolio,
    ToggleSettings,
    }                 from '../../Components/Layout/Footer/index.jsx';
import ServerTime     from '../../Containers/server_time.jsx';
import { BinaryLink } from '../../routes';
import { connect }    from '../../../Stores/connect';

const Footer = ({
    items,
    is_portfolio_drawer_on,
    is_language_dialog_visible,
    is_settings_dialog_on,
    toggleSettingsDialog,
    togglePortfolioDrawer,
}) => (
    <React.Fragment>
        <ServerTime />
        <div className='footer-links'>
            <TogglePortfolio
                is_portfolio_drawer_on={is_portfolio_drawer_on}
                togglePortfolioDrawer={togglePortfolioDrawer}
            />
            {!!(items && items.length) &&
                items.map((item, idx) => (
                    <Popover
                        key={idx}
                        subtitle={item.text}
                    >
                        <BinaryLink key={idx} to={item.link_to} className={item.icon}>
                            <span title={item.text} />
                        </BinaryLink>
                    </Popover>
                ))}
            <ToggleSettings
                is_settings_visible={is_settings_dialog_on}
                is_language_visible={is_language_dialog_visible}
                toggleSettings={toggleSettingsDialog}
            />
            <ToggleFullScreen />
        </div>
    </React.Fragment>
);


Footer.propTypes = {
    items                     : PropTypes.array,
    is_language_dialog_visible: PropTypes.bool,
    is_portfolio_drawer_on    : PropTypes.bool,
    is_settings_dialog_on     : PropTypes.bool,
    togglePortfolioDrawer     : PropTypes.func,
    toggleSettingsDialog      : PropTypes.func,
};

export default connect(
    ({ ui }) => ({
        is_language_dialog_visible: ui.is_language_dialog_on,
        is_portfolio_drawer_on    : ui.is_portfolio_drawer_on,
        is_settings_dialog_on     : ui.is_settings_dialog_on,
        togglePortfolioDrawer     : ui.togglePortfolioDrawer,
        toggleSettingsDialog      : ui.toggleSettingsDialog,
    })
)(Footer);
