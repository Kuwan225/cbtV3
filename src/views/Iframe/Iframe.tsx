import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Iframe = () => {

  const [dataMapel, setDataMapel] = useState([]);
  const [namaJurusan, setNamaJurusan] = useState<any>("");
  const [namaTingkatan, setNamaTingkatan] = useState<any>("");
  const [namaMapel, setNamaMapel] = useState<any>("");

  const getJurusan = localStorage?.getItem("jurusan");
  const getTingkatan = localStorage?.getItem("tingkatan");
  const getMapel = localStorage?.getItem("mapel");

  useEffect(() => {
    axios
      .get(`https://vanilla-cbt.smkyadikasrg.repl.co/v1/embed/link`)
      .then((res) => {
        setDataMapel(res.data.data);
      });

    setNamaJurusan(getJurusan);
    setNamaTingkatan(getTingkatan);
    setNamaMapel(getMapel);
  }, []);

  const datas = dataMapel.filter((res: any) => {
    return (
      res.tingkatan.tingkatan == namaTingkatan &&
      res.jurusan.jurusan == namaJurusan && res.mapel.namaMapel === namaMapel
    );
  });

  console.log(datas);
  return (
    <div style={{width:"100%",height:"100vh"}}>
        <h1 style={{textAlign:'center'}}>SMK YADIKA SOREANG CBT</h1>
        <iframe width="100%" height="100%" src="https://forms.office.com/Pages/ResponsePage.aspx?id=o6iABz8XQkWJPIvq7Yz3qowEmmhDhW5CpkJRCIev9oRUNEtBTUQ1UTlLWUhISDQxTDRHVjVKSE5LWi4u&" frameBorder="0" marginWidth={0} marginHeight={0} style={{border: "none", maxWidth:"100%", maxHeight:"100vh"}} allowFullScreen> </iframe>
    </div>
  )
}

export default Iframe