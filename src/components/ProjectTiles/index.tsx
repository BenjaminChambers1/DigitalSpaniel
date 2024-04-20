import React, { useState } from 'react';
import styles from '@/components/ProjectTiles/projectTiles.module.css';
import Title from '@/components/Title';
export default function ProjectTiles() {
    const [tabIndex, setTabIndex] = useState(0);
    const tabs : Array<{option: string, value: string}> = [
        {
            option: 'ALL',
            value: 'all'
        },
        {
            option: 'Branding',
            value: 'branding'
        },
        {
            option: 'Web Design',
            value: 'web-design'
        },
        {
            option: 'Digital Marketing',
            value: 'digital-marketing'
        },
    ]
    return (
        <div className="flexColumn fullWidth clampPadding">
            <Title 
                titleTop="Some of our"
                titleBottom="recent projects"
            />
            <div className={styles.tabs}>
                {tabs.map((tab, i) => 
                    <div
                        className={styles.tab}
                        key={i}
                        onClick={() => setTabIndex(i)}
                    >
                        <div className={tabIndex === i ? styles.active: ''}>
                            {tab.option}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}