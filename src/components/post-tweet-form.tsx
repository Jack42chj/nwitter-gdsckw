import { addDoc, collection, updateDoc } from "firebase/firestore";
import { useState } from "react";
import styled from "styled-components";
import { auth, db, storage } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const TextArea = styled.textarea`
    border: 3px solid #FCFCFC;
    padding: 20px;
    border-radius: 20px;
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
        border-color: #540375;
    }
`;

const AttatchFileButton = styled.label`
    padding: 15px 0px;
    color: #F2BE22;
    text-align: center;
    border-radius: 50px;
    border: 3px solid #F2BE22;
    font-size: 16px;
    cursor: pointer;
`;

const AttatchFileInput = styled.input`
    display: none;
`;

const SubmitBtn = styled.input`
    background-color: #F29727;
    color: #FCFCFC;
    border: none;
    padding: 15px 0px;
    border-radius: 50px;
    font-family: 'Patua One', serif;
    font-size: 18px;
    cursor: pointer;
    &:hover,
    &:active {
        opacity: 0.8;
    }
`;

export default function PostTweetForm() {
    const [isLoading, setLoading] = useState(false);
    const [tweet, setTweet] = useState("");
    const [file, setFile] = useState<File|null>(null);
    const onChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        setTweet(e.target.value);
    };
    const onFileChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;
        const MAX_FILE_SIZE_LIMIT = 1024 * 1024; //1MB
        if (files && files.length === 1) {
            if (files[0].size < MAX_FILE_SIZE_LIMIT)
                setFile(files[0]);
            else
                alert("Maximum File Size Exceeded!");
        }
    };
    const onSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const user = auth.currentUser;
        if(!user || isLoading || tweet === "" || tweet.length > 180) return;
        try {
            setLoading(true);
            const doc = await addDoc(collection(db, "tweets"), {
                tweet,
                createdAt: Date.now(),
                username: user.displayName || "Anonymous",
                userId: user.uid,
            });
            if (file) {
                const locationRef = ref(storage, `tweets/${user.uid}/${doc.id}`);
                const result = await uploadBytes(locationRef, file);
                const url = await getDownloadURL(result.ref);
                await updateDoc(doc, {
                    photo: url,
                });
            }
            setTweet("");
            setFile(null);
        } catch(e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    };
    return(
        <Form onSubmit={onSubmit}>
            <TextArea 
                rows={5}
                maxLength={180}
                onChange={onChange}
                value={tweet}
                placeholder="What is happening?!" 
            />
            <AttatchFileButton htmlFor="file">
                {file ? "Photo added" : "Add photo"}
            </AttatchFileButton>
            <AttatchFileInput 
                onChange={onFileChange}
                type="file" 
                id="file" 
                accept="image/*" 
            />
            <SubmitBtn 
                type="submit" 
                value={isLoading ? "Posting..." : "Post Tweet"} 
            />
        </Form>
    );
};