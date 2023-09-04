import styled from "styled-components";
import PostModal from "./PostModal";
import { useState } from "react";

const Main = (props) => {
  const [showModal, setShowModal] = useState("patch");

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }
    switch (showModal) {
      case "open":
        setShowModal("close");
        break;
      case "close":
        setShowModal("open");
        break;
      default:
        setShowModal("close");
        break;
    }
  };
  return (
    <Container>
      <ShareBox>
        Share
        <div>
          <img src="/images/user.svg" alt="" />
          <button>Start a post</button>
        </div>
        <div>
          <button>
            <img src="/images/user.svg" alt="user" />
            <span>Photo</span>
          </button>
          <button>
            <img src="/images/user.svg" alt="user" />
            <span>Video</span>
          </button>
          <button>
            <img src="/images/user.svg" alt="user" />
            <span>Event</span>
          </button>
          <button>
            <img src="/images/user.svg" alt="user" />
            <span>Article</span>
          </button>
        </div>
      </ShareBox>
      <div>
        <Article>
          <SharedActor>
            <a>
              <img src="/images/user.svg" alt="" />
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Date</span>
              </div>
            </a>
            <button>
              <img src="/images/ellipsis.svg" alt="" />
            </button>
          </SharedActor>
          <Description>Description</Description>
          <SharedImg>
            <a>
              <img src="/images/shared-image.png" alt="" />
            </a>
          </SharedImg>
          <SocialCounts>
            <li>
              <button>
                <img
                  src="https://static.licdn.com/sc/h/f4ly07ldn7194ciimghrumv3l"
                  alt=""
                />
                <img
                  src="https://static.licdn.com/sc/h/3c4dl0u9dy2zjlon6tf5jxlqo"
                  alt=""
                />
                <span>75</span>
              </button>
            </li>
            <li>
              <a> 2 comments</a>
            </li>
          </SocialCounts>
          <SocialActions>
            <button>
              <img src="/images/like.svg" alt="" />
              <span>Like</span>
            </button>
            <button>
              <img src="/images/comment.png" alt="" />
              <span>Comments</span>
            </button>
            <button>
              <img src="/images/repost.png" alt="" />
              <span>Repost</span>
            </button>
            <button>
              <img src="/images/send.png" alt="" />
              <span>Send</span>
            </button>
          </SocialActions>
        </Article>
      </div>
      <PostModal />
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
  width: 670px;
  margin-right: -67px;
  @media (max-width: 768px) {
    width: 457px;
  }
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
  div {
    button {
      object-fit: contain;
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 35px;
        background-color: white;
        text-align: left;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      margin-right: 23px;
      padding-bottom: 4px;
      button {
        img {
          margin: 0 4px 0 -2px;
        }
        span {
          color: #70b5f9;
        }
      }
    }
  }
`;

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;

const SharedActor = styled.div`
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;
    img {
      width: 48px;
      height: 48px;
    }
    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
      span {
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }
        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
    img {
      width: 30px;
    }
  }
`;

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
`;
const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;
const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: #e9e5df;
  list-style: none;
  li {
    margin-right: 5px;
    font-size: 14px;
    button {
      display: flex;
      text-align: center;
      align-items: center;
      img {
        height: 23px;
        width: 30px;
      }
    }
  }
`;
const SocialActions = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;
  button {
    display: inline-flex;
    align-items: center;
    padding: 7px;
    color: #0a66c2;
    span {
      margin-left: 2px;
    }
    @media (min-width: 768px) {
      span {
        margin-left: 8px;
      }
    }
    img {
      width: 20px;
      height: 20px;
    }
  }
`;
export default Main;
