

export interface IResult {
    info: [];
    results: IHuman[];
    a:
    | {
        name: string;
    }
    | undefined;
};

export interface IHuman {
    gender: string;
    name: {
        first: string;
        last: string;
    };
    nat: string;
    location: {
        country: string;
    };
    dob: {
        age: number;
    };
}

export interface IFilterSettings{
    gender:string;
    full_name: string;
}