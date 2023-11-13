import styled from "styled-components";
import { ITweet } from "./timeline";
import { auth, db, storage } from "../firebase";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { StorageError, deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    padding: 20px;
    border: 3px solid #4C4C6D;
    border-radius: 15px;
`;

const Column = styled.div`

`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    vertical-align: center;
    gap: 10px;
    &.EditBtn {
        border-top: 2px solid #D0D0D0;
        padding-top: 10px;
        justify-content: flex-end;
    }
`;

const Username = styled.span`
    font-family: 'BMJUA';
    font-weight: 300;
    font-size: 16px;
    display: flex;
    align-items: flex-end;
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

const EditButton = styled.div`
    cursor: pointer;
    height: 18px;
    width: 18px;
`;

const Form = styled.form`
    margin: 10px 0px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    background-color: #FCFCFC;
    border-radius: 10px;
    padding: 10px;
`;

const TextArea = styled.textarea`
    border: none;
    border-radius: 10px;
    font-size: 18px;
    font-family: 'Patua One', serif;
    color: #494949;
    background-color: #FCFCFC;
    width: 100%;
    resize: none;
    &::placeholder {
        font-size: 18px;
    }
    &:focus {
        outline: none;
    }
`;

const Input = styled.input`
    background-color: #F29727;
    color: #FCFCFC;
    border: none;
    border-radius: 50px;
    font-size: 14px;
    padding: 10px 10px;
    font-family: 'Patua One', serif;
    cursor: pointer;
`;

const CancelButton = styled.button`
    background-color: #494949;
    color: #FCFCFC;
    border: none;
    font-size: 14px;
    padding: 10px 10px;
    text-transform: uppercase;
    font-family: 'Patua One', serif;
    border-radius: 50px;
    cursor: pointer;
`;

const AttatchFileInput = styled.input`
    display: none;
`;

const AttatchNewFileButton = styled.label`
    font-family: 'Patua One', serif;
    font-size: 14px;
    border: 3px solid #F2BE22;
    color: #F2BE22;
    background-color: none;
    padding: 10px 10px;
    text-align: center;
    cursor: pointer;
    border-radius: 50px;
`;

export default function Tweet({ username, photo, tweet, userId, id }:ITweet) {
    const user = auth.currentUser;
    const [Edit, setEdit] = useState(false);
    const [newText, setNewText] = useState("");
    const [newFile, setNewFile] = useState<File|null>(null);
    const onChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        const { target: { value } } = e;
        setNewText(value);
    };
    const onNewFileChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { target: { id, files } } = e;
        if (id === "newFile") {
            const MAX_FILE_SIZE_LIMIT = 1024 * 1024; //1MB
            if (files && files.length === 1) {
                if (files[0].size < MAX_FILE_SIZE_LIMIT)
                    setNewFile(files[0]);
                else
                    alert("Maximum File Size Exceeded!");
            }
        }
    };
    const onDelete = async() => {
        const ok = confirm("Are you sure you want to delete this tweet?");
        if (!ok || user?.uid !== userId) return;
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
    const onUpdate = async(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (user?.uid !== userId || newText === "") return;
        try {
            await updateDoc(doc(db, "tweets", id), { tweet: newText });
            const photoRef = ref(storage, `tweets/${user.uid}/${id}`);
            try {
                await deleteObject(photoRef);
            } catch(e) {
                if(!(e instanceof StorageError && e.code === 'storage/object-not-found'))
                    throw e;
            } 
            if (newFile) {
                const result = await uploadBytes(photoRef, newFile);
                const url = await getDownloadURL(result.ref);
                await updateDoc(doc(db, "tweets", id), { photo: url });
            }
            setEdit(false);
            setNewFile(null);
        } catch(e) {
            console.log(e);
        } finally {

        }
    };
    return(
        <Wrapper>
            <Column>
                <Row>
                    <Username>{username}</Username>
                    {user?.uid === userId ? 
                        <EditButton onClick={() => { setEdit(true); setNewText(tweet); setNewFile(null); }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                                <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
                            </svg>
                        </EditButton>
                    : null}
                </Row>
                { Edit ? (
                    <Form onSubmit={onUpdate}>
                        <Row>
                            <TextArea 
                                rows={5}
                                maxLength={180}
                                placeholder="Edit Text..."
                                value={newText}
                                onChange={onChange}
                            />
                            {photo ? (<Photo src={photo} />) : null}
                        </Row>
                        <Row className="EditBtn">
                            <AttatchNewFileButton htmlFor="newFile">{photo ? "Edit Photo" : "Add Photo"}</AttatchNewFileButton>
                            <AttatchFileInput 
                                onChange={onNewFileChange}
                                type="file" 
                                id="newFile" 
                                accept="image/*" 
                            />
                            <Input 
                                type="submit" 
                                value="Re Tweet"
                            />
                            <CancelButton onClick={() => { setEdit(false); setNewText(""); setNewFile(null); }}>Cancel</CancelButton>
                        </Row>
                    </Form> 
                ) : ( <Payload>{tweet}</Payload> )}
                {user?.uid === userId ? <DeleteButton onClick={onDelete}>Delete</DeleteButton>: null}
            </Column>
            <Column>
            { photo && !Edit ? (
                    <Photo src={photo} />
            ): null }
            </Column>
        </Wrapper>
    );
};