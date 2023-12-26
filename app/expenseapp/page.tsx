import ExpenseList  from "@/components/expenseList"
export default function Expense() {
    
  return (<>


    <div id="wrapper">
  {/* Header */}
  <header id="header">
    <div className="inner">
      {/* Logo */}
      <a href="/" className="logo">
        <span className="symbol">
          <img src="images/logo.svg" alt="" />
        </span>
        <span className="title">Back</span>
      </a>
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
