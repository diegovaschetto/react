import { auth } from "../../firebase";

//form 
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

//firebase
import { createUserWithEmailAndPassword } from "firebase/auth";

//mui
import { Box, Button, TextField } from "@mui/material";




const schema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required(),
    confirmPassword:  yup.string().required().oneOf([yup.ref("password"), null], "Passwords don't match!")
})


export const Signup = () => {
    const { register, handleSubmit , formState:{errors, isSubmitted, isSubmitSuccessful}  } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = handleSubmit(data => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential)=>{
                console.log(userCredential.user)
            })
            .catch((error)=> {
                console.log(error.message)
            })
        
    })

    return (
        <>
            <Box component={"form"} onSubmit={onSubmit} noValidate>
                <TextField
                    label="Email"
                    variant="outlined"
                    type={"email"}
                    autoComplete="email"
                    autoFocus
                    error={(isSubmitted && errors.email)? true : false}
                    {...register("email")}
                    helperText={errors.email? errors.email.message?.toString() : undefined }
                    />
                <TextField
                    label="Password"
                    variant="outlined"
                    type={"password"}
                    error={(isSubmitted && errors.password)? true : false}
                    {...register("password")}
                    helperText={errors.password? errors.password.message?.toString() : undefined }
                />
                <TextField
                    label="Password"
                    variant="outlined"
                    type={"password"}
                    error={(isSubmitted && errors.confirmPassword)? true : false}
                    {...register("confirmPassword")}
                    helperText= {errors.confirmPassword ? errors.confirmPassword.message?.toString() : undefined }
                />
                <Button disabled={isSubmitSuccessful} type="submit" variant="contained">Iscriviti</Button>
            </Box>
        </>
    );
};
