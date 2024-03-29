import React from 'react'

import styles from '../css/ErrorPageStyles.module.css'

import Meta from '../components/Meta.jsx'

const Page404 = () => {
    return (
        <>
        <Meta title='404 Page not found | Jozef Müller'/>      
        <section style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div className={styles.errorpagecontainer}>
                <h1 className={styles.error_page}>404</h1>
                <h3>Sorry, page not found :(</h3>
            </div>
        </section>
        </>
    )
}

export default Page404
