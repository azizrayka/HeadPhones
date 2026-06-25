import Image from "next/image"

const Navbar = () => {
  return (
    <div className="fixed flex justify-between px-20 pt-5 w-full z-10">
        <Image className="w-30" src="/logo.png" alt="logo" width={110} height={100} />
        <button className="bg-[#c16719] text-white rounded-lg py-2 px-5 cursor-pointer">
            Buy Now
        </button>
    </div>
  )
}

export default Navbar