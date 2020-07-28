import { message } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styles from './index.less';

const footer = () => (
  <div className={styles.normal}>
    微信:
    <CopyToClipboard
      text="Overview_as"
      onCopy={() => message.success('已复制微信号')}
    >
      <span>Overview_as</span>
    </CopyToClipboard>
  </div>
);

export default footer;
