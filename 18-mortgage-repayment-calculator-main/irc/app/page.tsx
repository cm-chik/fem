import "@/app/globals.css";
import Image from "next/image";
export default function Home() {
  return (
    <main className="flex  justify-center items-center h-screen min-h-screen p-4 text-plus-jakarta-sans bg-[#e3f4fc]">
      <div className="m-3 grid max-w-[25rem] sm:flex sm:justify-between gap-8 items-center w-full p-6 bg-white rounded-xl">
        <div className="flex flex-col gap-4 text-[#808f94]">
          <div className="flex justify-between items-center ">
            <div className="text-xl font-bold text-[#16313a]">
              Mortgage Calculator
            </div>
            <div className="text-sm">Clear All</div>
          </div>
          <label className="flex flex-col gap-2 after:text-white ">
            Mortgage Amount
            <input type="number" className="border rounded p-2" />
          </label>
          <label className="flex flex-col gap-2">
            Mortgage Term
            <input type="number" className="border rounded p-2" />
          </label>
          <label className="flex flex-col gap-2">
            Interest Rate
            <input type="number" className="border rounded p-2" />
          </label>

          <label className="flex flex-col gap-2">Repayment Type</label>
          <div className="flex flex-col gap-4">
            <label>
              <input
                type="radio"
                name="repaymentType"
                value="repayment"
                className="mr-2"
              />
              Repayment
            </label>
            <label>
              <input
                type="radio"
                name="repaymentType"
                value="interestOnly"
                className="mr-2"
              />
              Interest Only
            </label>
          </div>
          <button className="bg-[#d8da2f] text-[#0e2431] p-2 font-bold rounded-3xl w-[90%]">
            Calculate Repayments
          </button>
        </div>
        <div className="bg-[#0e2431] text-white p-4 flex flex-col items-center text-center justify-center rounded-bl-[40px]">
          <Image
            src="/images/illustration-empty.svg"
            alt="mortgage-calculator"
            height={100}
            width={100}
          />
          <p className="font-bold">Results shown here</p>
          <br />
          Complete the form and click “calculate repayments” to see what your
          monthly repayments would be.
        </div>
        <div className="hidden">
          Your results
          <br />
          Your results Your results are shown below based on the information you
          provided.
          <br />
          Repayment Interest Only Calculate Repayments Results shown here
          Complete the form and click “calculate repayments” to see what your
          monthly repayments would be. Your results Your results are shown below
          based on the information you provided. To adjust the results, edit the
          form and click “calculate repayments” again. Your monthly repayments
          Total you&apos;ll repay over the term
        </div>
      </div>
    </main>
  );
}
