export default function App() {
  return (
    <>
      <h1 className="flex text-3xl font-bold underline justify-center  bg-yellow-300 h-full w-full center">
        Hello world!
      </h1>
      <div class="flex">
        <div class="flex-none w-14 bg-red-50">01 flex-none</div>
        <div class="flex-initial w-64 bg-green-100">02 flex-initial w-64</div>
        <div class="flex-initial w-32 bg-green-400">03 flex-initial w-32</div>
      </div>
      <div class="flex">
        <div class="flex-1 w-14 bg-red-500">01 flex-1 w-14</div>
        <div class="flex-1 w-64 bg-green-100">02 class="flex-1 w-64</div>
        <div class="flex-1 w-32 bg-green-400">03 flex-1 w-32</div>
      </div>
      <div class="flex ...">
        <div class="flex-none w-14 bg-green-50 ...">01 flex-none w-14</div>
        <div class="flex-auto w-64 bg-green-100 ...">02 flex-auto w-64</div>
        <div class="flex-auto w-32 bg-green-400 ...">03 flex-auto w-32</div>
      </div>

      <div class="flex ...">
        <div class="flex-initial w-64">Logo</div>
        <div class="flex-auto bg-green-100">Header</div>
        <div class="flex-initial will-change-scroll bg-green-400">Login/logout</div>
      </div>

      <div className="flex">
        <div className="bg-red-400 flex-initial w-64 h-96">1</div>
        <div className="bg-green-300 flex-auto w-64">2</div>
      </div>
      <div class="basis-1/3 hover:basis-1/2">hover
</div>
    </>
  );
}
