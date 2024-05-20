import './App.css';
import { useState } from "react";
import { Tweet } from "./Tweet";


document.body.style = 'background: #000000;'

const DEFAULT_TWEETS = [
  {
    id: 0,
    name: "Yavish",
    content: "Il fais froid aujourd'hui",
    like: 100,
  },
  {
    id: 1,
    name: "Omar",
    content: "Qui pour m'apprendre React ?",
    like: 10,
  },
  {
    id: 2,
    name: "Franck",
    content: "Je suis nouveau ici !",
    like: 150,
  },
  {
    id: 3,
    name: "Sindou",
    content: "C'est quoi les dramas du jour ?",
    like: 200,
  },
  {
    id: 4,
    name: "Timothy",
    content: "je vais bien",
    like: 1,
  },
]

function App() {
  const [tweets, SetTweets] = useState(DEFAULT_TWEETS);

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const content = event.target.content.value;

    const newTweet = {
      id: tweets[tweets.length - 1]?.id + 1 ?? 0,
      name,
      content,
      like: 0,
    };

    SetTweets([...tweets, newTweet]);

    console.log(newTweet);
  };


  const onDelete = (tweetId) => {
    SetTweets((curr) => curr.filter((tweets) => tweets.id !== tweetId));
  };

  const onLike = (tweetId) => {
    SetTweets(curr => {
      const copyTweet = [...curr];

      const likedTweet = copyTweet.find(tweets => tweets.id === tweetId);
      likedTweet.like += 1;

      return copyTweet;
    })
  }


  return (
    <div>
      <div className="tweet-container">
        {tweets.map(tweets => {
          return (
            <Tweet 
            key={tweets.id} 
            id={tweets.id}
            name={tweets.name} 
            content={tweets.content} 
            like={tweets.like} 
            onDelete={(id) => {
              onDelete(id);
            }}
            onLike={(id) => {
              onLike(id);
            }}/>
          );
        })}
      </div>
      <h4>Nouveau Tweet</h4>
      <form className="tweet-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="pseudo"/>
        <input type="content" name="content" placeholder="Ecrire ici... " className="content"/>
        <input type="submit" placeholder="envoyer" className="submit"/>
      </form>
    </div>
  );
}



export default App;
