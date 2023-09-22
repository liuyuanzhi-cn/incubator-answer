import { memo, FC } from 'react';
import { useTranslation } from 'react-i18next';

import { PluginInfo } from '@/utils/pluginKit';
import { getTransNs, getTransKeyPrefix } from '@/utils/pluginKit/utils';
import { SvgIcon } from '@/components';

import info from './info.yaml';
import { useGetAlgoliaInfo } from './services';
import './i18n';

const pluginInfo: PluginInfo = {
  slug_name: info.slug_name,
  type: info.type,
};

const Index: FC = () => {
  const { t } = useTranslation(getTransNs(), {
    keyPrefix: getTransKeyPrefix(pluginInfo),
  });

  const { data } = useGetAlgoliaInfo();
  console.log(data);
  if (!data?.icon) return null;

  return (
    <a
      className="d-flex align-items-center"
      href="https://www.algolia.com/"
      target="_blank"
      rel="noopener noreferrer">
      <span className="small text-secondary me-2">{t('search_by')}</span>
      <SvgIcon base64={data?.icon} />
    </a>
  );
};

export default {
  info: pluginInfo,
  component: memo(Index),
};
