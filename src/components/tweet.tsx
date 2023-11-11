import styled from "styled-components";
import { ITweet } from "./timeline";
import { auth, db, storage } from "../firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";

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

const DeleteButton = styled.button`
    background-color: #F24C3D;
    color: #FCFCFC;
    border: 0;
    font-size: 14px;
    padding: 5px 10px;
    text-transform: uppercase;
    font-family: 'Patua One', serif;
    border-radius: 5px;
    cursor: pointer;
`;

export default function Tweet({ username, photo, tweet, userId, id }:ITweet) {
    const user = auth.currentUser;
    const onDelete = async() => {
        const ok = confirm("Are you sure you want to delete this tweet?");
        if(!ok || user?.uid !== userId) return;
        try {
            await deleteDoc(doc(db, "tweets", id));
            if (photo) {
                const photoRef = ref(storage, `tweets/${user.uid}/${id}`);
                await deleteObject(photoRef);
            }
        } catch(e) {
            console.log(e);
        } finally {

        }
    };
    return(
        <Wrapper>
            <Column>
                <Username>{username}</Username>
                <Payload>{tweet}</Payload>
                {user?.uid === userId ? <DeleteButton onClick={onDelete}>Delete</DeleteButton> : null}
            </Column>
            <Column>
            { photo ? (
                <Photo src={photo} />
            ): null }
            </Column>
        </Wrapper>
    );
};