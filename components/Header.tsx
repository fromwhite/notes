import Link from "next/link";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Avatar, Git, Twitter, Instagram } from "./geist";
import { Panel } from "./Panel";
import { useOffset } from "./hook/useOffset";
import {
  HeaderWrapper,
  HeaderGrid,
  HeaderFlex,
  Inner,
  Nav,
  SvgLink,
  TitleWrap,
} from "./Styles";

const headerVariants = {
  open: {
    height: 120,
    transition: { ease: "easeInOut", duration: 0.3 },
  },
  collapsed: {
    height: 60,
    transition: { ease: "easeInOut", duration: 0.3, delayChildren: 0.5 },
  },
};

const titleVariants = {
  open: {
    y: 70,
    transition: {
      ease: "easeInOut",
      duration: 0.4,
    },
  },
  collapsed: {
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.4,
    },
  },
};

export interface HeadProps {
  title?: string;
  offsetHeight?: number;
}

export const Header = (props: HeadProps) => {
  const { title, offsetHeight = 120 } = props;
  const reached = useOffset(offsetHeight / 2);

  const titleY = useMotionValue(0);
  const titleOpacity = useTransform(titleY, [10, 0], [0, 1]);

  return (
    <HeaderWrapper
      initial="open"
      animate={reached ? "collapsed" : "open"}
      variants={headerVariants}
      css={{
        backgroundColor: reached ? "var(--backdrop)" : "transparent",
      }}
    >
      <HeaderGrid>
        <HeaderFlex>
          <Inner>
            <Link className={"avatar"} href="/">
              <Avatar />
            </Link>
            <TitleWrap>
              <motion.span
                variants={titleVariants}
                style={{
                  y: titleY,
                  opacity: titleOpacity,
                }}
              >
                <a
                  href="#top"
                  onClick={(event) => {
                    event.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  tabIndex={-1}
                >
                  {title}
                </a>
              </motion.span>
            </TitleWrap>
          </Inner>

          <Nav>
            {/* <span>Snippets</span> */}

            <Panel />
            {/* sns */}
            {process.env.NEXT_PUBLIC_TWITTER && (
              <SvgLink
                href={process.env.NEXT_PUBLIC_TWITTER}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
              </SvgLink>
            )}
            {process.env.NEXT_PUBLIC_INSTAGRAM && (
              <SvgLink
                href={process.env.NEXT_PUBLIC_INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </SvgLink>
            )}
            {process.env.NEXT_PUBLIC_GITHUB && (
              <SvgLink
                href={process.env.NEXT_PUBLIC_GITHUB}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Git />
              </SvgLink>
            )}
          </Nav>
        </HeaderFlex>
      </HeaderGrid>
    </HeaderWrapper>
  );
};
