import { TextField, Button } from "@material-ui/core";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Registration = ({ setName }) => {
  const history = useHistory();

  const schema = yup.object().shape({
    username: yup.string().required("Username obrigatório"),
    email: yup.string().required("E-mail obrigatório").email(),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})",
        "A senha precisa no mínimo de uma letra maiúscula, um número e um símbolo"
      ),
    passwordconfirm: yup
      .string()
      .required("Confirme sua senha!")
      .oneOf([yup.ref("password"), null], "As senhas devem ser iguais."),
  });

  const [userData, setUserData] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = (data) => {
    setUserData(data);
    history.push(`/home/${data.username}`);
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <TextField
        variant="outlined"
        label="Escreva seu usuário"
        {...register("username")}
        error={!!errors.username}
        helperText={errors.username?.message}
      />

      <TextField
        variant="outlined"
        label="Escreva seu email"
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
      />

      <TextField
        variant="outlined"
        label="Escreva sua senha"
        {...register("password")}
        error={!!errors.password}
        helperText={errors.password?.message}
      />

      <TextField
        variant="outlined"
        label="Confirme sua senha"
        {...register("passwordconfirm")}
        error={!!errors.passwordconfirm}
        helperText={errors.passwordconfirm?.message}
      />

      <Button type="submit">REGISTRAR</Button>
    </form>
  );
};

export default Registration;
