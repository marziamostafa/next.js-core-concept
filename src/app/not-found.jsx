import Link from 'next/link'
import React from 'react'

export default function NotFoundPage() {
    return (
        <div>

            <h1>
                404 Not Found

            </h1>

            <Link href="/">
                Go back to Home
            </Link>
        </div>
    )
}
