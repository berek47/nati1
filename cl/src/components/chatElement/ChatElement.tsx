import "./chatElement.scss";
import { Badge, Avatar, styled } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { faker } from '@faker-js/faker'; // Import faker from the correct library

// Define the styled Badge component for the avatar
const StyledBadge = styled(Badge)(({ theme }: { theme: Theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

// Define the custom styled Badge component for the center alignment and custom background color
const CustomBadge = styled(Badge)(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& .MuiBadge-badge': {
    backgroundColor: '#5e5ee9', // Custom background color
    color: 'white', // Ensure the text is readable
  },
}));

interface ChatElementProps {
  img: string;
  name: string;
  msg: string;
  time: string;
  unread: number;
  online: boolean;
  id: number;
}

const ChatElement: React.FC<ChatElementProps> = ({ img, name, msg, time, unread, online, id }) => {
  return (
    <div className="chatDiv">
      <div className="wrapper">
        <div className="w2">
          {online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
            >
              <Avatar src={img} />
            </StyledBadge>
          ) : (
            <Avatar src={img} />
          )}
          <div className="w3">
            <h3>{name}</h3>
            <h4>{msg}</h4>
          </div>
        </div>
        <div className="w4">
          <h3>{time}</h3>
          <div className="badge">
            <CustomBadge badgeContent={unread}></CustomBadge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatElement;
