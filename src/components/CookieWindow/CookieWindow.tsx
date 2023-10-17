import { useCookies } from 'react-cookie';
import TrapFocus from '@mui/material/Unstable_TrapFocus';
import { Box, Button, Fade, Paper, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CookieWindow = () => {
  const { t } = useTranslation();
  const [cookies, setCookies] = useCookies(['cookieConsent']);
  const [bannerOpen, setBannerOpen] = useState(!cookies.cookieConsent);
  const closeBanner = () => setBannerOpen(false);

  const giveCookieConsent = () => {
    setCookies('cookieConsent', true, { path: '/' });
    closeBanner();
  };

  const declineCookieConsent = () => {
    setCookies('cookieConsent', false, { path: '/' });
    closeBanner();
  };

  return (
    <TrapFocus open disableAutoFocus disableEnforceFocus>
      <Fade appear={false} in={bannerOpen}>
        <Paper
          role="dialog"
          aria-modal="false"
          aria-label="Cookie banner"
          square
          variant="outlined"
          tabIndex={-1}
          sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            m: 0,
            p: 5,
            borderWidth: 0,
            borderTopWidth: 1,
            zIndex: 4,
          }}
        >
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
            gap={2}
          >
            <Box
              sx={{
                flexShrink: 1,
                alignSelf: { xs: 'flex-start', sm: 'center' },
              }}
            >
              <Typography fontWeight="bold">
                This website uses cookies for analytics, personalization and
                advertising. By continuing to browse, you agree to our use of
                cookies.
              </Typography>
              <Link to="/" style={{ color: 'blue' }}>
                {t('buttons.learn_more')}
              </Link>
            </Box>
            <Stack
              gap={2}
              direction={{
                xs: 'row-reverse',
                sm: 'row',
              }}
              sx={{
                flexShrink: 0,
                alignSelf: { xs: 'flex-end', sm: 'center' },
              }}
            >
              <Button
                size="small"
                onClick={giveCookieConsent}
                variant="contained"
              >
                {t('buttons.accept_all')}
              </Button>
              <Button size="small" onClick={declineCookieConsent}>
                {t('buttons.decline_all')}
              </Button>
            </Stack>
          </Stack>
        </Paper>
      </Fade>
    </TrapFocus>
  );
};

export default CookieWindow;
