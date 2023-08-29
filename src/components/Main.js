import styled from "styled-components";

const Main = () => {
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
  }
`;
export default Main;
