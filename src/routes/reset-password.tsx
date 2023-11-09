import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { Wrapper, Title, Form, Input, Error, Switcher } from "../components/auth-components";

export default function ResetPassword() {
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { target: { value } } = e;
        setEmail(value);
    };
    const onSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        if (isLoading || email === "") return;
        try {
            await sendPasswordResetEmail(auth, email);
            alert("We have e-mailed your Password Reset link!");
            navigate("/");
        } catch (error) {
            if (error instanceof FirebaseError) {
                setError(error.message);
            }
        } finally {
            setLoading(false);
        }
    };
    return (
        <Wrapper>
            <Title>Reset Password</Title>
            <Form onSubmit={onSubmit}>
                <Input 
                    onChange={onChange}
                    name="email" 
                    value={email} 
                    placeholder="Email" 
                    type="email"
                    required
                />
                <Input 
                    type="submit" 
                    value={isLoading ? "Loading..." : "Reset Password"}
                />
            </Form>
            {error !== "" ? <Error>{error}</Error> : null}
            <Switcher>
                Already have an account? &nbsp;
                <Link to="/login">
                    Log in &rarr;
                </Link>
            </Switcher>
            <Switcher>
                Don't have an account? &nbsp;
                <Link to="/create-account">
                    Create one &rarr;
                </Link>
            </Switcher>
        </Wrapper>
    );
}
