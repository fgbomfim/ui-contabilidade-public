import { PropsWithChildren } from "react";
import styled from "styled-components";

interface ColumnProps extends React.HTMLAttributes<HTMLDivElement> {
  cy?: string;
}

export default function Column({ children, cy, ...rest }: PropsWithChildren<ColumnProps>) {
  return <Div data-cy={cy} {...rest}>{children}</Div>
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0px 20px;
  width: 1200px;
  margin: 0 auto;
  text-align: left;
  color: var(--platinum);
  @media (max-width: 576px) {}
  @media (max-width: 768px) {}
  @media (max-width: 992px) {}
  @media (max-width: 1200px) {}
`;