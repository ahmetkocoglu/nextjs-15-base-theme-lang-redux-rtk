"use client"

import React from 'react';
import {Label} from "@/components/ui/label";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {InputIcon} from "@/components/ui/input-icon";
import {Lock, MailIcon} from "lucide-react";
import {useAuth} from "@/lib/hooks";
import {useFormik} from "formik";
import * as Yup from 'yup';
import {Input} from "@/components/ui/input";

const Login = () => {
    const {login} = useAuth()

    const formik = useFormik({
        initialValues: {
            email: 'test@test.com',
            password: '123456789',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string()
                .max(10, 'Must be 10 characters or less')
                .min(6, 'Must be 6 characters or more')
                .required('Required'),
        }),
        onSubmit: values => {
            login(values)
        },
    });

    return (
        <>
            <div className="w-full min-h-screen lg:grid lg:grid-cols-2">
                <div className="flex items-center justify-center py-12">
                    <div className="mx-auto grid w-[450px] gap-6">
                        <div className="grid gap-2 text-center">
                            <h1 className="text-3xl font-bold">Log in to your account</h1>
                        </div>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="grid gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <InputIcon
                                        id="email"
                                        type="email"
                                        startIcon={MailIcon}
                                        placeholder="m@example.com"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                    />
                                    {formik.touched.email && formik.errors.email ? (
                                        <div className="block text-sm font-medium text-red-700">{formik.errors.email}</div>
                                    ) : null}
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="password">Password</Label>
                                    <InputIcon
                                        id="password"
                                        type="password"
                                        startIcon={Lock}
                                        placeholder="Password"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.password}
                                    />
                                    {formik.touched.password && formik.errors.password ? (
                                        <div
                                            className="block text-sm font-medium text-red-700">{formik.errors.password}</div>
                                    ) : null}
                                    <div className="flex items-center my-1.5 mx-1">
                                        <div className="flex items-center space-x-2">
                                            <Input id="terms" type={'checkbox'} className={'h-5'}/>
                                            <label
                                                htmlFor="terms"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Remember me
                                            </label>
                                        </div>
                                        <Link
                                            href="/forgot-password"
                                            className="ml-auto inline-block text-sm underline"
                                        >
                                            Forgot your password?
                                        </Link>
                                    </div>
                                </div>
                                <Button type="submit" className="w-full">
                                    Login
                                </Button>
                            </div>
                            <div className="mt-4 text-center text-sm">
                                Don&apos;t have an account?{" "}
                                <Link href="/en/auth/sign-up" className="underline">
                                    Sign up
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="hidden bg-muted lg:flex items-center">
                    {/*<Image
                        src="/001.png"
                        alt="Image"
                        width={500}
                        height={500}
                        className="w-full object-cover dark:brightness-[0.2] dark:grayscale"
                    />*/}
                </div>
            </div>
        </>
    );
};

export default Login;