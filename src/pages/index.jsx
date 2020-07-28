import React from 'react';
import { Divider } from 'antd';
import styles from './index.less';
import DiscuzeSites from '@/pages/components/discuz-sites';
import ToolSites from '@/pages/components/tool-sites';
import Footer from '@/pages/components/footer';
import Header from '@/pages/components/header';

export default () => {
  return (
    <div className={styles.normal}>
      <Header />
      <DiscuzeSites />
      <Divider>Discuz站长推荐资源</Divider>
      <ToolSites />
      <Footer />
    </div>
  );
};
