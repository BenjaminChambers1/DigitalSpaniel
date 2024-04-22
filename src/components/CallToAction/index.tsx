import Title from '@/components/Title';
import styles from '@/components/CallToAction/callToAction.module.css';

export default function CallToAction({
	titleTop,
	titleBottom,
	content,
	actionText,
	whiteTextOnMobile
}: {
	titleTop: string;
	titleBottom: string;
	content: string;
	actionText: string;
	whiteTextOnMobile: boolean;
}) {
	return (
		<div className={styles.callToAction}>
			<Title
				titleTop={titleTop}
				titleBottom={titleBottom}
				whiteTextOnMobile={whiteTextOnMobile}
			/>
			<div
				className={[styles.content, whiteTextOnMobile ? styles.whiteTextOnMobile : ''].join(
					' '
				)}
			>
				{content}
			</div>
			<div
				className={[
					styles.actionText,
					whiteTextOnMobile ? styles.whiteTextOnMobile : ''
				].join(' ')}
			>
				{actionText}
			</div>
		</div>
	);
}
