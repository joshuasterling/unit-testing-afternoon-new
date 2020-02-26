import { shortenText } from "../utils/functions";
import { wordCount, attachUserName } from "../../server/utils";
import { shortText, longText, posts, users } from "./__data__/testData";

test("shortenText should not alter a string with less than 100 characters", () => {
  expect(shortenText(shortText)).toHaveLength(29);
});

test("shortenText shortens text that is over 100 characters and adds 3 periods", () => {
  const shortened = shortenText(longText);

  expect(shortened).not.toHaveLength(longText.length);
  expect(shortened.slice(-3)).toBe("...");
});

test("wordCount correctly sums up the number of words in a post", () => {
  expect(wordCount(posts)).toBe(233);
});

test("attachUserName should attach a displayName to every post", () => {
  const newPosts = attachUserName(users, posts);
  expect(newPosts[0]).toHaveProperty("displayName");
});

test("attachUserName should remove any post with no matching user", () => {
  const newPosts = attachUserName(users, posts);
  const deletedPost = posts[5];
  expect(newPosts).not.toContainEqual(deletedPost);
});
