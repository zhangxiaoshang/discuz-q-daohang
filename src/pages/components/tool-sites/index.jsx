import { Card } from 'antd';
import data from '@/data/tool-sites.js';
import styles from './index.less';

const toolSites = () => (
  <>
    {data.map(categoryItem => (
      <Card
        key={categoryItem.category}
        title={categoryItem.category}
        bordered={false}
      >
        {categoryItem.sites.map(site => (
          <Card.Grid
            hoverable={false}
            key={site.title}
            className={styles.CardGrid}
          >
            <a
              href={site.url}
              target="_blank"
              style={{ backgroundImage: `url(${site.icon})` }}
            >
              <h3>{site.title}</h3>
              <p>{site.summary}</p>
            </a>
          </Card.Grid>
        ))}
      </Card>
    ))}
  </>
);

export default toolSites;
