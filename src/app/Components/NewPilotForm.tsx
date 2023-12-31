import React from "react";
import styled from "styled-components";
import PilotContext from "../Contexts/PilotContext";
import { Pilot } from "../types/Pilot";
import Selectable from "./Reusable/Selectable";
import BackgroundPopup from "./Reusable/BackgroundPopup";
import TextInput from "./Reusable/InputComponents/TextInput";
import Button from "./Reusable/InputComponents/Button";
import { Background } from "../types/Background";
import AbilityScoreSelector from "./AbilityScoreSelector";
import { PilotStats } from "../types/PilotStats";

const backgrounds = require("../../../backgrounds.json");

const NewPilotForm = () => {
  enum NewPilotPages {
    Intro,
    Abilities,
    Status,
    Frame,
  }

  const { pilot } = React.useContext(PilotContext);
  const [newPilot, setNewPilot] = React.useState<Pilot>({} as Pilot);
  const [page, setPage] = React.useState(NewPilotPages.Intro);
  const [selectedBackground, setSelectedBackground] = React.useState<Background | null>();
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

  const selectBackground = (bg: Background) => {
    setNewPilot({ ...newPilot, background: bg });
    setSelectedBackground(null);
    setInProgressPilot({ ...newPilot});
    setPage(page + 1);
  }

  const nextPage = () => {
    setInProgressPilot(newPilot);
    setPage(page + 1);
  };

  const setStats = (stats: PilotStats) => {
    setNewPilot({ ...newPilot, stats });
    setInProgressPilot({ ...newPilot, stats });
    setPage(page + 1);
  }

  const back = () => {
    if (page > 0) {
      setPage(page -1);
    }
  }

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
          <TextInput label="Please enter your name" value={newPilot.name} onChange={(v) => {setNewPilot({...newPilot, name: v})}}/>
          <TextInput label="Please describe yourself" value={newPilot.description} onChange={(v) => {setNewPilot({...newPilot, description: v})}} textarea />
          <Button label="Continue" onClick={() => nextPage()} />
        </form>
      </IntroPageContainer>
    );
  };

  // this is one of the worst things I've ever written
  const StatusPage = () => {
    return ( backgrounds.map((bg: Background) => {
      return <Selectable label={bg.label} onClick={() => setSelectedBackground(bg)} />;
    }))
  };

  const ModalHeader = () => {
    const title = () => {
      if (page === NewPilotPages.Intro) {
        return "Welcome New Pilot";
      }
      if (page === NewPilotPages.Abilities) {
        return "Please select your abilities";
      }
      if (page === NewPilotPages.Status) {
        return "Please select your background";
      }
      if (page === NewPilotPages.Frame) {
        return "Please select your frame";
      }
    };
    return (
      <Header>
        <div onClick={() => back()}>Back</div>
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
        {page === NewPilotPages.Abilities && <AbilityScoreSelector nextPage={(stats: PilotStats) => setStats(stats)} savedStats={newPilot.stats}/>}
      </Container>
      {selectedBackground && <BackgroundPopup close={() => setSelectedBackground(null)} select={() => selectBackground(selectedBackground)} background={selectedBackground} />}
    </>
  );
};

export default NewPilotForm;

const Container = styled.section`
  width: 60%;
  border: 1px solid turquoise;
  justify-content: center;
  margin: 0 auto;
  overflow-y: scroll;
  min-height: 50rem;
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
