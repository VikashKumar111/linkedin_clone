import { styled } from "styled-components";
import { useState } from "react";

const PostModal = (props) => {
  const [editorText, setEditorText] = useState("");

  const reset = (e) => {
    setEditorText("");
    props.handleClick(e);
  };
  return (
    <>
      {props.showModal === "open" && (
        <Container>
          <Content>
            <Header>
              <h2>Create a post</h2>
              <button onClick={(event) => reset(event)}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Grey_close_x.svg/2048px-Grey_close_x.svg.png"
                  alt=""
                />
              </button>
            </Header>
            <SharedContent>
              <UserInfo>
                <img src="/images/user.svg" alt="" />
                <span>Name</span>
              </UserInfo>
              <Editor>
                <textarea
                  value={editorText}
                  placeholder="What do you want to talk about"
                  onChange={(e) => setEditorText(e.target.value)}
                  autoFocus={true}
                ></textarea>
              </Editor>
            </SharedContent>
            <SharedCreation>
              <AttachedAssets>
                <AssetButton>
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </AssetButton>
                <AssetButton>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGznEqi14luW8bCVeXaEv4c_pGa_tInRAXsA&usqp=CAU"
                    alt=""
                  />
                </AssetButton>
              </AttachedAssets>

              <ShareComment>
                <AssetButton>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcuE8q6TJqWt2oZXrb_oTEILlloT8lDhuLjw&usqp=CAU"
                    alt=""
                  />
                  Anyone
                </AssetButton>
              </ShareComment>
              <PostButton disabled={!editorText ? true : false}>
                Post
              </PostButton>
            </SharedCreation>
          </Content>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  color: black;
  background-color: rgba(0, 0, 0, 0.8);
  animation: fadeIn 0.4s;
`;

const Content = styled.div`
  width: 100%;
  max-width: 552px;
  background-color: white;
  max-height: 90%;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: block;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    height: 40px;
    width: 40px;
    min-width: auto;
    color: rgba(0, 0, 0, 0.15);
    img {
      width: 17px;
      height: 17px;
      pointer-events: none;
    }
  }
`;

const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  vertical-align: baseline;
  background: transparent;
  padding: 8px 12px;
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  svg,
  img {
    width: 48px;
    height: 48px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
  }
  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    margin-left: 5px;
  }
`;

const SharedCreation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 12px 16px;
`;

const AssetButton = styled.button`
  display: flex;
  align-items: center;
  width: 84px;
  height: 40px;
  min-width: auto;
  color: rgba(0, 0, 0, 0.5);

  img {
    width: 20px;
    height: 20px;
  }
`;

const AttachedAssets = styled.div`
  display: flex;
  align-items: center;
  padding-right: 8px;
  ${AssetButton} {
    width: 40px;
  }
`;

const ShareComment = styled.div`
  padding-left: 8px;
  margin-right: auto;
  border-left: 1px solid rgba(0, 0, 0, 0.15);
  ${AssetButton} {
    img {
      margin-right: 5px;
    }
  }
`;

const PostButton = styled.button`
  min-width: 60px;
  border-radius: 20px;
  padding-left: 16px;
  padding-right: 16px;
  background: ${(props) => (props.disabled ? "rgba(0,0,0,0.8)" : "#0a66c2")};
  color: white;
  &:hover {
    background: ${(props) =>
      props.disabled ? "rgba(0,0,0, 0.08)" : "#004182"};
  }
`;
const Editor = styled.div`
  padding: 12px 24px;
  textarea {
    width: 100%;
    min-height: 100px;
    resize: none;
  }
  input {
    width: 100%;
    height: 35px;
    font-size: 16px;
    margin-bottom: 20px;
  }
`;
export default PostModal;
