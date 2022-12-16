
import PageContent from "./components/content/PageContent";
import HeaderNavbar from "./components/navbar/headerNavbar/HeaderNavbar";
import TopicsNavbar from "./components/navbar/topicsNavbar/TopicsNavbar";
import UpperNavbar from "./components/navbar/upperNavbar/UpperNavbar";

const App: React.FC = () => {
  const items = ['.NET', 'C#', 'CSS', 'Docker', 'HTML', 'Javascript', 'NodeJS', 'ReactJS'];
  const header = 'Liidia Laada Blog';

  return (
    <div className="App">
      <UpperNavbar></UpperNavbar>
      <TopicsNavbar items={items}></TopicsNavbar>
      <HeaderNavbar header={header}></HeaderNavbar>
      <PageContent></PageContent>
    </div>
  );
}

export default App;
