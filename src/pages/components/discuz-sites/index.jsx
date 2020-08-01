import { Card, message } from 'antd';
import { IeOutlined, WechatOutlined } from '@ant-design/icons';
import copy from 'copy-to-clipboard';
import discuzList from '@/data/discuz.js';
import styles from './index.less';

const handleClick = (e, data) => {
  if (!data.url) {
    e.preventDefault();

    copy(data.title);
    message.info('未收录Web 已复制小程序名称');
  }
};

const CardItem = ({ data: item }) => (
  <Card.Grid hoverable={false} className={styles.CardGrid}>
    <a
      href={item.url}
      target="_blank"
      style={{ backgroundImage: `url(${item.logo})` }}
      onClick={e => handleClick(e, item)}
    >
      <h3>
        {item.title}

        {item.ticket && <span className="ticket">¥{item.ticket}</span>}
      </h3>
      <div className={styles.icons}>
        {item.hasMinapp && <WechatOutlined />}
        {item.url && <IeOutlined />}
      </div>
      <p>{item.summary}</p>
    </a>
  </Card.Grid>
);

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
          <CardItem key={item.title} data={item} />
        ))}
      </Card>
    ))}
  </>
);

export default discuzSites;
