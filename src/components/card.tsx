import {
  Container,
  Card as StyledCard,
  Box,
  Content,
} from "../styles/components/card.styles";
import { charter } from "../types/dashboard.types";
import Location from "./location";
import Origin from "./origin";

/**
 * Card
 * @param props of charter
 * @returns jsx
 */

function Card(props: charter) {
  const { id, name, origin, location, image, episode } = props;

  return (
    <Container>
      <StyledCard>
        <Box>
          <Content>
            <img src={image} alt={name} />
            <h2>{id}</h2>
            <h3>{name}</h3>

            <p>{` ${episode.length} ${
              episode.length > 1 ? "episodes" : "episode"
            }  `}</p>
            <Origin {...origin} />
            <Location {...location} />
            {/* <a href="#">Read More</a> */}
          </Content>
        </Box>
      </StyledCard>
    </Container>
  );
}

export default Card;
