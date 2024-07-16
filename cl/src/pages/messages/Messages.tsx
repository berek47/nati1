import { Divider } from "@mui/material";
import "./messages.scss";
import { LuCircleDashed } from "react-icons/lu";
import SearchAppBar from "../../components/search/Search";
import ChatElement from "../../components/chatElement/ChatElement";
import { ChatList } from "../../data";
import Scrollbar, { SimpleBarStyle } from "../../components/chatElement/ScrollBar";
import Conversation from "../../components/Conversation/Conversation";
import { faker } from '@faker-js/faker';

const Messages = () => {
  return (
    <div className="stack1">
      <div className="messageSidebar">
        <div className="header">
          <h1>Chat</h1>
          <div className="icon">
            <LuCircleDashed />
          </div>
        </div>
        <SearchAppBar />
        <Divider sx={{ backgroundColor: '#bdbdc2', height: 2, mx: 2, my: 0 }} />
        <SimpleBarStyle timeout={500} clickOnTrack={false}>
          <div className="bothcontainer">
            <div className="stack">
              <div className="head">pinned</div>
              {ChatList.filter((el) => el.pinned).map((el) => (
                <ChatElement key={el.id} {...el} />
              ))}
            </div>
            <div className="head">All chat</div>
            <div className="stack2">
              {ChatList.filter((el) => !el.pinned).map((el) => (
                <ChatElement key={el.id} {...el} />
              ))}
            </div>
          </div>
        </SimpleBarStyle>
      </div>
      <div className="box1">
        {/* {ChatList.filter((el) => !el.pinned).map((el) => ( */}
          <Conversation {...ChatList[2]} />   
      </div>
    </div>
  );
};

export default Messages;
