import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard initialIsFollowing username="salemali" name="Salem Ali" />
      <TwitterFollowCard initialIsFollowing={false} username="elonmask" name="Elon Musk" />
      <TwitterFollowCard initialIsFollowing username="github" name="Github Copilot" />
    </section>
  );
}
