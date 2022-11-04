import React from 'react'

export default function CompanyNavbar({ name }) {
    return (
        <div className='flex drop-shadow-xl bg-opacity-50 justify-center '>
            <img
                src={`/~sec2assign1/assets/company/${name=="J.C.STAFF"? "J C STAFF" : name}.png`}
                alt="companybrand"
                style={{ width: "20rem" }}
            />
        </div>
    )
}
