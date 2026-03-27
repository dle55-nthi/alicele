import Link from "next/link";

export default function Home() {
  return (
    <main className="font-serif">       
       {/* ============ Student Orgs button ============= */}
       <Link href="/studentorgs">
         <button>
           <img src="/balletshoes.png"></img>
         </button>
       </Link>


       {/*============Projects button =============*/}
       <Link href="/projects">
         <button>
           <img src="/pearl.png"></img>
         </button>
       </Link> 

       {/*============Contact button =============*/}
       <Link href="/contact">
         <button>
           <img src="/phone.png"></img>
         </button>
       </Link> 


       {/* ============ MAIN PAGE DESCRIPTION ======================*/}
       <div>
         <p>
           Hi, my name is Dac Nguyen Thi Le, but you can call me Thi. I am currently a junior at the University of Illinois Chicago (UIC), majoring in Data Science with a concentration in Business Analytics. I choose this major because I was looking for a field that combines business thinking with technical skills. I have always been interested in how companies make decisions, grow their strategy, and solve real-world problems. At the same time, I also enjoy working with technology, especially databases, algorithms, and coding.
         </p>
       </div>
    </main>
  )
}