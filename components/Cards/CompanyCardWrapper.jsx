import React from 'react'
import { Link } from 'react-router-dom'

export default function CompanyCardWarpper({ data = [] }) {
  return (
    <div className="cards-list">
      {data.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  )
}

export function Card({ item }) {

  return (
    <Link to={`/company/${item.name}`}>
      <div className="card">
        <div className="card_image">
          <img className='bg-cover' src={item.src} alt={item.Name} />
        </div>
        <div className="card_title title-white">
        </div>
      </div>
    </Link>

  )
}