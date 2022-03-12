import RichContent from '../../modules/RichContent'
import type TextInterface from './interface'

import styles from './styles.module.scss'

export default function Text({
  title,
  alignment,
  text,
  heading = 'h2',
}: TextInterface) {
  return (
    <section className={styles['text']} data-alignment={alignment}>
      <div className={styles['text__inner']}>
        {heading === 'h1' && <h1>{title}</h1>}
        {heading === 'h2' && <h2>{title}</h2>}

        <RichContent>{text}</RichContent>
      </div>
    </section>
  )
}
