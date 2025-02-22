"use client"

import React from 'react';
import {Label} from "@/components/ui/label";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {InputIcon} from "@/components/ui/input-icon";
import {Lock, MailIcon, User, Phone, Building} from "lucide-react";
import {useAuth} from "@/lib/hooks";
import {useFormik} from "formik";
import * as Yup from "yup";
import {useRegisterMutation} from "@/lib/api/auth";

const Register = () => {
    // ** Mutation **
    const [register, result] = useRegisterMutation()

    const formik = useFormik({
        initialValues: {
            name: 'Test',
            surname: 'User',
            companyName: 'Test Company',
            email: 'test@test.com',
            phone: '+905001234567',
            password: 'P@ssw0rd',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string()
                .max(10, 'Must be 10 characters or less')
                .min(6, 'Must be 6 characters or more')
                .required('Required'),
        }),
        onSubmit: values => {
            console.log(values)
            register(values)
        },
    });

    return (
        <>
            <div className="w-full min-h-screen lg:grid lg:grid-cols-2">
                <div className="flex items-center justify-center py-12">
                    <div className="mx-auto grid w-[350px] gap-6">
                        <div className="grid gap-2 text-center">
                            <h1 className="text-3xl font-bold">Welcome to !</h1>
                        </div>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="grid gap-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="name">Name</Label>
                                        <InputIcon
                                            id="name"
                                            type="name"
                                            startIcon={User}
                                            placeholder="Name"
                                            required
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.name}
                                        />
                                        {formik.touched.name && formik.errors.name ? (
                                            <div
                                                className="block text-sm font-medium text-red-700">{formik.errors.name}</div>
                                        ) : null}
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="surname">Surname</Label>
                                        <InputIcon
                                            id="surname"
                                            type="surname"
                                            startIcon={User}
                                            placeholder="Surname"
                                            required
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.surname}
                                        />
                                        {formik.touched.surname && formik.errors.surname ? (
                                            <div
                                                className="block text-sm font-medium text-red-700">{formik.errors.surname}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="companyName">Company Name</Label>
                                    <InputIcon
                                        id="companyName"
                                        type="companyName"
                                        startIcon={Building}
                                        placeholder="Company Name"
                                        required
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.companyName}
                                    />
                                    {formik.touched.companyName && formik.errors.companyName ? (
                                        <div
                                            className="block text-sm font-medium text-red-700">{formik.errors.companyName}</div>
                                    ) : null}
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <InputIcon
                                        id="email"
                                        type="email"
                                        startIcon={MailIcon}
                                        placeholder="m@example.com"
                                        required
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                    />
                                    {formik.touched.email && formik.errors.email ? (
                                        <div
                                            className="block text-sm font-medium text-red-700">{formik.errors.email}</div>
                                    ) : null}
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="phone">Phone</Label>
                                    <InputIcon
                                        id="phone"
                                        type="phone"
                                        startIcon={Phone}
                                        placeholder="Phone"
                                        required
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.phone}
                                    />
                                    {formik.touched.phone && formik.errors.phone ? (
                                        <div
                                            className="block text-sm font-medium text-red-700">{formik.errors.phone}</div>
                                    ) : null}
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Password</Label>
                                    <InputIcon
                                        id="password"
                                        type="password"
                                        startIcon={Lock}
                                        placeholder="Password"
                                        required
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.password}
                                    />
                                    {formik.touched.password && formik.errors.password ? (
                                        <div
                                            className="block text-sm font-medium text-red-700">{formik.errors.password}</div>
                                    ) : null}
                                </div>
                                <Button type="submit" className="w-full">
                                    Sign up
                                </Button>
                            </div>
                            <div className="mt-4 text-center text-sm">
                                Don&apos;t have an account?{" "}
                                <Link href="/en/auth/sign-in" className="underline">
                                    Sign in
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

export default Register;