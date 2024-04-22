import React, { useState } from 'react';
import styles from '@/components/ProjectTiles/projectTiles.module.css';
import Title from '@/components/Title';
export default function ProjectTiles() {
	const numberOfColumns = 3;
	const [tabIndex, setTabIndex] = useState(0);
	const tabs: Array<{ option: string; value: string }> = [
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
			value: 'webdesign'
		},
		{
			option: 'Digital Marketing',
			value: 'digitalmarketing'
		}
	];
	const portfolios: Array<{
		category: string;
		title: string;
		subtitle: string;
		actionText: string;
		image: string;
		colSpan?: number;
	}> = [
		{
			category: 'branding',
			title: 'Make Ideas Happen',
			subtitle: 'A local paper with big ideas needed. A sharp new brand to inspire readers.',
			actionText: 'Full Project',
			image: 'whellies01.png'
		},
		{
			category: 'webdesign',
			title: 'Make Ideas Happen',
			subtitle: 'A local paper with big ideas needed. A sharp new brand to inspire readers.',
			actionText: 'Full Project',
			image: 'newspaper02.png'
		},
		{
			category: 'webdesign',
			title: 'Make Ideas Happen',
			subtitle: 'A local paper with big ideas needed. A sharp new brand to inspire readers.',
			actionText: 'Full Project',
			image: 'makerek.png'
		},
		{
			category: 'digitalmarketing',
			title: 'Make Ideas Happen',
			subtitle: 'A local paper with big ideas needed. A sharp new brand to inspire readers.',
			actionText: 'Full Project',
			image: 'newspaper.png',
			colSpan: 2
		},
		{
			category: 'digitalmarketing',
			title: 'Make Ideas Happen',
			subtitle: 'A local paper with big ideas needed. A sharp new brand to inspire readers.',
			actionText: 'Full Project',
			image: 'rider01.png'
		}
	];

	const calculatedColumn = (index: number) => {
		return (
			(portfolios.slice(0, index).reduce((acc, { colSpan = 1 }) => acc + colSpan || 1, 0) %
				numberOfColumns) +
			1
		);
	};

	return (
		<div className="flexColumn fullWidth clampPadding">
			<Title titleTop="Some of our" titleBottom="recent projects" />
			<div className={styles.tabs}>
				{tabs.map((tab, i) => (
					<div className={styles.tab} key={i} onClick={() => setTabIndex(i)}>
						<div className={tabIndex === i ? styles.active : ''}>{tab.option}</div>
					</div>
				))}
			</div>
			<div className={[styles.tilesContainer, 'mt-2'].join(' ')}>
				{portfolios
					// .filter((portfolio) => portfolio.category === tabs[tabIndex].value)
					.map(({ category, title, subtitle, actionText, image, colSpan = 1 }, i) => {
						return (
							<div
								key={i}
								className={[styles.container].join(' ')}
								style={{
									backgroundImage: `url("/images/portfolio/${image}")`,
									gridColumn: `${calculatedColumn(i)} / span ${colSpan}`,
									aspectRatio: colSpan / 1
								}}
							>
								<div className={styles.containerContent}>
									<div className={styles.content}>
										<div className={[styles.title].join(' ')}>{title}</div>
										<div className={[styles.subtitle, 'mt-1'].join(' ')}>
											{subtitle}
										</div>
										<div className={[styles.actionText, 'mt-1'].join(' ')}>
											{actionText}
										</div>
									</div>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
}
