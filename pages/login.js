import React from "react";
import s from '../styles/Login.module.css';
import { Formik } from "formik";
import * as Yup from "yup";
import { Box, Button, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { challenge } from "../data/challenge";
import { updateChallenge } from "../reducers/action";

const Login = () => {

    const router = useRouter();

    const handleLogin = (values) => {
        if(values.empId) {
            localStorage.setItem("user", values.empId);
            updateChallenge(challenge);
            router.push("/");
        }
    }

    return (
        <div className={s.cls_LoginWrapper}>
            <div className={s.cls_LoginWrap2}>
                <div className={s.cls_LoginCont}>
                    <div className = "cls_TitleText">
                        Login to your Account
                    </div>
                    <div className={s.cls_LoginBody}>
                    <Formik
                        enableReinitialize
                        initialValues={{
                            empId: ""
                        }}
                        validationSchema={Yup.object().shape({
                            empId: Yup.string()
                                .required("ID is required"),
                        })}
                        onSubmit={async (values) => {
                            handleLogin(values);
                        }}>

                        {({
                            errors,
                            handleBlur,
                            handleChange,
                            handleSubmit,
                            isSubmitting,
                            touched,
                            values,
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <TextField
                                        error={Boolean(touched.email && errors.email)}
                                        helperText={touched.email && errors.email}
                                        fullWidth
                                        required
                                        className = "cls_LoginInputs"
                                        label="Employee ID"
                                        margin="normal"
                                        name="empId"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        type="text"
                                        value={values.empId}
                                        variant = "standard"
                                        inputProps={{
                                            className: "cls_LoginInputBox"
                                        }}
                                    />
                                </div>
                                <Box my={2} className = "cls_BtnWrap">
                                    <Button
                                        className = "cls_Btn"
                                        color="primary"
                                        disabled={isSubmitting}
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                    >
                                        Sign In
                                    </Button>
                                </Box>
                                
                            </form>
                        )}
                    </Formik>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;