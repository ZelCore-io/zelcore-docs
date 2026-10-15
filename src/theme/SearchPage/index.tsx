import React from 'react';
import Head from '@docusaurus/Head';
import SearchPage from '@theme-original/SearchPage';
import type SearchPageType from '@theme/SearchPage';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof SearchPageType>;

export default function SearchPageWrapper(props: Props): React.ReactNode {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, follow" />
      </Head>
      <SearchPage {...props} />
    </>
  );
}
