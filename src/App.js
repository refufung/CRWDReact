import * as React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import Routes from 'routes';
import themes from 'themes';
import NavigationScroll from 'layout/NavigationScroll';
import { LicenseInfo } from '@mui/x-license-pro';
LicenseInfo.setLicenseKey('7dec8f8ae84f7f1f1e49bf37a353934bTz00ODk5MyxFPTE2OTE4OTQ4Nzc2NTksUz1wcm8sTE09c3Vic2NyaXB0aW9uLEtWPTI=');

const App = () => {
    const customization = useSelector((state) => state.customization);

    React.useEffect(() => {
      console.log(`xxx(cookie)1:${document.cookie}`);
    }, []);
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes(customization)}>
                <CssBaseline />
                <NavigationScroll>
                    <Routes
                    />
                </NavigationScroll>
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

export default App;
