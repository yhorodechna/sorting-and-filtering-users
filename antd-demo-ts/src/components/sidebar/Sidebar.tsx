import React, { useState } from 'react';

import { IFilterSettings, IResult } from '../exampleSix/common/Interfaces';
import { useForm, SubmitHandler } from "react-hook-form";


interface IProps {
    title: string
    data: IResult | undefined
    onFilterChange?: (settings: IFilterSettings) => void;
}


type Inputs = {
    fullName: string,
};


export function Sidebar({ data, onFilterChange }: IProps) {
    const { register, handleSubmit, watch, getValues, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        onFilterChange && onFilterChange({ gender: 'male', full_name: data.fullName })
    };

    // console.log(watch("fullName")) // watch input value by passing the name of it
    // console.log('getValues', getValues())
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("fullName", { required: true })} />
            <input type="submit" />
        </form>
    );
}
