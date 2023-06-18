'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';
import Link from 'next/link';

const Hero = () => (
	<section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
		<motion.div
			variants={staggerContainer}
			initial='hidden'
			whileInView='show'
			viewport={{ once: true, amount: 0.25 }}
			className={`${styles.innerWidth} mx-auto flex flex-col`}
		>
			<div className='flex justify-center items-center flex-col relative z-10'>
				<motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
					Space
				</motion.h1>
				<motion.h1 variants={textVariant(1.2)} className={styles.heroHeading}>
					Blog
				</motion.h1>
			</div>

			<motion.div
				variants={slideIn('right', 'tween', 0.2, 1)}
				className='relative w-full md:-mt-[20px] -mt-[12px]'
			>
				<div className='absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]' />

				<Image
					priority
					src='/cover.png'
					alt='hero_cover'
					height={500}
					width={350}
					quality={100}
					className='w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative'
				/>

				<a href='#explore'>
					<div className='w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10'>
						<Image
							src='/stamp.png'
							alt='stamp'
							height={110}
							width={110}
							className='sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain'
						/>
					</div>
				</a>
			</motion.div>
		</motion.div>
	</section>
);

export default Hero;
