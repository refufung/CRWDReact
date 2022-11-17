// material-ui
import { Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
    <Stack direction="row" justifyContent="space-between">
        <Typography variant="subtitle2" component={Link} href="https://abc.io" target="_blank" underline="hover">
            abc.io
        </Typography>
        <Typography variant="subtitle2" component={Link} href="https://abc.com" target="_blank" underline="hover">
            &copy; abc.com
        </Typography>
    </Stack>
);

export default AuthFooter;
