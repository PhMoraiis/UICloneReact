import React from 'react'

export const BurgerSVG: React.FC = ({ ...props }) => {
  return (
    <svg viewBox="0 0 45 30" fill="none" {...props}>
      <path fill="#FFF" d="M0 0h45v5H0zM0 25h45v5H0zM0 13h45v5H0z" />
    </svg>
  )
}

export const LogoSVG: React.FC = ({ ...props }) => {
  return (
    <svg viewBox="0 0 100 100" fill="none" {...props}>
      <path
        fill="#FFF"
        d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 90C27.4 90 10 72.6 10 50S27.4 10 50 10s40 17.4 40 40-17.4 40-40 40z"
      />
      <path
        fill="#FFF"
        d="M50 25C35.7 25 25 35.7 25 50s10.7 25 25 25 25-10.7 25-25S64.3 25 50 25zm0 40c-8.3 0-15-6.7-15-15s6.7-15 15-15 15 6.7 15 15-6.7 15-15 15z"
      />
    </svg>
  )
}