'use client'

import ErrorContent from "@/app/ErrorContent"
import { IErrorProps } from "@/app/_helper/types"
import { useEffect } from "react"


export default function Error(props: IErrorProps) {
    const { error, reset } = props

    useEffect(() => {
        console.error(error)
      }, [error])
    return (
        <>
           <ErrorContent />
           <div className="center">
           <button
                onClick={
                    () => reset()
                }
            >
                Try again
            </button>
           </div>
           

        </>
    )
}