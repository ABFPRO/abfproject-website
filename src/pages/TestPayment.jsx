
import React from 'react'

export default function TestPayment(){
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-md overflow-hidden p-8">
          <h2 className="text-2xl font-semibold text-abf">Test Payment</h2>
          <p className="mt-2 text-gray-600">Halaman Test Payment di-embed dari file statis (public/testpayment/index.html).</p>
          <div className="mt-6">
            <iframe src="/testpayment/index.html" className="w-full h-[80vh] border" title="Test Payment"></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
