import React from 'react'
import CompanyCardWrapper from '../../components/Cards/CompanyCardWrapper'
import CompanyData from '../data/Company'

export default function HomeScreen() {
  return (
    <div>
      <CompanyCardWrapper data={CompanyData} />
    </div>
  )
}
