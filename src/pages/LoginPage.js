import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Input, Button, Center, FormControl } from "@chakra-ui/react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  //Input handlers
  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };
  //UseEffect
  useEffect(() => {
    const token = localStorage.getItem("token");
    //acho que vou tirar esse if, será que funciona? só dar uma mensagem de login exitoso, e as vezes criar um botao de logout que elimine o token do local storage!
    if (token) {
      history.push("/trips");
    }
  }, [history]);

  return (
    <Center m="10px">
      <FormControl as="form" w="40%" isRequired errorBorderColor="red">
        <Input
          id="email"
          placeholder="E-mail"
          value={email}
          onChange={onChangeEmail}
          type="email"
        />
        <Input
          id="password"
          placeholder="Password"
          value={password}
          onChange={onChangePassword}
          type="password"
        />
        <Button>Log In</Button>
      </FormControl>
    </Center>
  );
}

export default LoginPage;
