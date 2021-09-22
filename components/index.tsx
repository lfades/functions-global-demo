import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import Link, { LinkProps } from 'next/link';
import styles from './index.module.css';

export const Code: FC = (p) => <code className={styles.inlineCode} {...p} />;

export const A: FC<PropsWithChildren<LinkProps>> = ({
  children,
  ...linkProps
}) => (
  <Link {...linkProps}>
    <a className={styles.link}>{children}</a>
  </Link>
);

export const UL: FC<HTMLAttributes<HTMLUListElement>> = (p) => (
  <ul
    {...p}
    className={`${styles.ul}${p.className ? ` ${p.className}` : ''}`}
  />
);
