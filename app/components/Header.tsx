import Link from "next/link";
import { useViewportScroll, motionValue } from "framer-motion";
import { Avatar, Git, Twitter, Instagram } from "./geist";
import { Panel } from "./Header.panel";
import {
  HeaderWrapper,
  HeaderGrid,
  HeaderFlex,
  Inner,
  Nav,
  SvgLink,
  TitleWrap,
} from "./Styles";

export const Header = () => {
  // const { scrollY } = useViewportScroll();

  return (
    <HeaderWrapper>
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
