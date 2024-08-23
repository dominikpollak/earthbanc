"use client";

import GoBack from "../components/global/GoBack";
import { FlexColCenter, PageHeading, PageSubHeading } from "../styles/common";

export default function NotFound() {
  return (
    <FlexColCenter
      style={{
        marginTop: "30px",
      }}
    >
      <PageHeading>Oops...</PageHeading>
      <PageSubHeading>This page doesn&apos;t exist</PageSubHeading>
      <GoBack href="/" />
    </FlexColCenter>
  );
}
