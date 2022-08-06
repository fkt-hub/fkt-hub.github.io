import { default as NextLink, LinkProps as NextLinkProps } from 'next/link'
import { PropsWithChildren } from 'react'
import styles from './Link.module.scss'

const Link = ({children, active, ...props}: LinkProps) => {
    return(
        <NextLink {...props} passHref >
            <a className={`${styles.Link} ${active ? styles.Active : ""}`}>
                {children}
            </a>
        </NextLink>
    )
}

export default Link;

interface LinkProps extends PropsWithChildren<any>, NextLinkProps {}