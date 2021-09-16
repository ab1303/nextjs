import { useContext } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";

import HeaderContext from "../contexts/HeaderContext";

function Navigation() {
  const router = useRouter();
  const { menuItems, color } = useContext(HeaderContext);
  console.log(router);

  return (
    <NavigationStyled>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            <Link href={item.slug}>
              <a className={router.pathname === item.slug ? "active" : ""}>
                {item.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </NavigationStyled>
  );
}

const NavigationStyled = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;

    li {
      margin-left: 10px;
    }

    a {
      text-decoration: none;
      color: #4c9ee3;

      &:hover {
        text-decoration: underline;
      }

      &.active {
        color: #ef6800;
      }
    }
  }
`;

export default Navigation;
