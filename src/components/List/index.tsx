import styles from '@/components/List/list.module.css';

export default function Title(props : {
    title: string,
    listItems: Array<{ title: string, subtitle?: string }>
}) {
    return (
        <div className={styles.list}>
           <div className={styles.title}>
                {props.title}
            </div>
            {props.listItems.map((item :{
                title: string,
                subtitle?: string
            }, i) =>
                <div key={i} className={styles.item}>
                    <div className={styles.itemTitle}>{item.title}</div>
                    <div className={styles.itemSubtitle}>{item.subtitle}</div>
                </div>
            )}
        </div>
    )
}