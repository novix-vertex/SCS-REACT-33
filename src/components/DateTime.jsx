import React from 'react'

const formatDateTime = (date) => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']

  const dayName = days[date.getDay()]
  const monthName = months[date.getMonth()]
  const dayNumber = date.getDate()

  const hours24 = date.getHours()
  const period = hours24 >= 12 ? 'pm' : 'am'
  let hours12 = hours24 % 12
  if (hours12 === 0) hours12 = 12

  const minutes = String(date.getMinutes()).padStart(2, '0')
  const hours = String(hours12).padStart(2, '0')

  return `${dayName} ${monthName} ${dayNumber} ${hours}:${minutes} ${period}`
}

const DateTime = () => {
  const now = new Date()
  return <div>{formatDateTime(now)}</div>
}

export default DateTime