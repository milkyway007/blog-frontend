
import PageContent from "./components/content/PageContent";
import Footer from "./components/footer/Footer";
import TopicsNavbar from "./components/header/topics/Topics";
import UpperNavbar from "./components/header/header/Header";
import { Post } from "./model/post";

const App: React.FC = () => {
  const items = [ '.NET', 'C#', 'CSS', 'Docker', 'HTML', 'Javascript', 'NodeJS', 'ReactJS', 'Typescript' ];
  const header = 'Liidia Laada Blog';

  const posts: Post[] = [
    {
      id: 1,
      title: 'How to Internationalize Numbers with JavaScript',
      message: "Presenting numbers in a readable format takes many forms, from visual charts to simply adding punctuation. Those punctuation, however, are different based on internationalization. Some countries use , for decimal, while others use .. Worried about having to code for all this madness? Don't -- JavaScript provides a method do the hard work for you! The Number primitive has a toLocaleString method to do the basic formatting for you: It's a major relief that JavaScript provides us these type of helpers so that we don't need to rely on bloated third-party libraries. No excuses -- the tool is there!",
      timestamp: new Date('2022-12-19'),
    }
  ]


  return (
     <div className="App">
          <UpperNavbar header={header} />
          <TopicsNavbar items={items} />
          <PageContent posts={posts}></PageContent>
          <Footer />
     </div>
  );
}

export default App;
