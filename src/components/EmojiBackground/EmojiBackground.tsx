import { useEffect, useState } from "react";
import { shuffle } from "../../utils/shuffle";

type Emoji = {
  id: string;
  emoji: string;
  left: string;
  top: string;
  rotate: string;
};

const EmojiBackground = () => {
  const [numColumns, setNumColumns] = useState<number>(0);
  const [numRows, setNumRows] = useState<number>(0);
  const [emojis, setEmojis] = useState<Emoji[]>([]);
  const componentWidth = 75;
  const componentHeight = 75;
  const componentMaxOffset = 5;

  useEffect(() => {
    const calculateGridSize = () => {
      const columns = Math.floor(window.innerWidth / componentWidth + 2);
      const rows = Math.floor(window.innerHeight / componentHeight + 2);

      setNumColumns(columns);
      setNumRows(rows);
    };

    calculateGridSize();
    window.addEventListener("resize", calculateGridSize);

    return () => window.removeEventListener("resize", calculateGridSize);
  }, []);

  useEffect(() => {
    const getRandomEmoji = () => {
      // prettier-ignore
      const emojiCatalogue = [
        "😀", "😂", "😝", "🙂", "😇", "🥰", "😍", "😚", "😘", "🥲", "😋", "🤪", "🤭", "🤫", "😶", "🥺", "😞", "😓",
        "😭", "🙃", "😵","😵‍💫","😴", "😖", "😑",
      ];
      return emojiCatalogue[Math.floor(Math.random() * emojiCatalogue.length)];
    };

    const newEmojis: Emoji[] = [];
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numColumns; j++) {
        const offsetWidth =
          2 * componentMaxOffset * (Math.random() - 1) - componentWidth;
        const offsetHeight =
          2 * componentMaxOffset * (Math.random() - 1) - componentHeight;

        newEmojis.push({
          id: `${i}-${j}`,
          emoji: getRandomEmoji(),
          left: `${j * componentWidth + offsetWidth}px`,
          top: `${i * componentHeight + offsetHeight}px`,
          rotate: `${Math.floor(Math.random() * 360)}deg`,
        });
      }
    }

    shuffle(newEmojis);
    setEmojis(newEmojis);
  }, [numColumns, numRows]);

  return (
    <div data-testid="emoji-background">
      {emojis.map((emoji) => {
        return (
          <div
            key={emoji.id}
            className="pointer-events-none fixed -z-10 text-[6rem]"
            style={{
              left: emoji.left,
              top: emoji.top,
              rotate: emoji.rotate,
            }}
          >
            {emoji.emoji}
          </div>
        );
      })}
    </div>
  );
};

export default EmojiBackground;
