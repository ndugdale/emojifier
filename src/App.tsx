import Content from "./components/Content";
import Converter from "./components/Converter";
import EmojiBackground from "./components/EmojiBackground";
import GitHubButton from "./components/GitHubButton";

const App = () => {
  return (
    <>
      <GitHubButton
        url="https://github.com/ndugdale/emojifier"
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
