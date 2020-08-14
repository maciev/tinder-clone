import React from "react";
import "./Chats.css";
import Chat from "./Chat";
import "./Chat.css";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Sarah"
        message="Hey how are you?"
        timestamp="40 seconds ago"
        profilePic="https://m.media-amazon.com/images/M/MV5BMWUyMmEzMzctNWUzZi00NWI5LThmZWMtNWNkYjllNTU3ODQ1XkEyXkFqcGdeQXVyMjMyODkxODA@._V1_.jpg"
      />
      <Chat
        name="Ellen"
        message="Yo whats up!"
        timestamp="55 minutes ago"
        profilePic="https://pyxis.nymag.com/v1/imgs/3d2/5ab/68fa5cfc1e3b212f84b9f0a364b6bc538c-ellen-1.rsquare.w700.jpg"
      />
      <Chat
        name="Sandra"
        message="Ola!"
        timestamp="3 days ago"
        profilePic="https://m.media-amazon.com/images/M/MV5BMTI5NDY5NjU3NF5BMl5BanBnXkFtZTcwMzQ0MTMyMw@@._V1_UY1200_CR94,0,630,1200_AL_.jpg"
      />
      <Chat
        name="Natasha"
        message="Ops there he is.."
        timestamp="1 Week ago"
        profilePic="https://wikibio.in/wp-content/uploads/2018/05/Natasha-Dalal-1.jpg"
      />
    </div>
  );
}

export default Chats;
