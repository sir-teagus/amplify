import React from 'react'
import { Rocket, Sparkles } from 'lucide-react'

const AnimatedRocket: React.FC = () => {
  return (
    <div className="relative mb-24">
      <Rocket className="w-24 h-24 mx-auto text-brand-600 animate-bounce" />
      <Sparkles className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-4 text-yellow-400 w-24 h-24 animate-pulse" />
    </div>
  )
}

export default AnimatedRocket
