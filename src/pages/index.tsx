import dynamic from "next/dynamic";
import React from 'react';
import Header from '../../components/Header';
const DynamicMap = dynamic(() => import('../../components/Map'), {ssr: false});

export default function Home() {
  return (
<div>
 <Header/>
   <DynamicMap/>
   </div>
  )
}
