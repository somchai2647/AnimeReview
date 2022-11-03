import React from 'react'
import AboutCard from '../../components/Cards/AboutCard'

export default function About() {
    return (
        <div>
            <div className="container p-5">
                <div className="grid  gap-4">
                    <div>
                        <AboutCard src={"https://scontent.fbkk3-4.fna.fbcdn.net/v/t1.6435-9/121519764_2368674279946021_5900709547255754333_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEYGov2nGzPsM1RMwJhcypZOiXU5SKA12I6JdTlIoDXYjXgcdrQOdUF4uyomz58SDBsX0SaLnx4MeBnd_5URw6h&_nc_ohc=HbxHvmukNgQAX-cjfcX&_nc_ht=scontent.fbkk3-4.fna&oh=00_AfDEEZvG6L0eRmDK9fmN22RUaL-HrAJe3npX3y_vf931Lw&oe=638B48E0"} />
                    </div>
                    <div>
                        <AboutCard />
                    </div>
                </div>
            </div>
        </div>
    )
}
