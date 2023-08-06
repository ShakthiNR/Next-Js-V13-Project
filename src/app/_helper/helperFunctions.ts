
export function getMultipleOfNum(arr:Array<number>, value:number):Array<number>{
    const result = arr.map(elm => {
        return elm * value
    })

    return result
}

export function convertString(str: string, fnName:"lowercase"|"uppercase"):string{
    if(fnName == "lowercase")
        return str.toLowerCase()
    else
        return str.toUpperCase()
}   

export const developers =[
    {id:1, name:"AAA", role:"SDE-1" }, 
    {id:2, name:"BBB", role:"SDE-2" },
    {id:3, name:"CCC", role:"SDE-3" },
    {id:4, name:"ZZZ", role:"SDE-2" },
]

export const testers =[
    {id:1, name:"GGG", role:"SDTE-1" }, 
    {id:2, name:"HHH", role:"SDTE-2" },
]

export const managements =[
    {id:1, name:"JJJ", role:"CEO" }, 
    {id:2, name:"KKK", role:"CTO" },
    {id:3, name:"LLL", role:"CFO" },
]