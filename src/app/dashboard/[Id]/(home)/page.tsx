import React from 'react'
import StressRelief from '../../wellness/page'
import HappinessMeter from '@/app/_components/dashboard/Happiness'

const Page = () => {
  return (
      <div className="min-h-full flex justify-center px-4">
        <div className="w-full max-w-3xl">
      <HappinessMeter />
        </div>
      </div>
  );
}

export default Page