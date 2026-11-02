import React from 'react';
import { Link, useLocation } from 'react-router-dom';

type Props = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'id'> & { id: string };

export default function SectionLink({ id, children, ...props }: Props) {
  const { pathname } = useLocation();
  return <Link to={{ pathname, hash: `#${id}` }} {...props}>{children}</Link>;
}
