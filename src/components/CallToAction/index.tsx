import Title from '@/components/Title'
import styles from '@/components/CallToAction/callToAction.module.css';

export default function CallToAction(props : {
    titleTop: string,
    titleBottom: string,
    content: string,
    actionText: string,
    whiteTextOnMobile: boolean
}) {
    return (
        <div className={styles.callToAction}>
            <Title 
                titleTop={props.titleTop}
                titleBottom={props.titleBottom}
                whiteTextOnMobile={props.whiteTextOnMobile}
            />
            <div className={[styles.content, props.whiteTextOnMobile ? styles.whiteTextOnMobile : ''].join(' ')}>
                {props.content}
            </div>
            <div className={[styles.actionText, props.whiteTextOnMobile ? styles.whiteTextOnMobile : ''].join(' ')}>
                {props.actionText}
            </div>
        </div>
    )
}