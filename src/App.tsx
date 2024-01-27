import Content from "./components/Content/Content";
import Converter from "./components/Converter/Converter";
import EmojiBackground from "./components/EmojiBackground/EmojiBackground";
import GitHubButton from "./components/GitHubButton/GitHubButton";

const App = () => {
  return (
    <>
      <GitHubButton
        url="https://github.com/ndugdale/emojifier"
        openInNewTab={true}
        className="fixed right-12 top-12"
      />
      <Content>
        <Converter />
      </Content>
      <EmojiBackground />
    </>
  );
};

export default App;
