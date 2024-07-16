import PropTypes from 'prop-types';
import SimpleBarReact from 'simplebar-react';
import { ReactNode } from 'react';
import { alpha, styled } from '@mui/material/styles';
import { Box, SxProps, Theme } from '@mui/material';

const RootStyle = styled('div')(() => ({
  flexGrow: 1,
  height: '100%',
  overflow: 'hidden', // Ensure SimpleBarReact handles the scrolling
}));

const SimpleBarStyle = styled(SimpleBarReact)(({ theme }) => ({
  maxHeight: '100%', // Ensure SimpleBarReact takes the full height
  '& .simplebar-scrollbar': {
    '&:before': {
      backgroundColor: alpha(theme.palette.grey[600], 0.48),
    },
    '&.simplebar-visible:before': {
      opacity: 1,
    },
  },
  '& .simplebar-track.simplebar-vertical': {
    width: 10,
  },
  '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
    height: 6,
  },
  '& .simplebar-mask': {
    zIndex: 'inherit',
  },
  '& .simplebar-placeholder': {
    height: '0 !important',
  },
}));

interface ScrollbarProps {
  children: ReactNode;
  sx?: SxProps<Theme>;
  timeout?: number;
  clickOnTrack?: boolean;
  [key: string]: any;
}

const Scrollbar = ({ children, sx, timeout = 500, clickOnTrack = false, ...other }: ScrollbarProps) => {
  const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  console.log("Timeout:", timeout);
  console.log("ClickOnTrack:", clickOnTrack);

  if (isMobile) {
    return (
      <Box sx={{ overflowX: 'auto', ...sx }} {...other}>
        {children}
      </Box>
    );
  }

  return (
    <RootStyle>
      <SimpleBarStyle timeout={timeout} clickOnTrack={clickOnTrack} sx={sx} {...other}>
        {children}
      </SimpleBarStyle>
    </RootStyle>
  );
};

Scrollbar.propTypes = {
  children: PropTypes.node.isRequired,
  sx: PropTypes.object,
  timeout: PropTypes.number,
  clickOnTrack: PropTypes.bool,
};

export default Scrollbar;
export { SimpleBarStyle };
