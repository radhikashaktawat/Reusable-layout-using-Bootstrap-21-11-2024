
//1. Import area

import Header from './compoent/Header';
import Footer from './compoent/Footer';
import Aside from './compoent/Aside';
import Scetion from './compoent/Section';


//2. Export area 

export default function Home() {


  // My home function is return something html code/Componet/ Jsx 
  return (
    
    <>
    
    <div className="container-flud radhika_tbdr">
      <Header />
      <main  className="radhika_tbdr text-center">
<div className="row h-100 m-0">
  <Aside/>
 <Scetion/>
</div>


      </main>
      <Footer/>
    </div>
    </>
  );
}
