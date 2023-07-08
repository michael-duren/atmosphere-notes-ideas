import Spinner from '../../Ui/Spinners/Spinner.tsx';

export default function Synth() {
  return (
    <>
      <div className="flex flex-col">
        {/* left side */}
        <div className="flex">
          <Spinner />
        </div>
        <div className="flex gap-4"></div>
      </div>
      {/*right side controls*/}
      <div>HELLO</div>
    </>
  );
}
