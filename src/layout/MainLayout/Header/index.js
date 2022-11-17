import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, ButtonBase, Typography } from '@mui/material';

// assets
import { IconMenu2 } from '@tabler/icons';
import config from "../../../config";
import ProfileSection from "./ProfileSection";

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = ({ handleLeftDrawerToggle }) => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          width: 700,
          display: 'flex',
          alignItems: 'center',
          [theme.breakpoints.down('md')]: {
            width: 'auto'
          }
        }}
      >

        <Typography variant="h2">&nbsp;&nbsp;{`${config.appName} [${config.version}]`}&nbsp;&nbsp;</Typography>
        {/* <Box component="span" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
          <LogoSection />
        </Box> */}
      </Box>

      {/* header search */}
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ flexGrow: 1 }} />
      <ProfileSection />
    </>
  );
};

Header.propTypes = {
  handleLeftDrawerToggle: PropTypes.func
};

export default Header;
