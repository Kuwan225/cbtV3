import Card from "antd/lib/card/Card";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Styles from "./Card.module.scss";

const CardKelas = ({ item }: any) => {
  const route = useRouter();

  return (
    <Link href={`mapel`}>
      <Card
        onClick={() => {
          localStorage.setItem("tingkatan", item.tingkatan);
        }}
        className={Styles.container}
        style={{
          cursor: "pointer",
          width: 100,
          height: 100,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: 700,
          fontSize: 25,
        }}
      >
        {item.tingkatan}
      </Card>
    </Link>
  );
};

export default CardKelas;
