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
let variableName: {} = {};

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
