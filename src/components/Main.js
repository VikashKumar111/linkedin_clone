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
            <img src="/images/Photo-icon.svg" alt="" />
            <span>Photo</span>
          </button>
          <button>
            <img src="/images/Video.svg" alt="" />
            <span>Video</span>
          </button>
          <button>
            <img src="/images/Event.svg" alt="" />
            <span>Event</span>
          </button>
          <button>
            <img src="/images/Article.svg" alt="" />
            <span>Write article</span>
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
`;
export default Main;
