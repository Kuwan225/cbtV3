import { Row } from "antd";
import Card from "antd/lib/card/Card";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { PublicContext } from "../../../../layout/core";
import Styles from "./Card.module.scss";

const CardJurusan = ({ item }: any) => {
  const route = useRouter();
  const pblcContex = useContext(PublicContext)

  return (
    <div
      className={Styles.container}
      onClick={() => {
        route.push(`tingkatan`), pblcContex.setDataJurusan(item.jurusan);
      }}
    >
      <img src="/image/rpl.png" alt="img" />
      <h1 className={Styles.text}>{item.jurusan}</h1>
    </div>
  );
};

export default CardJurusan;
