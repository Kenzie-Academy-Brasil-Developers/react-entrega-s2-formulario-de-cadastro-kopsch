import { TextField, Button, makeStyles } from "@material-ui/core";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { FormStyled } from "./styles";

const Registration = ({ setUsername }) => {
  const useStyles = makeStyles({
    input: {
      marginBottom: "10px",
      width: "75%",
    },
  });

  const classes = useStyles();
  const history = useHistory();

  const schema = yup.object().shape({
    username: yup.string().required("Username obrigatório"),
    email: yup.string().required("E-mail obrigatório").email(),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        "^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})",
        "A senha precisa no mínimo de um número e um símbolo"
      ),
    passwordconfirm: yup
      .string()
      .required("Confirme sua senha!")
      .oneOf([yup.ref("password"), null], "As senhas devem ser iguais."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = (data) => {
    setUsername(data.username);
    history.push(`/home/${data.username}`);
  };

  return (
    <FormStyled onSubmit={handleSubmit(handleLogin)}>
      <TextField
        className={classes.input}
        variant="outlined"
        label="Escreva seu usuário"
        {...register("username")}
        error={!!errors.username}
        helperText={errors.username?.message}
      />

      <TextField
        className={classes.input}
        variant="outlined"
        label="Escreva seu email"
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
      />

      <TextField
        className={classes.input}
        variant="outlined"
        label="Escreva sua senha"
        type="password"
        {...register("password")}
        error={!!errors.password}
        helperText={errors.password?.message}
      />

      <TextField
        className={classes.input}
        variant="outlined"
        label="Confirme sua senha"
        type="password"
        {...register("passwordconfirm")}
        error={!!errors.passwordconfirm}
        helperText={errors.passwordconfirm?.message}
      />

      <Button variant="outlined" type="submit">
        REGISTRAR
      </Button>
    </FormStyled>
  );
};

export default Registration;
