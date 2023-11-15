import styled from "styled-components";
import { auth, db, storage } from "../firebase";
import { useEffect, useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { updateProfile } from "firebase/auth";
import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { ITweet } from "../components/timeline";
import Tweet from "../components/tweet";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
`;

const AvatarUpload = styled.label`
    width: 80px;
    overflow: hidden;
    height: 80px;
    border-radius: 50%;
    background-color: #98D8AA;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
        width: 50px;
    }
`;

const AvatarImg = styled.img`
    width: 100%;
`;

const AvatarInput = styled.input`
    display: none;
`;

const Name = styled.span`
    font-size: 22px;
    font-family: 'BMJUA';
`;

const Tweets = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 10px;
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

const EditButton = styled.div`
    cursor: pointer;
    height: 22px;
    width: 22px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;

const Input = styled.input`
    padding: 5px 10px;
    border-radius: 5px;
    border: none;
    width: 40%;
    font-size: 18px;
    font-family: 'BMJUA';
    outline: none;
    &:focus {
        border: 3px solid #98D8AA;
    }
`;

const SubmitButton = styled.button`
    cursor: pointer;
    height: 28px;
    width: 28px;
    border: none;
    background-color: #98D8AA;
    color: #FCFCFC;
    border-radius: 5px;
    border: none;  
`;

const CancleButton = styled.button`
    cursor: pointer;
    height: 28px;
    width: 28px;
    border: none;
    background-color: #F24C3D;
    color: #FCFCFC;
    border-radius: 5px;
    border: none;
`;

export default function Profile() {
    const user = auth.currentUser;
    const [avatar, setAvatar] = useState(user?.photoURL);
    const [tweets, setTweets] = useState<ITweet[]>([]);
    const [edit, setEdit] = useState(false);
    const [newName, setNewName] = useState("");
    const onNameChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setNewName(e.target.value);
    };
    const onUpdateName = async(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!user) return;
        try {
            await updateProfile(user, {
                displayName: newName,
            });
        } catch (e) {
            console.log(e);
        } finally {
            setEdit(false);
        }
    };
    const onAvatarChange = async(e:React.ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;
        if (!user) return;
        if (files && files.length === 1) {
            const file = files[0];
            const locationRef = ref(storage, `avatars/${user?.uid}`);
            const result = await uploadBytes(locationRef, file);
            const avatarUrl = await getDownloadURL(result.ref);
            setAvatar(avatarUrl);
            await updateProfile(user, {
                photoURL: avatarUrl,
            });
        }
    };
    const fetchTweets = async() => {
        const tweetQuery = query(
            collection(db, "tweets"),
            where("userId", "==", user?.uid),
            orderBy("createdAt", "desc"),
            limit(25)
        );
        const snapshot = await getDocs(tweetQuery);
        const tweets = snapshot.docs.map(doc => {
            const { tweet, createdAt, userId, username, photo } = doc.data();
            return {
                tweet, createdAt, userId, username, photo,
                id: doc.id,
            };
        });
        setTweets(tweets);
    };
    useEffect(() => {
        fetchTweets();
    }, []);
    return (
        <Wrapper>
            <AvatarUpload htmlFor="avatar">
                {avatar ? (<AvatarImg src={avatar} />) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                    </svg>
                )}
            </AvatarUpload>
            <AvatarInput 
                onChange={onAvatarChange}
                id="avatar" 
                type="file" 
                accept="image/*" 
            />
            {!edit ? (
                <Row>
                    <Name>
                        {user?.displayName ?? "Anonymous"}
                    </Name>
                    <EditButton onClick={() => { setEdit(true); setNewName(user?.displayName ?? ""); }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                            <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
                        </svg>
                    </EditButton>
                </Row>
            ) : (
                <Form onSubmit={onUpdateName}>
                    <Input type="text" name="name" placeholder="Name" value={newName} onChange={onNameChange} />
                    <SubmitButton type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                        </svg>
                    </SubmitButton>
                    <CancleButton onClick={() => { setEdit(false); setNewName(""); }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                        </svg>
                    </CancleButton>
                </Form>
            )}
            <Tweets>
                {tweets.map(tweet => <Tweet key={tweet.id} {...tweet} />)}
            </Tweets>
        </Wrapper>
    );
};