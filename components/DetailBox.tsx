export const DetailBox = ({ label, value, icon: Icon }: { label: string; value: string | number; icon: any }) => (
  <div className="detail-box bg-green-950 border border-green-900/50 p-6 rounded-2xl shadow-2xl flex flex-col items-center text-center transition-all duration-300 hover:bg-green-900 hover:scale-105 group">
    <div className="p-3 bg-green-500/10 rounded-xl mb-4 group-hover:bg-green-500/20 transition-colors">
        <Icon className="w-6 h-6 text-green-400" />
    </div>
    <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{value}</p>
    <p className="text-sm font-bold text-green-400 uppercase tracking-widest mt-2">{label}</p>
  </div>
);
