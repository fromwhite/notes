import Link from "next/link";
import { Avatar, Git, Twitter, Instagram } from "./geist";
import { Panel } from "./Header.panel";
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

export const Header = () => {
  const offsetHeight = 120;
  const reached = useOffset(offsetHeight / 2);

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
              <p>{process.env.NEXT_PUBLIC_TITLE}</p>
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
