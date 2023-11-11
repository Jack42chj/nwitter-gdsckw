import styled from "styled-components";
import { ITweet } from "./timeline";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    padding: 20px;
    border: 3px solid #4C4C6D;
    border-radius: 15px;
`;

const Column = styled.div`

`;

const Username = styled.span`
    font-family: 'BMJUA';
    font-weight: 300;
    font-size: 16px;
`;

const Payload = styled.p`
    margin: 10px 0px;
    font-size: 18px;
`;

const Photo = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 15px;
`;

export default function Tweet({ username, photo, tweet }:ITweet) {
    return(
        <Wrapper>
            <Column>
                <Username>{username}</Username>
                <Payload>{tweet}</Payload>
            </Column>
            <Column>
            { photo ? (
                <Photo src={photo} />
            ): null }
            </Column>
        </Wrapper>
    );
};