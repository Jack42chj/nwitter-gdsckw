import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const TextArea = styled.textarea`
    border: 2px solid #FCFCFC;
    padding: 20px;
    border-radius: 20px;
    font-size: 16px;
    font-family: 'Patua One', serif;
    color: #FCFCFC;
    background-color: #000000;
    width: 100%;
    resize: none;
    &::placeholder {
        font-size: 16px;
    }
    &:focus {
        outline: none;
        border-color: #FF0000;
    }
`;

const AttatchFileButton = styled.label`
    padding: 10px 0px;
    color: #1d9bf0;
    text-align: center;
    border-radius: 20px;
    border: 1px solid #1d9bf0;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
`;

const AttatchFileInput = styled.input`
    display: none;
`;

const SubmitBtn = styled.input`
    background-color: #1d9bf0;
    color: #FCFCFC;
    border: none;
    padding: 10px 0px;
    border-radius: 20px;
    font-size: 16px;
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
        if (files && files.length === 1) {
            setFile(files[0]);
        }
    };
    return(
        <Form>
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