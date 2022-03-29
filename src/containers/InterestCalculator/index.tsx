import React, { useState } from 'react'
import InterestForm from '../../components/InterestForm';

const InterestCalculator = () => {
  const [interest, setInterest] = useState<number>(0)
  const [showInterest, setShowInterest] = useState<boolean>(false)
  return (
    <div>
      <InterestForm
        setInterest={setInterest}
        showInterest={setShowInterest}
      />
      {showInterest && <p>{interest}</p>}
    </div>
  )
}

export default InterestCalculator;
