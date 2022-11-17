import React, { useState, useEffect } from "react";
import Container from "../../layout/container/Container";
import CardMapel from "./Partials/CardMapel/CardMapel";
import axios from "axios";

const Mapel = () => {
  const [dataMapel, setDataMapel] = useState([]);
  const [namaJurusan, setNamaJurusan] = useState<any>("");
  const [namaTingkatan, setNamaTingkatan] = useState<any>("");

  const getJurusan = localStorage.getItem("jurusan");
  const getTingkatan = localStorage.getItem("tingkatan");

  useEffect(() => {
    const idTingkatan = localStorage.getItem("idTingkatan");
    axios
      .get(`https://vanilla-cbt.smkyadikasrg.repl.co/v1/embed/link`)
      .then((res) => {
        setDataMapel(res.data.data);
      });

    setNamaJurusan(getJurusan);
    setNamaTingkatan(getTingkatan);
  }, []);

  const datas = dataMapel.filter((res: any) => {
    return (
      res.tingkatan.tingkatan == namaTingkatan &&
      res.jurusan.jurusan == namaJurusan
    );
  });

  console.log(datas);
  return (
    <Container>
      {datas.map((res) => (
        <CardMapel item={res} />
      ))}
    </Container>
  );
};

export default Mapel;
