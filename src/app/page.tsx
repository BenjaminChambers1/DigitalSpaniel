'use client';
import styles from '@/app/page.module.css';
import Menu from '@/components/Menu';
import CallToAction from '@/components/CallToAction';
import List from '@/components/List';
import ProjectTiles from '@/components/ProjectTiles';

export default function Home() {
    return (
        <main className={styles.main}>
            <Menu />
            <div className={styles.landingBanner}>
                <div className={[styles.half, styles.landingBannerCallToAction, 'alignItemsCenter', 'clampPadding'].join(' ')}>
                    <div className={styles.callToActionContainer}>
                        <div className={styles.redText}>BRAND, DEV, ECOM, MARKETING</div>
                        <CallToAction
                            titleTop="We unleash"
                            titleBottom="business potential"
                            content="We create brand experiences which are memorable and distinct. Our experienced team create and develop brands with personality and resonance."
                            actionText="Let's talk"
                            whiteTextOnMobile={true}
                        />
                    </div>
                </div>
                <img
                    className={styles.imageHalf}
                    src="images/Spaniel01_gradient.png"
                />
            </div>
            <div className={['clampPadding', styles.banner, 'gap-2'].join(' ')}>
                <div className={styles.half}>
                    <div className={styles.callToActionContainer}>
                        <CallToAction
                            titleTop="What are"
                            titleBottom="we capable of"
                            content="By focusing on design as an enabler and putting a huge emphasis on our clients as co-producers, we create innovative, sustainable marketing that enhances brand experience and user engagement."
                            actionText="Our Process"
                            whiteTextOnMobile={false}
                        />
                    </div>
                </div>
                <div className={styles.half}>
                    <div className="flexColumn halfWidth fullHeight gap-1">
                        <div className="pb-2">
                            <List
                                title="BRAND"
                                listItems={[
                                    {
                                        title: 'Brand Strategy'
                                    },
                                    {
                                        title: 'Logo & Name'
                                    },
                                    {
                                        title: 'Identity & Collateral'
                                    }
                                ]}
                            />
                        </div>
                        <List
                            title="DEVELOPMENT"
                            listItems={[
                                {
                                    title: 'eCommerce'
                                },
                                {
                                    title: 'Web Development'
                                },
                                {
                                    title: 'Mobile Apps'
                                }
                            ]}
                        />
                    </div>
                    <div className="flexColumn halfWidth fullHeight">
                        <List
                            title="MARKETING"
                            listItems={[
                                {
                                    title: 'Digital'
                                },
                                {
                                    title: 'Market Research'
                                }
                            ]}
                        />
                    </div>
                </div>
            </div>
            <ProjectTiles />
            <div className={['clampPadding', styles.banner, 'gap-2'].join(' ')}>
                <div className={styles.half}>
                    <div className={styles.callToActionContainer}>
                        <CallToAction
                            titleTop="We're a brands"
                            titleBottom="best friend"
                            content=""
                            actionText="Let's talk"
                            whiteTextOnMobile={false}
                        />
                    </div>
                </div>
                <div className={[styles.half, 'gap-2'].join(' ')}>
                    <div className="flexColumn">
                        <List
                            title="EXPLORE"
                            listItems={[
                                {
                                    title: 'Services'
                                },
                                {
                                    title: 'Work'
                                },
                                {
                                    title: 'About'
                                },
                                {
                                    title: 'Blog'
                                },
                                {
                                    title: 'Careers'
                                }
                            ]}
                        />
                    </div>
                    <div className="flexColumn">
                        <List
                            title="SERVICES"
                            listItems={[
                                {
                                    title: 'Brand',
                                },
                                {
                                    title: 'Development'
                                },
                                {
                                    title: 'Marketing'
                                }
                            ]}
                        />
                    </div>
                    <div className="flexColumn">
                        <List
                            title="QUESTIONS?"
                            listItems={[
                                {
                                    title: 'Call Us',
                                    subtitle: '0121 345 678'
                                },
                                {
                                    title: 'Email Us',
                                    subtitle: 'info@digitalspaniel.co.uk'
                                }
                            ]}
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}
