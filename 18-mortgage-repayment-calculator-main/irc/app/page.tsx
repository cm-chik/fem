export default function Home() {
  return (
    <main className="flex justify-center items-center sm:h-screen">
      <div className="sm:flex gap-8">
        <div className="flex flex-col gap-4 ">
          <div className="flex justify-between">
            <div>Mortgage Calculator</div>
            <div>Clear All</div>
          </div>

          <label>Mortgage Amount</label>

          <label>Mortgage Term</label>

          <label>Interest Rate</label>

          <label>Mortgage Type</label>

          <label>Repayment</label>
          <label>Interest Only</label>
        </div>
        <div>
          <div>
            Results shown here Complete the form and click “calculate
            repayments” to see what your monthly repayments would be. Your
            results Your results are shown below based on the information you
            provided.
          </div>
          <div>
            Repayment Interest Only Calculate Repayments Results shown here
            Complete the form and click “calculate repayments” to see what your
            monthly repayments would be. Your results Your results are shown
            below based on the information you provided. To adjust the results,
            edit the form and click “calculate repayments” again. Your monthly
            repayments Total you&apos;ll repay over the term
          </div>
        </div>
      </div>
    </main>
  );
}
