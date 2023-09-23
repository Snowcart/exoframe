import React from "react";
import styled from "styled-components";
import PilotContext from "../Contexts/PilotContext";
import { Pilot } from "../types/Pilot";
import Selectable from "./Reusable/Selectable";
import BackgroundPopup from "./Reusable/BackgroundPopup";

const backgrounds = require("../../../backgrounds.json");

const NewPilotForm = () => {
  enum NewPilotPages {
    Intro,
    Status,
    Abilities,
    Frame,
  }

  const { pilot } = React.useContext(PilotContext);
  const [newPilot, setNewPilot] = React.useState<Pilot>({} as Pilot);
  const [page, setPage] = React.useState(NewPilotPages.Intro);
  React.useEffect(() => {
    getInProgressPilot();
  }, []);

  const setInProgressPilot = (pilot: Pilot) => {
    localStorage.setItem("InProgressPilot", JSON.stringify(pilot));
    localStorage.setItem("InProgressPilotPage", JSON.stringify(page + 1));
  };

  const getInProgressPilot = () => {
    const x = localStorage.getItem("InProgressPilot");
    if (x) {
      setNewPilot(JSON.parse(x));
      setPage(
        JSON.parse(localStorage.getItem("InProgressPilotPage") as string) ??
          NewPilotPages.Intro
      );
    }
  };

  const nextPage = () => {
    setInProgressPilot(newPilot);
    setPage(page + 1);
  };

  const IntroPage = () => {
    return (
      <IntroPageContainer>
        <p>
          Welcome to the world of EXOFRAME. We will be asking some information
          about you, and prepare you for your adventure across the universe.
        </p>
        <p>
          You will now be asked questions about your backstory and EXOFRAME to
          prepare you for the game ahead.
        </p>
        <br />
        <br />
        <div>Please enter some information Pilot</div>
        <form
          onSubmit={() => {
            nextPage();
          }}
        >
          <label>What is your name?</label>
          <input
            value={newPilot.name}
            onChange={(e) => setNewPilot({ ...newPilot, name: e.target.value })}
          />
          <br />
          <label>Please describe yourself</label>
          <textarea
            onChange={(e) =>
              setNewPilot({ ...newPilot, description: e.target.value })
            }
            value={newPilot.description}
          />
          <br />
          <button type="submit">Continue</button>
        </form>
      </IntroPageContainer>
    );
  };

  const StatusPage = () => {
    return (
      <Selectable label={backgrounds["humanDebris"].label} onClick={() => {}} />
    );
  };

  const ModalHeader = () => {
    const title = () => {
      if (page === NewPilotPages.Intro) {
        return "Welcome New Pilot";
      }
      if (page === NewPilotPages.Status) {
        return "Please select your background";
      }
      if (page === NewPilotPages.Abilities) {
        return "Please select your abilities";
      }
      if (page === NewPilotPages.Frame) {
        return "Please select your frame";
      }
    };
    return (
      <Header>
        <div>Back</div>
        <HeaderTitle>{title()}</HeaderTitle>
      </Header>
    );
  };

  return (
    <>
      <Container>
        <ModalHeader />
        {page === NewPilotPages.Intro && IntroPage()}
        {page === NewPilotPages.Status && StatusPage()}
      </Container>
      <BackgroundPopup />
    </>
  );
};

export default NewPilotForm;

const Container = styled.section`
  width: 60%;
  border: 1px solid turquoise;
  justify-content: center;
  margin: 0 auto;
  height: 50rem;
`;

const Header = styled.div`
  height: 2rem;
  font-size: 1rem;
  border-bottom: 1px solid orange;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const HeaderTitle = styled.div`
  align-self: center;
  justify-content: center;
  font-size: 1.2rem;
`;

const IntroPageContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  align-items: center;
`;
