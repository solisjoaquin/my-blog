---
title: "Code snippets for React with TS"
date: "2023-01-11"
label: "Typescript"
---

## Basic types

```
let variableName: string = "hi";
let variableName: number = 2;
let variableName: boolean = true;
let variableName: undefined = undefined;
let variableName: null = null;
let variableName: ( number | string)[] = [1, 2, 4, "Hi"];

```

## Components and props

```
type fnStrToNumber = (str:string) => number;

interface fnStrToNumber2 {
    (srt:string):number
}

const strToNumber2: fnStrToNumber = str => {
    return 3;
}
```

```
interface Props {
    name: string;
    age:number;
    children?: React.ReactNode; // JSX.Element
}

const Greeter = ({name, age, children}: Props)=> {
    ...
    return(
        <div>
            <div>{name} / {age}</div>
            {children}
        </div>
    )
}


```

## Hooks

### useState

```
const [age, setAge] = useState<number>(0)

// if I pass state as props

interface Pros {
    age: number;
    setAge: (newAge: number) => void;
    // another option
    setAge: React.Dispatch<React.SetStateAction<number>>
}

```

### useContext

```
import {createContext, useState} from "react"

interface IAgeContext {
    age: number;
    setAge: React.Dispatch<React.SetStateAction<number>>
}

export AgeContext = createContext<IAgeContext>{{} as IAgeContext};

function AgeProvider({children}: any){
    const [age, setAge] = useState<number>(0);

    const sharedData: IAgeContext = {
        age,
        setAge,
    }
    return (
        <AgeContext.Provider value={sharedData}>{provider}</AgeContext.Provider>
    )
}

```
