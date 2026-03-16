import Image from "next/image";
import Link from "next/link";
import profilePic from "/profile-pic.jpeg";


export default function Home() {
  return (
    <main className="relative">
    {/* <div className="">
      <Link href="/contact">Contact</Link>
      
    </div> */}
    {/* =========== BACKGROUND ========================== */}
    {/* <div style= {{style top-0 w-full h-80 bg-[#A8E3F0]"></div>
    <div style= " top-80 w-full h-80 bg-[#FFFFFF]"></div> */}

    <div
      style={{
        backgroundColor: "#F5E2E3",
        top: 0,
        width: "100%",
        height: "20rem"
      }}
    ></div>

    {/* =========== HEADER - NAME - IMAGE ============== */}
    <h1 className="absolute top-40 right-10 z-20 text-yellow-400 font-serif text-9xl rotate-90">Thi Le</h1>
    <div> 
      {/* VERTICAL NAME */}
      
      {/* PROFILE PIC */}
      <img className="absolute top-20 right-60" src="/profile-pic.jpeg" width={350} height={600} alt="profile" ></img>
    </div>
    
    {/*============ "DRINK ME" BOTTLE button - Student Orgs button =============*/}
    <div className="absolute right-10 bottom-5 px-10 font-serif">
      <Link href="/studentorgs">picture</Link>
      <p className="text-sm mt-2"> click here to see my Student Orgs!</p>
    </div>


    {/*============ "EAT ME" PIE button - Projects button =============*/}
    <div className="absolute left-10 top-30 px-10 font-serif">
      <Link href="/projects">picture</Link>
      <p className="text-sm mt-2"> click here to see my Projects!</p>
    </div>


    {/* ============ MAIN PAGE DESCRIPTION ======================*/}
    <div className="relative left-10 top-0 w-150 font-serif text-black">
      <p>
        Hi, my name is Dac Nguyen Thi Le, but you can call me Thi. I am currently a junior at the University of Illinois Chicago (UIC), majoring in Data Science with a concentration in Business Analytics. <br></br>
        <br></br>
        I choose this major because I was looking for a field that combines business thinking with technical skills. I have always been interested in how companies make decisions, grow their strategy, and solve real-world problems. At the same time, I also enjoy working with technology, especially databases, algorithms, and coding.
      </p>
      <br></br>

      <h1><b>Contact:</b></h1>
      <p>My email: nguyenthii.ledacc@gmail.com</p>
      <a href = "https://www.linkedin.com/in/ldnthi12/">My Linkedin</a><br></br>
      <a href = "https://github.com/">My GitHub</a>
    </div>

    </main>
  );
  
}
// className="relative top-40 right-10 "