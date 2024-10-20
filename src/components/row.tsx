import { PropsWithChildren } from "react";
import styled from "styled-components";

interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  cy?: string;
}

export default function Row({ children, cy, ...rest }: PropsWithChildren<RowProps>) {
  return <Div data-cy={cy} {...rest}>{children}</Div>
}

const Div = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
