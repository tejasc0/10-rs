import Link from 'next/link'
import React from 'react'

const Payment_Success = () => {
  return (
    <div>
        <div className="text-2xl text-blue-600 m-4">Thanks ayisha</div>
        <div className="font-semibold text-lg text-green-700 mx-3 mb-3">I will return your money soon</div>
        <Link href="/">Go to homepage</Link>
    </div>
  )
}

export default Payment_Success