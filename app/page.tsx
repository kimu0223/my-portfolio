import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-200">
       {/*サッカー場の大枠*/ }
      <div className="relative w-[300px] h-[500px] bg-green-600 border-2 border-white rounded-lg shadow-lg">
        
        {/*センターサークル*/ }
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-white rounded-full opacity-50">
        </div>
        
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white opacity-50">
        </div>
        
        {/*選手１（ブログ)のへのリンク設置*/ }
        <Link 
          href="/blog"
          className="absolute top-[15%] left-1/2 transform -translate-x-1/2 w-8 h-8 bg-black rounded-full hover:bg-red-500 transition-colors"
          title="ブログへ">
        </Link>

        {/*選手２（プロフィール)のへのリンク設置*/ }
        <Link
          href="/profile"
          className="absolute top-[40%] left-[20%] w-8 h-8 bg-black rounded-full hover:bg-blue-500 transition-colors"
          title="プロフィールへ">
        </Link>
      </div>
    </div>
  );
}

