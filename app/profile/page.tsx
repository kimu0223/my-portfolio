import Image from "next/image";
import Link from "next/link";

const profile = {

    name: "佐藤 壮汰",
    age: "23歳",
    imageUrl: "/profile1.jpg",
    hobbies: ["プログラミング", "サッカー", "読書"],
    description:
      "23歳パパとして、日々奮闘中です。現在、ウェブ制作会社（営業会社）にてマーケンティング兼ディレクターとして勤務しています。将来的にはフルスタックエンジニアを目指し、転職活動を行なっています。その中で個人開発も行い、スキルアップに励んでいます。",
};

const skills = [

  // スキルデータのイメージ
  { name: "体力", value: 100 },   // value が数値
  { name: "向上心", value: 100 },
  { name: "Next.js", value: 60 }, // 技術も混ぜてOK
  { name: "React", value: 70 },

];

function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-2xl mx-auto">
        {/* プロフィールヘッダー */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">{profile.age}</h1>
          <div className="text-2xl text-indigo-600 font-semibold mb-4">{profile.name}</div>
          <p className="text-gray-600 leading-relaxed">{profile.description}</p>
        </div>

        {/* スキル一覧セクション */}
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8 overflow-y-auto max-h-96">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">スキル一覧</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-6">グラフとしてわかりやすく記載しております。<br />※個人的主観にはなるのでご了承ください</p>
          
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center gap-2 sm:gap-4">
                <span className="w-16 sm:w-24 text-xs sm:text-sm font-semibold text-gray-700 flex-shrink-0">{skill.name}</span>
                <div className="flex-1 min-w-0">
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-indigo-500 to-blue-500 h-full rounded-full transition-all duration-500"
                      style={{ width: `${skill.value}%` }}
                    />
                  </div>
                </div>
                <span className="w-10 sm:w-12 text-right text-xs sm:text-sm font-bold text-indigo-600 flex-shrink-0">{skill.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
