'use client'

import { useEffect } from "react"
import ErrorContent from "./ErrorContent"
import { IErrorProps } from "./_helper/types"

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