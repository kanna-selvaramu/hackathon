import React from "react";
import s from '../styles/newChallenge.module.css'
import { Formik } from "formik";
import * as Yup from "yup";
import { Box, Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { categories } from "../data/categories";
import { addNewChallenge } from "../reducers/action";

const newChallenge = () => {

    const router = useRouter();
    const cat = categories;

    const validate = ( values ) => {
        let errors = {};
        if (values.title === "") {
            Object.assign(errors, {["tile"]: "Title cannot be empty"});
        }
        if (values.description === "") {
            Object.assign(errors, {["description"]: "Description cannot be empty"});
        }
        if (values.category === "") {
            Object.assign(errors, {["category"]: "Category cannot be empty"});
        }
        return errors;
    };

    const addChallenge = (values) => {
        let data = {
            "title": values.title,
            "desc": values.description,
            "cat": values.category, 
            "date": +new Date,
            "upvote": "0"
        }
        addNewChallenge(data);
        router.push("/dashboard")
    }

    return (
        <div className={s.cls_LoginWrapper}>
            <div className={s.cls_LoginWrap2}>
                <div className={s.cls_LoginCont}>
                    <div className = "cls_TitleText">
                        Create A New Challenge
                    </div>
                    <div className={s.cls_LoginBody}>
                    <Formik
                        enableReinitialize
                        initialValues={{
                            title: "",
                            description: "", 
                            category: ""
                        }}
                        validate={(initialValues) => validate(initialValues)} 
                        onSubmit={async (values) => {
                            addChallenge(values)
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
                                <TextField
                                    error={Boolean(touched.title && errors.title)}
                                    helperText={touched.title && errors.title}
                                    fullWidth
                                    required
                                    className = {s.cls_textfield}
                                    label="Challenge Title"
                                    margin="normal"
                                    name="title"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    type="text"
                                    value={values.title}
                                />
                                <TextField
                                    id="outlined-multiline-flexible"
                                    label="Description"
                                    required
                                    className = {s.cls_textfield}
                                    multiline
                                    error={Boolean(touched.description && errors.description)}
                                    helperText={touched.description && errors.description}
                                    fullWidth
                                    maxRows={4}
                                    name="description"
                                    type="text"
                                    value={values.description}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                <TextField
                                    value={values.category}
                                    fullWidth
                                    onBlur={handleBlur}
                                    required
                                    className = {s.cls_textfield}
                                    helperText={touched.category && errors.category}
                                    error={Boolean(touched.category && errors.category)}
                                    onChange={(opt, e) => {
                                            handleChange("category")(opt.target.value);
                                    }}
                                    select // tell TextField to render select
                                    label="Category"
                                >
                                    {
                                        categories.map((item , key) => {
                                            return(
                                                <MenuItem key = {key} value={item.title}>{item.title}</MenuItem>
                                            )
                                        })
                                    }
                                </TextField>
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
                                        Create Challenge
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

export default newChallenge;