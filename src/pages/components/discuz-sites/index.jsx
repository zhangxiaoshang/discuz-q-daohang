import { Card } from 'antd';
import discuzList from '@/data/discuz.js';
import styles from './index.less';

const discuzSites = () => (
  <>
    {discuzList.map(category => (
      <Card
        key={category.category}
        title="DiscuzQ 酷站"
        bordered={false}
        extra={category.category}
      >
        {category.list.map(item => (
          <Card.Grid
            hoverable={false}
            key={item.title}
            className={styles.CardGrid}
          >
            <a
              href={item.url}
              target="_blank"
              style={{ backgroundImage: `url(${item.logo})` }}
            >
              <h3>
                {item.title}
                {item.ticket && <span className="ticket">¥{item.ticket}</span>}
              </h3>
              <p>{item.summary}</p>
            </a>
          </Card.Grid>
        ))}
      </Card>
    ))}
  </>
);

export default discuzSites;
