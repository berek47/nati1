import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { PiMagnifyingGlass } from "react-icons/pi";
import { HiFilter } from "react-icons/hi";
import { Rating } from "@mui/material";
import Destination from "../../components/destinations/Destination";
import { topUsers } from "../../data";
import "./home.scss";

interface UserInfo {
  trip: string;
  date: string;
  completion: boolean;
  userName: string;
  userDOB: string;
  carModel: string;
  mileage: string;
  gearbox: string;
  rentAmount: string;
  finesAmount: string;
  depositStatus: string;
  bankImage: string;
  bankName: string;
  bankLastDigits: string;
  distance: string;
  tripTime: string;
  maxSpeed: string;
  fuelConsumption: string;
  passengers: string;
  roadCondition: string;
}

interface UserType {
  id: number;
  identification: string;
  img: string;
  name: string;
  date: string;
  amount: string;
  status: boolean;
  userInfo: UserInfo;
}

const initialUser = topUsers.find((user) => user.id === 1) || topUsers[0] || null;

const Home: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<UserType | null>(initialUser);

  const handleUserClick = (user: UserType) => {
    setSelectedUser(user);
  };

  return (
    <div className="home">
      <div className="section1">
        <div className="box box10">
          <h1 className="trip">Trips</h1>
          <div className="bbb">
            <div className="bbbTop1">
              <PiMagnifyingGlass size="24px" style={{ color: "#6363fa" }} />
            </div>
            <div className="bbbTop2">
              <HiFilter size="24px" style={{ color: "#6363fa" }} />
            </div>
          </div>
        </div>
        <div className="list">
          {topUsers.map((user) => (
            <div
              className="box box1"
              key={user.id}
              onClick={() => handleUserClick(user)}
            >
              <div className="topS">
                <h1>{user.identification}</h1>
                <BsThreeDots size="24px" style={{ color: "#6363fa" }} />
              </div>
              <div className="topS2">
                <div className="userImage_2">
                  <img src={user.img} alt={user.name} />
                </div>
                <h1>{user.name}</h1>
              </div>
              <div className="topS3">
                <div className="date">{user.date}</div>
                <div className="status">
                  <span
                    className={user.status ? "completed" : "active"}
                    style={{
                      backgroundColor: user.status
                        ? "rgb(181, 218, 206)"
                        : "rgb(226, 226, 169)",
                      color: user.status ? "rgb(69, 189, 149)" : "rgb(153, 143, 7)",
                      paddingRight: "15px",
                      paddingLeft: "15px",
                      paddingTop: "8px",
                      paddingBottom: "8px",
                      borderRadius: "6px",
                    }}
                  >
                    {user.status ? "Completed" : "Active"}
                  </span>
                </div>
              </div>
              <hr />
              <div className="topS4">
                <div className="eee">Earned</div>
                <h1>{user.amount}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedUser && (
        <div className="main2">
          <div className="topSection">
            <h1 className="trip">{selectedUser.userInfo.trip}</h1>
            <div className="buttonDate">{selectedUser.userInfo.date}</div>
            <div className="buttonCompletion">
              <span
                className={selectedUser.userInfo.completion ? "completed" : "active"}
                style={{
                  backgroundColor: selectedUser.userInfo.completion
                    ? "rgb(181, 218, 206)"
                    : "rgb(226, 226, 169)",
                  color: selectedUser.userInfo.completion
                    ? "rgb(69, 189, 149)"
                    : "rgb(153, 143, 7)",
                  paddingRight: "15px",
                  paddingLeft: "15px",
                  paddingTop: "8px",
                  paddingBottom: "8px",
                  borderRadius: "6px",
                }}
              >
                {selectedUser.userInfo.completion ? "Completed" : "Active"}
              </span>
            </div>
            <div className="aaa">
              <BsThreeDots size="24px" style={{ color: "#6363fa" }} />
            </div>
          </div>
          <hr />
          <div className="section2">
            <div className="box box4">
              <div className="containingAll">
                <h1>Customer info</h1>
                <div className="userImageDiv">
                  <div className="userImage">
                    <img src={selectedUser.img} alt={selectedUser.name} />
                  </div>
                </div>
                <div className="userName">{selectedUser.userInfo.userName}</div>
                <div className="userNameDate">{selectedUser.userInfo.userDOB}</div>
                <div className="start">Start a chat</div>
              </div>
            </div>
            <div className="box box5">
              <div className="relativeBox5">
                <div className="carsFont3">{selectedUser.userInfo.carModel}</div>
                <Rating name="size-small" defaultValue={2} size="small" />
                <hr />
                <div className="carsFont">
                  <div className="carsFont1">
                    <h1>Mileage</h1>
                    <h1>{selectedUser.userInfo.mileage}</h1>
                  </div>
                  <div className="carsFont2">
                    <h1>Gearbox</h1>
                    <h1>{selectedUser.userInfo.gearbox}</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="box box6">
              <div className="paymentFont5">
                <div className="paymentFont4">Payment info</div>
                <div className="paymentFont">
                  <div className="paymentFont1">
                    <h1>Rent</h1>
                    <h1>{selectedUser.userInfo.rentAmount}</h1>
                  </div>
                  <hr />
                  <div className="paymentFont2">
                    <h1>Fines</h1>
                    <h1>{selectedUser.userInfo.finesAmount}</h1>
                  </div>
                  <hr />
                  <div className="paymentFont3">
                    <h1>Deposit</h1>
                    <h1>{selectedUser.userInfo.depositStatus}</h1>
                  </div>
                </div>
                <div className="paymentFont6">
                  <div className="cardImage">
                    <img className="cardImage1" src="/cardImage.png" alt="Bank Card" />
                  </div>
                  <div className="paymentFont7">
                    <h1>{selectedUser.userInfo.bankName}</h1>
                    <h1>**** {selectedUser.userInfo.bankLastDigits}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="middleSection">
            <div>
              <h4 className="title1">Total distance</h4>
              <h3>{selectedUser.userInfo.distance}</h3>
            </div>
            <div>
              <h4 className="title1">Trip time</h4>
              <h3>{selectedUser.userInfo.tripTime}</h3>
            </div>
            <div>
              <h4 className="title1">Maximum speed</h4>
              <h3>{selectedUser.userInfo.maxSpeed}</h3>
            </div>
            <div>
              <h4 className="title1">Fuel consumption</h4>
              <h3>{selectedUser.userInfo.fuelConsumption}</h3>
            </div>
            <div>
              <h4 className="title1">Passenger number</h4>
              <h3>{selectedUser.userInfo.passengers}</h3>
            </div>
            <div>
              <h4 className="title1">Road condition</h4>
              <h3>{selectedUser.userInfo.roadCondition}</h3>
            </div>
          </div>
          <div className="main3">
            <div className="box box7">Box 7</div>
            <div className="box box8">
              <Destination />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
