"use client";

import Scene from "@/components/Scene";
import { useParams } from "next/navigation";

export default function View() {
  const { id } = useParams();
  return (
    <>
      <Scene></Scene>
    </>
  );
}
