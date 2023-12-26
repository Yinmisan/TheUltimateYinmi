import ExpenseList  from "@/components/expenseList"
import Image from "next/image"
import Link from "next/link"
export default function Expense() {
    
  return (<>


    <div id="wrapper">
  {/* Header */}
  <header id="header">
    <div className="inner">
      {/* Logo */}
      <Link href="/" className="logo">
        <span className="symbol">
          <Image
               width={500}
               height={500} 
               src="/images/logo.svg" alt="" />
        </span>
        <span className="title">Back</span>
      </Link>
    </div>
  </header>
 
  {/* Main */}
  <div id="main">
    <div className="inner">
      <h1>Expense tracking and calculating</h1>
      
<ExpenseList/>
    </div>
  </div>
</div>
</>


    
  )
}
