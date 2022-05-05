import './share.css'
import {AddPhotoAlternate, SentimentSatisfiedOutlined, ShareSharp, TurnedInSharp} from "@mui/icons-material";

const Share = () => {
    const PF = "/assets/humans/";

    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src={`${PF}/25bce1d90c9778c2502d20359ab36338.jpg`} alt=""/>
                    <input placeholder="What's in your mind, Tomioka?" className="shareInput"/>
                </div>
                <hr className="shareHr"/>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOptions">
                            <AddPhotoAlternate htmlColor="red" className = "shareIcon"/>
                            <span className="shareOptionText">Photo/Video</span>
                        </div>
                        <div className="shareOptions">
                            <TurnedInSharp htmlColor="blue" className = "shareIcon"/>
                            <span className="shareOptionText">Tag your friends!</span>
                        </div>
                        <div className="shareOptions">
                            <SentimentSatisfiedOutlined htmlColor="goldenrod" className = "shareIcon"/>
                            <span className="shareOptionText">Emoji</span>
                        </div>
                        <div className="shareOptions">
                            <ShareSharp htmlColor="green" className = "shareIcon"/>
                            <span className="shareOptionText">Share with your feelings!</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Share;