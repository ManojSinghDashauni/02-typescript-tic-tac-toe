import Board from "./Board";

export default function App() {
  return (
    <div className="w-screen h-screen bg-blue-200">
      <h1 className="text-6xl font-bold underline fixed flex w-full mt-10 justify-center text-blue-600">
        Tic-Tac-Toe
      </h1>
      <div className="h-full flex justify-center items-center">
        <Board />
      </div>
    </div>
  );
}
