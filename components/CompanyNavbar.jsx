import React from 'react'
import { Link } from 'react-router-dom'

export default function CompanyNavbar({ name }) {
    return (
        <div className='flex drop-shadow-xl bg-opacity-50 justify-center '>
            <Link to={"/"} title="HomeScreen">
                <img
                    src={`/~sec2assign1/assets/company/${name == "J.C.STAFF" ? "J C STAFF" : name}.png`}
                    alt="companybrand"
                    style={{ width: "20rem" }}
                />
            </Link>

        </div>
    )
}
