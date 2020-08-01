import { message } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styles from './index.less';

const footer = () => (
  <div className={styles.normal}>
    <a
      target="_blank"
      href="https://jinshuju.net/f/Er3ig3"
      className={styles.link}
    >
      申请收录
    </a>

    <span>联系方式: 微信&nbsp;</span>
    <CopyToClipboard
      text="Overview_as"
      onCopy={() => message.success('已复制微信号')}
    >
      <span>Overview_as</span>
    </CopyToClipboard>
  </div>
);

export default footer;
