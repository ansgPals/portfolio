import { centerBoxStyles } from "@/styles/modules";
import styled from "@emotion/styled";
import { throttle } from "lodash";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
type SectionKey = "core" | "stack" | "career" | "project" | "contact";
type SectionRefs = Record<SectionKey, React.RefObject<HTMLElement | null>>;
interface MenuProps {
  sectionRefs: SectionRefs;
}
const menuItems = [
  { key: "core", label: "핵심역량" },
  { key: "stack", label: "기술스택" },
  { key: "career", label: "경력사항" },
  { key: "project", label: "프로젝트" },
  { key: "contact", label: "contact" },
] as const;

type MenuKey = (typeof menuItems)[number]["key"];

export default function Menu({ sectionRefs }: MenuProps) {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<SectionKey | null>(null);

  const handleClick = (key: MenuKey) => {
    sectionRefs[key]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    router.replace(
      {
        pathname: router.pathname,
        query: { ...router.query, section: key },
      },
      undefined,
      { shallow: true }
    );
  };

  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollPosition = window.scrollY + window.innerHeight / 3; // 뷰포트 상단 1/3 기준

      let currentSection: SectionKey | null = null;

      for (const [key, ref] of Object.entries(sectionRefs)) {
        const el = ref.current;
        if (el) {
          const { offsetTop } = el;
          if (scrollPosition >= offsetTop) {
            currentSection = key as SectionKey;
          }
        }
      }

      setActiveSection(currentSection);
    }, 100); // 100ms마다 호출

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRefs]);

  return (
    <StyledMenu>
      <ul>
        {menuItems.map(({ key, label }) => (
          <StyledMenuItem
            active={activeSection === key}
            key={key}
            onClick={() => handleClick(key)}
          >
            {label}
          </StyledMenuItem>
        ))}
      </ul>
    </StyledMenu>
  );
}

const StyledMenu = styled.div`
  width: 100%;
  ${centerBoxStyles};
  position: sticky;
  z-index: 999;
  top: 3rem;

  ul {
    ${centerBoxStyles};
    column-gap: 0.4rem;
    background-color: ${(props) => props.theme.colors.line100};
    border-radius: 1rem;
    padding: 0.2rem 2rem;
  }
`;

const StyledMenuItem = styled.li<{ active: boolean }>`
  font-size: ${(props) => props.theme.fontSizes.size18};
  padding: 0.8rem;
  border-radius: 0.8rem;
  cursor: pointer;
  background-color: ${(props) =>
    props.active ? props.theme.colors.grey100 : "transparent"};
  &:hover {
    background-color: ${(props) => props.theme.colors.grey100};
  }
`;
