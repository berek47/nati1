import "./conversation.scss";
import React, { useState } from "react";
import { Chat_History, Message_options } from "../../data";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  Badge,
  Avatar,
  styled,
  IconButton,
  Divider,
  TextField,
  InputAdornment,
  Tooltip,
  Fab,
  Menu,
  MenuItem
} from "@mui/material";
import { Theme } from '@mui/material/styles';
import { BsTelephone } from "react-icons/bs";
import {
  PiVideoCameraLight,
  PiMagnifyingGlassLight,
  PiCaretDown,
  PiLinkSimple,
  PiSmiley,
  PiPaperPlaneTilt,
  PiImageSquareLight,
  PiDownloadSimple,
  PiCameraThin,
  PiFileXThin,
  PiImageThin,
  PiSticker,
  PiUserThin
} from "react-icons/pi";
import { Link } from "react-router-dom";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const StyledBadge = styled(Badge)(({ theme }) => ({
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

// const StyledInput = styled(TextField)(({ theme }) => ({
//   '& .MuiBadge-badge': {
//     paddingTop: "12px",
//     paddingBottom: "12px",
//   }
// }));

interface ConversationProps {
  img: string;
  name: string;
  msg: string;
  time: string;
  unread: number;
  online: boolean;
  id: number;
}

const Actions = [
  {
    color: "#4da5fe",
    icon: <PiImageThin size={24} />,
    y: 102,
    title: "Photo/Video",
  },
  {
    color: "#1b8cfe",
    icon: <PiSticker size={24} />,
    y: 172,
    title: "Stickers",
  },
  {
    color: "#0172e4",
    icon: <PiCameraThin size={24} />,
    y: 242,
    title: "Image",
  },
  {
    color: "#0159b2",
    icon: <PiFileXThin size={24} />,
    y: 312,
    title: "Document",
  },
  {
    color: "#013f7f",
    icon: <PiUserThin size={24} />,
    y: 382,
    title: "Contact",
  },
];

const StyledInput = styled(TextField)`
  .MuiInputBase-root {
    padding: 8px 0; // Top and bottom padding
    padding-left: 8px; // Left padding (if needed)
    padding-right: 8px; // Right padding (if needed)
  }
`;

const Conversation: React.FC<ConversationProps> = ({
  img,
  name,
  msg,
  time,
  unread,
  online,
  id,
}) => {
  const [openPicker, setOpenPicker] = useState(false);
  const [openActions, setOpenActions] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="stack10">
      {/* chat header */}
      <div className="box1">
        <div className="stack11">
          <div className="stack12">
            <div className="box4">
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar alt={name} src={img} />
              </StyledBadge>
            </div>
            <div className="stack13">
              <h3>{name}</h3>
              <h4>{online ? "Online" : "Offline"}</h4>
            </div>
          </div>
        </div>
        <div className="stack14">
          <IconButton>
            <PiVideoCameraLight />
          </IconButton>
          <IconButton>
            <BsTelephone />
          </IconButton>
          <IconButton>
            <PiMagnifyingGlassLight />
          </IconButton>
          <Divider orientation="vertical" />
          <IconButton>
            <PiCaretDown />
          </IconButton>
        </div>
      </div>
      {/* message */}
      <div className="box2">
        <div className="stack16">
          {Chat_History.map((el) => {
            switch (el.type) {
              case "divider":
                // Timeline
                return (
                  <div className="stack17" key={el.id}>
                    <Divider width="600px" />
                    <h1 style={{ fontSize: "16px", color: "#bdbdc2" }}>
                      {el.text}
                    </h1>
                    <Divider width="600px" />
                  </div>
                );
              case "msg":
                switch (el.subtype) {
                  case "img":
                    // img msg
                    return (
                      <div
                        className="stack24"
                        style={{
                          justifyContent: el.incoming ? "start" : "end",
                        }}
                        key={el.id}
                      >
                        <div
                          className="box8"
                          style={{
                            backgroundColor: el.incoming
                              ? "white"
                              : "var(--main-bg)",
                          }}
                        >
                          <div className="stack25">
                            <img
                              src={el.img}
                              alt={el.message}
                              style={{ maxHeight: 210, border: "10px" }}
                            />
                            <h1 style={{ fontSize: "16px", marginTop: "8px" }}>
                              {el.message}
                            </h1>
                          </div>
                        </div>
                        <>
                          <BsThreeDotsVertical
                            id="basic-button"
                            aria-controls="basic-menu"
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClick}
                            size={20}
                            color="blue"
                          />
                          <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                              "aria-labelledby": "basic-button",
                            }}
                          >
                            <div style={{ gap: "8px", padding: "8px" }}>
                              {Message_options.map((el) => (
                                <MenuItem onClick={handleClick}>
                                  {el.title}
                                </MenuItem>
                              ))}
                            </div>
                          </Menu>
                        </>
                      </div>
                    );
                  case "doc":
                    // doc msg
                    return (
                      <div
                        className="stack26"
                        style={{
                          justifyContent: el.incoming ? "start" : "end",
                        }}
                        key={el.id}
                      >
                        <div
                          className="box9"
                          style={{
                            backgroundColor: el.incoming
                              ? "white"
                              : "var(--main-bg)",
                          }}
                        >
                          <div className="stack27">
                            <div className="stack28">
                              <PiImageSquareLight size={48} />
                              <h1 style={{ fontSize: "20px" }}>Abstract.png</h1>
                              <IconButton>
                                <PiDownloadSimple />
                              </IconButton>
                            </div>
                            <h1 style={{ fontSize: "16px", marginTop: "8px" }}>
                              {el.message}
                            </h1>
                          </div>
                        </div>
                        <>
                          <BsThreeDotsVertical
                            id="basic-button"
                            aria-controls="basic-menu"
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClick}
                            size={20}
                            color="blue"
                          />
                          <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                              "aria-labelledby": "basic-button",
                            }}
                          >
                            <div style={{ gap: "8px", padding: "8px" }}>
                              {Message_options.map((el) => (
                                <MenuItem onClick={handleClick}>
                                  {el.title}
                                </MenuItem>
                              ))}
                            </div>
                          </Menu>
                        </>
                      </div>
                    );
                  case "link":
                    // link msg
                    return (
                      <div
                        className="stack19"
                        style={{
                          justifyContent: el.incoming ? "start" : "end",
                        }}
                        key={el.id}
                      >
                        <div
                          className="box6"
                          style={{
                            backgroundColor: el.incoming
                              ? "white"
                              : "var(--main-bg)",
                          }}
                        >
                          <img
                            src={el.preview}
                            alt={el.message}
                            style={{ maxHeight: 210, border: "10px" }}
                          />
                          <div
                            className="stack20"
                            style={{
                              justifyContent: el.incoming ? "start" : "end",
                            }}
                          >
                            <h1
                              style={{
                                color: el.incoming ? "black" : "white",
                                fontSize: "16px",
                                marginTop: "8px",
                                marginBottom: "8px",
                              }}
                            >
                              Creating chat app
                            </h1>
                            <Link
                              to="//https://www.youtube.com"
                              style={{ color: "blue", fontWeight: "bold" }}
                            >
                              www.youtube.com
                            </Link>
                          </div>
                          <h1 style={{ fontSize: "16px", marginTop: "8px" }}>
                            {el.message}
                          </h1>
                        </div>
                        <>
                          <BsThreeDotsVertical
                            id="basic-button"
                            aria-controls="basic-menu"
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClick}
                            size={20}
                            color="blue"
                          />
                          <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                              "aria-labelledby": "basic-button",
                            }}
                          >
                            <div style={{ gap: "8px", padding: "8px" }}>
                              {Message_options.map((el) => (
                                <MenuItem onClick={handleClick}>
                                  {el.title}
                                </MenuItem>
                              ))}
                            </div>
                          </Menu>
                        </>
                      </div>
                    );
                  case "reply":
                    // reply msg
                    return (
                      <div
                        className="stack21"
                        style={{
                          justifyContent: el.incoming ? "start" : "end",
                        }}
                        key={el.id}
                      >
                        <div
                          className="box7"
                          style={{
                            backgroundColor: el.incoming ? "white" : "#6363fa",
                            color: el.incoming ? "black" : "white",
                          }}
                        >
                          <div className="stack22">
                            <div
                              className="stack23"
                            >
                              {el.message}
                            </div>
                          </div>
                        </div>
                        <>
                          <BsThreeDotsVertical
                            id="basic-button"
                            aria-controls="basic-menu"
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClick}
                            size={20}
                            color="blue"
                          />
                          <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                              "aria-labelledby": "basic-button",
                            }}
                          >
                            <div style={{ gap: "8px", padding: "8px" }}>
                              {Message_options.map((el) => (
                                <MenuItem onClick={handleClick}>
                                  {el.title}
                                </MenuItem>
                              ))}
                            </div>
                          </Menu>
                        </>
                      </div>
                    );
                  default:
                    // text msg
                    return (
                      <div
                        className="stack18"
                        style={{
                          justifyContent: el.incoming ? "start" : "end",
                        }}
                        key={el.id}
                      >
                        <div
                          className="box5"
                          style={{
                            backgroundColor: el.incoming ? "white" : "#6363fa",
                            // : "var(--main-bg)",
                          }}
                        >
                          <h1
                            style={{
                              color: el.incoming ? "black" : "white",
                              fontSize: "16px",
                            }}
                          >
                            {el.message}
                          </h1>
                        </div>
                        <>
                          <BsThreeDotsVertical
                            id="basic-button"
                            aria-controls="basic-menu"
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClick}
                            size={20}
                            color="blue"
                          />
                          <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                              "aria-labelledby": "basic-button",
                            }}
                          >
                            <div style={{ gap: "8px", padding: "8px" }}>
                              {Message_options.map((el) => (
                                <MenuItem onClick={handleClick}>
                                  {el.title}
                                </MenuItem>
                              ))}
                            </div>
                          </Menu>
                        </>
                      </div>
                    );
                }
              default:
                return <></>;
            }
          })}
        </div>
      </div>
      {/* chat footer */}

      <div className="box3">
        <div className="stack15">
          <div className="stack28">
            {/* chat input */}
            <div
              className="box10"
              style={{
                display: openPicker ? "inline" : "none",
                zIndex: "10",
                position: "fixed",
                bottom: "81px",
                right: "100px",
              }}
            >
              <Picker data={data} onEmojiSelect={console.log} />
            </div>
              <StyledInput
                fullWidth
                placeholder="Write a message"
                variant="filled"
                InputProps={{
                  disableUnderline: true,
                  startAdornment: (
                    <div  style={{ width: "max-content" }}>
                      <div
                        style={{
                          position: "relative",
                          display: openActions ? "inline-block" : "none",
                        }}
                      >
                        {Actions.map((el, index) => (
                          <Tooltip
                            key={index}
                            placement="right"
                            title={el.title}
                          >
                            <Fab
                              onClick={() => {
                                console.log(`Clicked ${el.title}`);
                                setOpenActions(false);
                              }}
                              sx={{
                                position: "absolute",
                                top: -el.y,
                                backgroundColor: el.color,
                              }}
                              aria-label="add"
                            >
                              {el.icon}
                            </Fab>
                          </Tooltip>
                        ))}
                      </div>
                      <InputAdornment position="start">
                        <IconButton
                          onClick={() => setOpenActions(!openActions)}
                        >
                          <PiLinkSimple />
                        </IconButton>
                      </InputAdornment>
                    </div>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => {
                          setOpenPicker((prev) => !prev);
                        }}
                      >
                        <PiSmiley />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
          </div>
          <div className="box4">
            <div className="stack16">
              <IconButton>
                <PiPaperPlaneTilt color="white" />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversation;