import React, { useState } from "react";
import { Authentication } from "../../protocols";
import { useNavigate } from "react-router-dom";
import { Button, Wrapper, Input, Form, Title, LoginTitle } from "./style";

interface Props {
  authentication: Authentication;
  currentAccount: {
    set: (response: any) => void;
  };
}

export default function Login({ authentication, currentAccount }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    // Update the appropriate state
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const login = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the default form submission
    const params = {
      login: email,
      password,
    };

    try {
      const response = await authentication.auth(params);
      currentAccount.set(response);
      navigate("/");
    } catch (error) {
      console.error(error);
    } finally {
      console.log("finally");
    }
  };

  return (
    <div>
      <LoginTitle>Login</LoginTitle>
      <Wrapper>
        <Form onSubmit={login}>
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <Input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={changeValue}
              placeholder="Username"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <br />

            <Input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={changeValue}
              placeholder="Password"
            />
          </div>
          <Button type="submit">Login</Button>
        </Form>
      </Wrapper>
    </div>
  );
}
