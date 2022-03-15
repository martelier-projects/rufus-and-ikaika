import type Page from '../../interfaces/Page'

import FlexibleContent from '../../components/modules/FlexibleContent'
import Seo from '../../components/partials/Seo'

import styles from './styles.module.scss'

export default function DefaultTemplate({ sections, seo }: Page) {
  return (
    <>
      <Seo {...seo} />
      <main className={styles['default']}>
        <img
          className={styles['default__leaves']}
          aria-hidden="true"
          src="/images/leaves.png"
          alt=""
        />
        {sections && <FlexibleContent sections={sections} />}
        <img
          className={styles['default__leaves-bottom']}
          aria-hidden="true"
          src="/images/leaves-2.png"
          alt=""
        />
      </main>
    </>
  )
}
