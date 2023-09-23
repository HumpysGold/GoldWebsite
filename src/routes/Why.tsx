import Nav from "../components/Nav";
import goldonbase from "../assets/goldonbase.svg";
import bar from "../assets/bar.png";
export function Why() {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <Nav />
      <img
        src={goldonbase}
        alt="goldonbase"
        className="h-50 z-10 mt-[-4rem] md:hidden "
      />
      <div className="mx-16 basis-full">
        <div className="flex flex-row items-center md:h-full">
          <div className="basis-full h-full w-full hidden md:flex justify-center ">
            <img src={bar} alt="bar" className="h-50 z-10 " />
          </div>
          <div className="flex flex-col gap-4 justify-center items-center md:pt-0 pt-32 basis-full">
            <h1 className="press-start-2p text-secondary text-4xl text-center">
              WHY GOLD
            </h1>
            <div className="font-semi-bold text-2xl text-center roboto-100">
              GOLD is the rarest gem on Base. Forged by the legendary Balancer
              whale Humpy, wrought by a team of DeFi artisans, $GOLD is a
              scarce, strategic resource with rich economic flywheels.
            </div>
            <div className="flex flex-row justify-center items-center gap-4">
              <a
                href="/buy"
                className="bg-secondary py-2 w-48 text-center rounded-lg text-black font-bold text-2xl roboto-bold"
              >
                Buy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}