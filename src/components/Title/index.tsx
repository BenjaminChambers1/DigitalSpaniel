import styles from '@/components/Title/title.module.css';

export default function Title(props: {
	titleTop: string;
	titleBottom: string;
	whiteTextOnMobile?: boolean;
}) {
	return (
		<div>
			<div
				className={[
					styles.titleTop,
					props.whiteTextOnMobile ? styles.whiteTextOnMobile : ''
				].join(' ')}
			>
				{props.titleTop}
			</div>
			<div
				className={[
					styles.titleBottom,
					props.whiteTextOnMobile ? styles.whiteTextOnMobile : ''
				].join(' ')}
			>
				{props.titleBottom}
			</div>
		</div>
	);
}
