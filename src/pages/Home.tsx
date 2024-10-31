import Button from "../components/Button";
import "../App.css";

const buttonList = [
  {id:1, label: 'Dining', link: '/dining'},
  {id:2, label: 'Go to Shopping', link: '/shopping'},
  {id:3, label: 'Go to gym', link: '/workout'},
  {id:4, label: 'Summary', link: '/summary'},
];

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="leftSide">
          <h1>HOME</h1>
          <h3>Topics Covered</h3>

          <div className="note">
            <p>
              <strong>Tip:</strong> Use links to go to a different page inside
              your presentation. Links work best for pages like this one!
            </p>{" "}
            <br />
            <p>
              <strong>How:</strong> Highlight text, click on the link symbol on
              the toolbar, and select the page in your presentation that you
              want to connect.
            </p>{" "}
            <br />
            <p>
              {" "}
              <strong>
                Kindly delete this note after editing this page. Thank you!
              </strong>{" "}
            </p>
          </div>
        </div>

        <div className="rightSide">

          <Button btnlist={buttonList}/>
        </div>
      </div>
    </>
  );
};

export default Home;

